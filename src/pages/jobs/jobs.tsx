import { PageLayoyt } from "@/components/page-layout/page-layout";
import { 
  Button,
  Card, 
  CardBody, 
  CardFooter, 
  CardHeader, 
  Divider, 
  Heading, 
  Table, 
  TableContainer, 
  Tbody, 
  Td, 
  Th, 
  Thead, 
  Tr 
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { GoContainer } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const Jobs = () => {

  const navigate = useNavigate();

  return (
    <PageLayoyt>
      <Card>
        <CardHeader>
          <Heading size="md">Create a new Job</Heading>
        </CardHeader>
        <CardBody>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaCode size={50}/>
              </div>
              <div>
                <Heading size="sm">Author code with a script editor.</Heading>
                <div>
                  <Button colorScheme="blue" size="sm" onClick={() => navigate("./new-editor")}>
                    Script Editor
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Divider orientation="vertical" color="black"/>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <GoContainer size={50}/>
              </div>
              <div>
                <Heading size="sm">Create a job with interactive UI.</Heading>
                <div>
                  <Button colorScheme="blue" size="sm" disabled onClick={() => navigate("./new-visual")}>UI Editor</Button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md">Your Jobs</Heading>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Status</Th>
                  <Th>Last Execution</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>csv-to-parquet-test1</Td>
                  <Td>Success</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>csv-to-parquet-test1</Td>
                  <Td>Success</Td>
                  <Td>18-04-2024 10:19:27</Td>
                </Tr>
                <Tr>
                  <Td>csv-to-parquet-test1</Td>
                  <Td>Success</Td>
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