import { PageLayoyt } from "@/components/page-layout/page-layout";
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const Storage = () => {
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
                <Tr>
                  <Td>arquivo1</Td>
                  <Td>csv</Td>
                  <Td>1 MB</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>arquivo1</Td>
                  <Td>csv</Td>
                  <Td>1 MB</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>arquivo1</Td>
                  <Td>csv</Td>
                  <Td>1 MB</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>arquivo1</Td>
                  <Td>csv</Td>
                  <Td>1 MB</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>arquivo1</Td>
                  <Td>csv</Td>
                  <Td>1 MB</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>arquivo1</Td>
                  <Td>csv</Td>
                  <Td>1 MB</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>arquivo1</Td>
                  <Td>csv</Td>
                  <Td>1 MB</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
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