import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { PageLayoyt } from "@/components/page-layout/page-layout";
import { Button,
  Card, 
  CardBody, 
  CardHeader, 
  Editable, 
  EditableInput, 
  EditablePreview, 
  Flex, 
  Input, 
  Menu, 
  MenuButton, 
  MenuDivider, 
  MenuItem, 
  MenuList, 
  Stack, 
  Tab, 
  TabList, 
  TabPanel, 
  TabPanels, 
  Tabs, 
  useEditableControls 
} from "@chakra-ui/react";
import { Script } from "./tabs/script/script";

export const CreateJobEditor = () => {

  const [jobName, setJobName] = useState("Untitled");

  const EditableControls = () => {
    const {
      getEditButtonProps,
    } = useEditableControls();
    return (
      <Flex justifyContent='center'>
        <div {...getEditButtonProps()}>
          <FaEdit />
        </div>
      </Flex>
    );
  };

  return (
    <PageLayoyt>
      <Card>
        <CardHeader>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", }}>
              <Editable
                textAlign='center'
                defaultValue={jobName}
                fontSize='2xl'
                isPreviewFocusable={false}
              >
                <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                  <EditablePreview />
                  <Input as={EditableInput} />
                  <EditableControls />
                </div>
              </Editable>
            </div>
            <Stack spacing={4} direction='row' align='center'>
              <Menu>
                <MenuButton
                  px={4}
                  py={2}
                  borderRadius='md'
                >
                  <Button size="md">
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "7px" }}>
                      <span>Actions</span>
                      <IoIosArrowDropdownCircle />
                    </div>
                  </Button>
                </MenuButton>
                <MenuList>
                  <MenuItem>New File</MenuItem>
                  <MenuItem>New Window</MenuItem>
                  <MenuDivider />
                  <MenuItem>Open...</MenuItem>
                  <MenuItem>Save File</MenuItem>
                </MenuList>
              </Menu>
              <Button size='md'>
                Save
              </Button>
              <Button size='md'>
                Run
              </Button>
            </Stack>
          </div>
        </CardHeader>
        {/* <Divider /> */}
        <CardBody>
          <Tabs variant='enclosed'>
            <TabList>
              <Tab>Script</Tab>
              <Tab>Details</Tab>
              <Tab>Runs</Tab>
              <Tab>Version Control</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Script />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </PageLayoyt>
  );
};