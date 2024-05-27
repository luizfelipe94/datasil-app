import { PageLayoyt } from "@/components/page-layout/page-layout";
import { Card, CardHeader, Heading, CardBody, TableContainer, Table, Thead, Tr, Th, Tbody, Td, CardFooter } from "@chakra-ui/react";

export const Catalog = () => {
  return (
    <PageLayoyt>
      <Card>
        <CardHeader>
          <Heading size="md">Your Databases</Heading>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Created At</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>system-client1</Td>
                  <Td>system databse of client1</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>system-client1</Td>
                  <Td>system databse of client1</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>system-client1</Td>
                  <Td>system databse of client1</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>system-client1</Td>
                  <Td>system databse of client1</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>system-client1</Td>
                  <Td>system databse of client1</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>system-client1</Td>
                  <Td>system databse of client1</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>system-client1</Td>
                  <Td>system databse of client1</Td>
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