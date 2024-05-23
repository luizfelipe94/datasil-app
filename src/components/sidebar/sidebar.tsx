import { Container, Content, Footer, Header, Item } from "./styles";
import { CiHome } from "react-icons/ci";
import { SiAbbrobotstudio } from "react-icons/si";
import { GoWorkflow } from "react-icons/go";
import { GrCatalog } from "react-icons/gr";
import { FaChartArea } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Profile } from "../profile/profile";
import { DatasilLogo } from "@/assets";

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
        <DatasilLogo />
      </Header>
      <Content>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link to={item.link}>
                  <Item>
                    <div>{item.icon}</div>
                    <div>
                      {item.title}
                    </div>
                  </Item>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Content>
      <Footer>
        <Profile />
      </Footer>
    </Container>
  );
};