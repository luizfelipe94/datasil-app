import { PageLayoyt } from "@/components/page-layout/page-layout";
import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { Editor } from "./tabs/editor/editor";

export const Catalog = () => {
  return (
    <PageLayoyt>
      <Tabs>
        <TabList>
          <Tab>Editor</Tab>
          <Tab>Recent Queries</Tab>
          <Tab>Saved Queries</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Editor />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageLayoyt>
  );
};