import { PageLayoyt } from "@/components/page-layout/page-layout";
import api from "@/services/api";
import { ReadFilesDTO } from "@/services/dto/storage/read-files-dto";
import { Button, Card, CardBody, CardFooter, CardHeader, Drawer, DrawerBody, DrawerContent, DrawerFooter, Heading, Table, Breadcrumb, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure, useToast, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { formatBytes } from "@/utils/files";
import { PageMetaDTO } from "@/services/dto/shared/page-meta-dto";
import Pagination from "@/components/pagination/pagination";
import { UploadModal } from "./components/upload-modal";
import { FileIcon } from "./components/file-icon";
import { TrHover } from "@/styles/styles";
import { CreateFolderModal } from "./components/create-folder-modal";

const fetchFiles = async (page = 1, depth = 0): Promise<PageMetaDTO<ReadFilesDTO>> => {
  const res = await api.get<PageMetaDTO<ReadFilesDTO>>(`/storage/files?page=${page}&depth=${depth}`);
  return res.data;
};

const fetchStats = async (): Promise<{ size: number; count: number; average: number }> => {
  const res = await api.get<{ size: number; count: number; average: number }>("/storage/stats");
  return res.data;
};

export const Storage = () => {

  const toast = useToast();
  const disclosureUpload = useDisclosure();
  const disclosureFolder = useDisclosure();
  const drawerDisclosure = useDisclosure();
  const [page, setPage] = useState(1);
  const fileRef = useRef<any>();
  const [currentFolder, setCurrentFolder] = useState({
    depth: 0,
    path: "/",
  });

  const { data: files, isError, refetch, } = useQuery({
    queryFn: () => fetchFiles(page, currentFolder.depth),
    queryKey: ["list-files", page, currentFolder.path],
    retry: false,
  });

  const { data: stats, isError: isErrorStats } = useQuery({
    queryFn: () => fetchStats(),
    queryKey: ["get-stats"],
    retry: false,
  });

  const handleFileClick = async (file: ReadFilesDTO) => {
    fileRef.current = file;
    if (file.extension == "folder") {
      setCurrentFolder({
        depth: file.depth + 1,
        path: file.path,
      });
      console.log(currentFolder);
      await refetch();
    } else {
      drawerDisclosure.onOpen();
    }
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: "Error to list files",
        duration: 2000,
        status: "error"
      });
    }
    if (isErrorStats) {
      toast({
        title: "Error fetch stats",
        duration: 2000,
        status: "error"
      });
    }
  }, [isError, isErrorStats]);

  return (
    <PageLayoyt>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", gap: "50px" }}>
        <Card width="100%">
          <CardHeader>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Heading size='lg' fontSize='50px' textAlign="center" width="100%" color="#0f4d8d">{formatBytes(stats?.size || 0)}</Heading>
              <Heading size="md" textAlign="center" width="100%" color="#696d70">Storage Space</Heading>
            </div>
          </CardHeader>
        </Card>
        <Card width="100%">
          <CardHeader>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Heading size='lg' fontSize='50px' textAlign="center" width="100%" color="#0f4d8d">{stats?.count || 0}</Heading>
              <Heading size="md" textAlign="center" width="100%" color="#696d70">Files Count</Heading>
            </div>
          </CardHeader>
        </Card>
        <Card width="100%">
          <CardHeader>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Heading size='lg' fontSize='50px' textAlign="center" width="100%" color="#0f4d8d">{formatBytes(stats?.average || 0)}</Heading>
              <Heading size="md" textAlign="center" width="100%" color="#696d70">Average Size</Heading>
            </div>
          </CardHeader>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Breadcrumb>
                {currentFolder.path.split("/").map((path, i) => (
                  <BreadcrumbItem isCurrentPage key={i}>
                    <BreadcrumbLink>{path}</BreadcrumbLink>
                  </BreadcrumbItem>
                ))}
              </Breadcrumb>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <Button colorScheme="blue" onClick={disclosureUpload.onOpen}>Upload</Button>
              <Button onClick={disclosureFolder.onOpen}>Create Folder</Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Extension</Th>
                  <Th>Size</Th>
                  <Th>Upload Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {files?.data && files.data.map((file) => (
                  <TrHover key={file.id} as={Tr} onClick={() => handleFileClick(file)} ref={fileRef}>
                    <Td>
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        <FileIcon extension={file.extension} />
                        {file.name}
                      </div>
                    </Td>
                    <Td>{file.extension}</Td>
                    <Td>{file.size > 0 && formatBytes(file.size)}</Td>
                    <Td>{format(file.createdAt, "dd/MM/yyyy HH:mm:ss")}</Td>
                  </TrHover>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
        <CardFooter>
          <div style={{ display: "flex", alignContent: "center", justifyContent: "flex-end", width: "100%" }}>
            <Pagination
              initialPage={page}
              itemsPerPage={10}
              pageCount={files?.pageCount || 0}
              totalItems={files?.itemCount || 0}
              type="simple"
              onSelect={(page) => setPage(page)}
            />
          </div>
        </CardFooter>
      </Card>
      <UploadModal isOpen={disclosureUpload.isOpen} onClose={disclosureUpload.onClose} path={currentFolder.path} />
      <CreateFolderModal isOpen={disclosureFolder.isOpen} onClose={disclosureFolder.onClose} />
      <Drawer
        isOpen={drawerDisclosure.isOpen}
        placement='right'
        onClose={drawerDisclosure.onClose}
        finalFocusRef={fileRef}
        size="sm"
      >
        <DrawerContent>
          <DrawerBody>
            {fileRef.current?.name || "no file selected"}
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={drawerDisclosure.onOpen} ref={fileRef}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </PageLayoyt>
  );
};