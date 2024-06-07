import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AppProvider from "./context/app-provider";
import { Home } from "./pages/home/home";
import { Jobs } from "./pages/jobs/jobs";
import { Workflows } from "./pages/workflows/workflows";
import { Catalog } from "./pages/catalog/catalog";
import { Visualizer } from "./pages/visualizer/visualizer";
import { CreateJobEditor } from "./pages/jobs/create/create-job-editor";
import { CreateJobVisual } from "./pages/jobs/create/create-job-visual";
import { Storage } from "./pages/storage/storage";
import { Dashboard } from "./pages/visualizer/dashboard";
import { Login } from "./pages/login/login";
import { ChakraProvider } from "@chakra-ui/react";

export const Router = () => {

  const Layout = () => (
    <AppProvider>
      <Outlet />
    </AppProvider>
  );

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/new-editor" element={<CreateJobEditor />} />
            <Route path="/jobs/new-visual" element={<CreateJobVisual />} />
            <Route path="/jobs/:id" element={<Jobs />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/visualizer" element={<Visualizer />} />
            <Route path="/visualizer/:id" element={<Dashboard />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};