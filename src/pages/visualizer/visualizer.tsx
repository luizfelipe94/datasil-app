import { PageLayoyt } from "@/components/page-layout/page-layout";
import Pagination from "@/components/pagination/pagination";
import { Card, CardHeader, Heading, CardBody, TableContainer, Table, Thead, Tr, Th, Tbody, Td, CardFooter } from "@chakra-ui/react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

export const Visualizer = () => {

  const [page, setPage] = useState(1);

  return (
    <PageLayoyt>
      <Card>
        <CardHeader>
          <Heading size="md">Your Dashboards</Heading>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Status</Th>
                  <Th>Owner</Th>
                  <Th>Last Modified</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <ChakraLink as={ReactRouterLink} to={`./${"123-312"}`} color="teal">
                      dash1
                    </ChakraLink>
                  </Td>
                  <Td>DRAFT</Td>
                  <Td>Luiz Silva</Td>
                  <Td>18-04-2024 10:19:27</Td>
                  <Td>
                    <div style={{ cursor: "pointer" }} >
                      <MdDelete color="#ff0000" size={20}/>
                    </div>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <ChakraLink as={ReactRouterLink} to={`./${"123-312"}`} color="teal">
                      dash1
                    </ChakraLink>
                  </Td>
                  <Td>DRAFT</Td>
                  <Td>Luiz Silva</Td>
                  <Td>18-04-2024 10:19:27</Td>
                  <Td>
                    <div style={{ cursor: "pointer" }} >
                      <MdDelete color="#ff0000" size={20}/>
                    </div>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <ChakraLink as={ReactRouterLink} to={`./${"123-312"}`} color="teal">
                      dash1
                    </ChakraLink>
                  </Td>
                  <Td>DRAFT</Td>
                  <Td>Luiz Silva</Td>
                  <Td>18-04-2024 10:19:27</Td>
                  <Td>
                    <div style={{ cursor: "pointer" }} >
                      <MdDelete color="#ff0000" size={20}/>
                    </div>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
        <CardFooter>
          <div style={{ display: "flex", alignContent: "center", justifyContent: "flex-end", width: "100%" }}>
            <Pagination
              initialPage={page}
              itemsPerPage={10}
              pageCount={5}
              totalItems={50}
              type="simple"
              onSelect={(page) => setPage(page)}
            />
          </div>
        </CardFooter>
      </Card>
    </PageLayoyt>
  );
};