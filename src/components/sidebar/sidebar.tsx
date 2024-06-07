import { Container, Content, Footer, Header, Item, ItemHover } from "./styles";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { TbMessageChatbot } from "react-icons/tb";
import { SiAbbrobotstudio } from "react-icons/si";
import { GoWorkflow } from "react-icons/go";
import { GrCatalog } from "react-icons/gr";
import { FaChartArea } from "react-icons/fa";
import { CiFolderOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Profile } from "../profile/profile";
import { DatasilLogo } from "@/assets";
import { Heading } from "@chakra-ui/react";

const menuItemsDataEngineering = [
  {
    title: "Storage",
    icon: <CiFolderOn />,
    link: "/storage",
  },
  {
    title: "Jobs",
    icon: <SiAbbrobotstudio />,
    link: "/jobs",
  },
  {
    title: "Catalog",
    icon: <GrCatalog />,
    link: "/catalog",
  },
  {
    title: "Visualizer",
    icon: <FaChartArea />,
    link: "/visualizer",
  },
  {
    title: "Workflows",
    icon: <GoWorkflow />,
    link: "/workflows",
  },
];

const menuItemsAI = [
  {
    title: "Models",
    icon: <FaWandMagicSparkles />,
    link: "/models",
  },
  {
    title: "Playground",
    icon: <TbMessageChatbot />,
    link: "/playground",
  },
];

export const Sidebar = ({isOpen, setOpen}: { isOpen: boolean, setOpen: any }) => {
  return (
    <Container aria-expanded={false}>
      <Header $expand={false} onClick={setOpen}>
        <DatasilLogo />
      </Header>
      <Content>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "30px", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <div style={{ marginLeft: "5px" }}>
                <Heading size="sm" color="teal">Data</Heading>
              </div>
              <div>
                <ul style={{ listStyle: "none" }}>
                  {menuItemsDataEngineering.map((item) => (
                    <li key={item.title} style={{ padding: "0px" }}>
                      <ItemHover>
                        <Link to={item.link}>
                          <Item>
                            <div>{item.icon}</div>
                            <div>
                              {item.title}
                            </div>
                          </Item>
                        </Link>
                      </ItemHover>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <div style={{ marginLeft: "5px" }}>
                <Heading size="sm" color="teal">AI</Heading>
              </div>
              <div>
                <ul style={{ listStyle: "none" }}>
                  {menuItemsAI.map((item) => (
                    <li key={item.title} style={{ padding: "0px" }}>
                      <ItemHover>
                        <Link to={item.link}>
                          <Item>
                            <div>{item.icon}</div>
                            <div>
                              {item.title}
                            </div>
                          </Item>
                        </Link>
                      </ItemHover>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer>
        <Profile />
      </Footer>
    </Container>
  );
};