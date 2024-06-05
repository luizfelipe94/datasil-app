import { Text, Button, Card, Divider, FormControl, FormLabel, Heading, Select, Tag, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { MdDelete, MdOutlineRefresh } from "react-icons/md";
import { Editor as MEditor, useMonaco } from "@monaco-editor/react";
import * as ReactTabs from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./editor.css";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export const Editor = () => {

  const monaco = useMonaco();

  const editorRef = useRef();
  const [currentQuery, setCurrentQuery] = useState("");

  const onMount = (editor: any) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("datasil", {
        base: "vs",
        inherit: true,
        rules: [],
        colors: {
          "editor.foreground": "#000000",
          "editor.background": "#e6e5e5",
          "editorCursor.foreground": "#8B0000",
          "editor.lineHighlightBackground": "#0000FF20",
          "editorLineNumber.foreground": "#008800",
          "editor.selectionBackground": "#88000030",
          "editor.inactiveSelectionBackground": "#88000015",
        },
      });
    }
  }, [monaco]);

  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "row", height: "85vh", padding: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "20%", padding: "10px", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Heading size="md">Catalog</Heading>
            <div><MdOutlineRefresh size={25} /></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <FormControl>
              <FormLabel>Database:</FormLabel>
              <Select>
                <option>db123</option>
                <option>db456</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Table:</FormLabel>
              <Select>
                <option>table1</option>
                <option>table2</option>
              </Select>
            </FormControl>
            <Divider />
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "15px" }}>
              <div><Heading size="sm">table1</Heading></div>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <span>col1</span>
                    <span style={{ color: "#afafaf" }}>VARCHAR</span>
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <span>col2</span>
                    <span style={{ color: "#afafaf" }}>VARCHAR</span>
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <span>col3</span>
                    <span style={{ color: "#afafaf" }}>VARCHAR</span>
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <span>col4</span>
                    <span style={{ color: "#afafaf" }}>VARCHAR</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "80%", gap: "10px" }}>
          <div>            
            <ReactTabs.Tabs>
              <ReactTabs.TabList>
                <ReactTabs.Tab>
                  <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyContent: "space-between" }}>
                    <span>Query 1</span>
                    <span><MdDelete color="#ff0000" size={20}/></span>
                  </div>
                </ReactTabs.Tab>
                <ReactTabs.Tab>
                  <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyContent: "space-between" }}>
                    <span>Query 2</span>
                    <span><MdDelete color="#ff0000" size={20}/></span>
                  </div>
                </ReactTabs.Tab>
                <ReactTabs.Tab>
                  <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyContent: "space-between" }}>
                    <span>Query 3</span>
                    <span><MdDelete color="#ff0000" size={20}/></span>
                  </div>
                </ReactTabs.Tab>
                <ReactTabs.Tab>+</ReactTabs.Tab>
              </ReactTabs.TabList>
              <ReactTabs.TabPanel>
                <MEditor 
                  height="40vh" 
                  defaultLanguage="sql" 
                  theme="datasil" 
                  defaultValue={query}
                  onMount={onMount} 
                  value={currentQuery} 
                  options={{ minimap: { enabled: false } }}                  
                />
              </ReactTabs.TabPanel>
              <ReactTabs.TabPanel>
                <MEditor 
                  height="70vh" 
                  defaultLanguage="sql" 
                  theme="datasil" 
                  defaultValue={query}
                  onMount={onMount} 
                  value={currentQuery} 
                  options={{ minimap: { enabled: false } }}                  
                />
              </ReactTabs.TabPanel>
              <ReactTabs.TabPanel>
                <MEditor 
                  height="70vh" 
                  defaultLanguage="sql" 
                  theme="datasil" 
                  defaultValue={query}
                  onMount={onMount} 
                  value={currentQuery} 
                  options={{ minimap: { enabled: false } }}                  
                />
              </ReactTabs.TabPanel>
            </ReactTabs.Tabs>
          </div>
          <div style={{ border: "1px solid #e6e5e5", borderRadius: "5px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "30px", alignItems: "center" }}>
              <Button colorScheme="teal">
                <div style={{ display: "flex", flexDirection: "row", gap: "5px", alignItems: "center" }}>
                  <Text fontWeight="bold">Run</Text>
                  <FaPlay />
                </div>
              </Button>
              <div style={{ display: "flex", flexDirection: "row", gap: "5px", alignItems: "center" }}>
                <Text fontSize='sm' fontWeight="bold">Run Time: </Text>
                <Tag size="md" colorScheme="green" variant='solid'>
                  <Text fontWeight="bold" color="white">00:00:00.00</Text>
                </Tag>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button colorScheme="blue">Save</Button>
            </div>
          </div>
          <div style={{ padding: "10px", border: "1px solid #e6e5e5", borderRadius: "5px", overflowY: "scroll" }}>
            <TableContainer>
              <Table size='sm'>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </Card>
  );
};

const query = `select *
from sdi_traces
where uniquekey = 'SM-S918BZRKZTO-S824-FC47';

select *
from sdi_transactions
where uniquekey = 'End-Update-Orders'
order by timestamp desc;

SELECT timestamp, triggername, tenanttitle, uniquekey, tags, createdat, status, transaction, subscriber
FROM sdi_transactions
WHERE subscriber = '5ece588cde4afd0016494d81'
AND  timestamp BETWEEN FROM_UNIXTIME(1709845802) AND FROM_UNIXTIME(1709847602)
    AND uniqueKey = '1416001115984-01'
ORDER BY timestamp DESC
OFFSET 0 
LIMIT 50
             
SHOW TBLPROPERTIES sdi_traces;
             
ALTER TABLE sdi_traces SET TBLPROPERTIES ('vacuum_max_snapshot_age_seconds'='60');

OPTIMIZE sdi_traces REWRITE DATA USING BIN_PACK;

VACUUM sdi_traces;
`;