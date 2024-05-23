import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AppProvider from "./context/app-provider";

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
          <Route path="/home" element={<div>home</div>} />
          <Route path="/ingestion" element={<div>ingestion</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};