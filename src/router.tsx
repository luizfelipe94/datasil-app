import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AppProvider from "./context/app-provider";
import { Home } from "./pages/home/home";
import { Jobs } from "./pages/jobs/jobs";
import { Workflows } from "./pages/workflows/workflows";
import { Catalog } from "./pages/catalog/catalog";
import { Visualizer } from "./pages/visualizer/visualizer";
import { CreateJobEditor } from "./pages/jobs/create/create-job-editor";
import { CreateJobVisual } from "./pages/jobs/create/create-job-visual";

export const Router = () => {

  const Layout = () => (
    <AppProvider>
      <Outlet />
    </AppProvider>
  );


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<div>login</div>}/>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/new-editor" element={<CreateJobEditor />} />
          <Route path="/jobs/new-visual" element={<CreateJobVisual />} />
          <Route path="/jobs/:id" element={<Jobs />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/visualizer" element={<Visualizer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};