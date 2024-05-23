import { Container, Content, Header, Item } from "./styles";
import { FaChevronDown } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { SiAbbrobotstudio } from "react-icons/si";
import { GoWorkflow } from "react-icons/go";
import { GrCatalog } from "react-icons/gr";
import { FaChartArea } from "react-icons/fa";



import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const menuItems = [
  {
    title: "Home",
    icon: <CiHome />,
    link: "/home",
  },
  {
    title: "Jobs",
    icon: <SiAbbrobotstudio />,
    link: "/jobs",
  },
  {
    title: "Workflows",
    icon: <GoWorkflow />,
    link: "/workflows",
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
];

export const Sidebar = ({isOpen, setOpen}: { isOpen: boolean, setOpen: any }) => {
  return (
    <Container aria-expanded={false}>
      <Header $expand={false} onClick={setOpen}>
        {/* <MenuIcon /> */}
        DATASIL
      </Header>
      <Content>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.title}>
                <Item>
                  <div>{item.icon}</div>
                  <div>
                    {item.title}
                  </div>
                </Item>
              </li>
            ))}
          </ul>
        </div>
      </Content>
    </Container>
  );
};