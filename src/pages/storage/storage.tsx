import { PageLayoyt } from "@/components/page-layout/page-layout";
import api from "@/services/api";
import { ReadFilesDTO } from "@/services/dto/read-files-dto";
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { formatBytes } from "@/utils/files";

const fetchFiles = async (page = 1): Promise<ReadFilesDTO[]> => {
  const res = await api.get<ReadFilesDTO[]>("/storage/files");
  return res.data;
};

export const Storage = () => {
  const toast = useToast();
  const [page, setPage] = useState(1);
  const { data: files, isError } = useQuery({
    queryFn: () => fetchFiles(page),
    queryKey: ["list-files", page],
    retry: false,
  });

  console.log(files);
  useEffect(() => {
    if (isError) {
      toast({
        title: "Error to list files",
        duration: 2000,
        status: "error"
      });
    }
  }, [isError]);

  return (
    <PageLayoyt>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", gap: "50px" }}>
        <Card width="100%">
          <CardHeader>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Heading size='lg' fontSize='50px' textAlign="center" width="100%" color="#0f4d8d">50 GB</Heading>
              <Heading size="md" textAlign="center" width="100%" color="#696d70">Storage Space</Heading>
            </div>
          </CardHeader>
        </Card>
        <Card width="100%">
          <CardHeader>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Heading size='lg' fontSize='50px' textAlign="center" width="100%" color="#0f4d8d">60 K</Heading>
              <Heading size="md" textAlign="center" width="100%" color="#696d70">Files Count</Heading>
            </div>
          </CardHeader>
        </Card>
        <Card width="100%">
          <CardHeader>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Heading size='lg' fontSize='50px' textAlign="center" width="100%" color="#0f4d8d">120 KB</Heading>
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
              <Button>Upload</Button>
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
                {files && files.map((file) => (
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
          {/* <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={() => {console.log("page change");}}
            pageRangeDisplayed={5}
            pageCount={10}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          /> */}
        </CardFooter>
      </Card>
    </PageLayoyt>
  );
};