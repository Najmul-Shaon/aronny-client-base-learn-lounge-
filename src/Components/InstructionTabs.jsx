import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const InstructionTabs = () => {
  return (
    <div className="my-24 container mx-auto p-2 md:p-0">
      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
          <Tab>Title 4</Tab>
        </TabList>
        <TabPanel>
          <h3>Tab 1</h3>
        </TabPanel>
        <TabPanel>
          <h3>Tab 2</h3>
        </TabPanel>
        <TabPanel>
          <h3>Tab 3</h3>
        </TabPanel>
        <TabPanel>
          <h3>Tab 4</h3>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default InstructionTabs;
