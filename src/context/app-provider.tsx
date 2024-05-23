import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Sidebar } from "../components/sidebar/sidebar";
import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line react/prop-types
const AppProvider: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={{ }}>
      <ChakraProvider>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar isOpen={isSidebarOpen} setOpen={toggleSidebar}/>
          {children}
        </div>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
