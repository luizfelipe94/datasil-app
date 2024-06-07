import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Sidebar } from "../components/sidebar/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }: { children: React.ReactNode }) => {

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={{}}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar isOpen={isSidebarOpen} setOpen={toggleSidebar} />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default AppProvider;
