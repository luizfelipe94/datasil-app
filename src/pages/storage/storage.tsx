import { PageLayoyt } from "@/components/page-layout/page-layout";
import api from "@/services/api";
import { ReadFilesDTO } from "@/services/dto/storage/read-files-dto";
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure, useToast } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { formatBytes } from "@/utils/files";
import { PageMetaDTO } from "@/services/dto/shared/page-meta-dto";
import Pagination from "@/components/pagination/pagination";
import { UploadModal } from "./components/upload-modal";

const fetchFiles = async (page = 1): Promise<PageMetaDTO<ReadFilesDTO>> => {
  const res = await api.get<PageMetaDTO<ReadFilesDTO>>(`/storage/files?page=${page}`);
  return res.data;
};

const fetchStats = async (page = 1): Promise<{ size: number; count: number; average: number }> => {
  const res = await api.get<{ size: number; count: number; average: number }>("/storage/stats");
  return res.data;
};

export const Storage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [page, setPage] = useState(1);
  const { data: files, isError } = useQuery({
    queryFn: () => fetchFiles(page),
    queryKey: ["list-files", page],
    retry: false,
  });
  const { data: stats, isError: isErrorStats } = useQuery({
    queryFn: () => fetchStats(),
    queryKey: ["get-stats"],
    retry: false,
  });

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
            <Heading size="md">Files</Heading>
            <div>
              <Button onClick={onOpen}>Upload</Button>
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
                  <Tr key={file.id}>
                    <Td>{file.name}</Td>
                    <Td>{file.extension}</Td>
                    <Td>{formatBytes(file.size)}</Td>
                    <Td>{format(file.createdAt, "dd/MM/yyyy HH:mm:ss")}</Td>
                  </Tr>
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
      <UploadModal isOpen={isOpen} onClose={onClose}/>
    </PageLayoyt>
  );
};