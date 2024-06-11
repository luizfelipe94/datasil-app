import "./dashboard.css";
import { PageLayoyt } from "@/components/page-layout/page-layout";
import { Button, Card, CardBody, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, Heading, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Viz } from "./components/viz";
import { TinyBar } from "./components/charts/tiny-bar";
import { TinyLine } from "./components/charts/tiny-line";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const Dashboard = () => {

  const { id } = useParams<string>();
  const [isEditMode, setIsEditMode] = useState(false);
  const [state, setState] = useState<any>({
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  const onLayoutChange = (layout: any, layouts: any) => {
    console.log("layout changed", layout);
    saveToLS("layouts", layouts);
    setState({ layouts });
  };

  return (
    <PageLayoyt>
      <Card>
        <CardBody>
          <div style={{  display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <Heading as='h2' size='xl' color="teal">{id} - MyDash123</Heading>
              </div>
              <div style={{  display: "flex", flexDirection: "row", gap: "20px" }}>
                {!isEditMode ?
                  <>
                    <Button colorScheme='blue' onClick={() => setIsEditMode(!isEditMode)}>Edit</Button>
                    <Menu>
                      <MenuButton as={Button}>
                      ...
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Save as PDF</MenuItem>
                        <MenuItem>Send to Email</MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                  :
                  <>
                    <Button colorScheme='blue'>Save</Button>
                    <Button ref={btnRef} colorScheme='blue' onClick={onOpen}>Add Chart</Button>
                    <Button onClick={() => setIsEditMode(!isEditMode)}>Cancel</Button>
                    <Menu>
                      <MenuButton as={Button}>
                      ...
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Menu1 in editing</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                }
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", height: "80vh", gap: "5px" }}>
              <div style={{ width: "100%", border: "1px solid #e6e5e5",  backgroundColor: "#e0e2ec81", overflowY: "scroll" }}>
                <ResponsiveReactGridLayout
                  className="layout"
                  cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                  rowHeight={30}
                  layouts={state.layouts}
                  onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
                  isResizable={isEditMode}
                  isDraggable={isEditMode}
                >
                  <div key="1" style={{ border: isEditMode ? "2px dashed gray" : "" }}><Viz chart={<TinyBar />} /></div>
                  <div key="2" style={{ border: isEditMode ? "2px dashed gray" : "" }}><Viz chart={<TinyLine />} /></div>
                </ResponsiveReactGridLayout>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Charts</DrawerHeader>
          <DrawerBody>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", overflowY: "scroll" }} draggable>
              <div style={{ border: "1px solid #e6e5e5", padding: "20px", borderRadius: "5px" }}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <div><Heading size="md" color="teal">chart1</Heading></div>
                      {/* <div>status</div> */}
                    </div>
                  </li>
                  <li>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <div>query</div>
                      <div>myquery1</div>
                    </div>
                  </li>
                  <li>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <div>type</div>
                      <div>bar</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </PageLayoyt>
  );
};

function saveToLS(key: any, value: any) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}