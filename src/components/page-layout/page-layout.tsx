import React from "react";
import { Container } from "./styles";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const PageLayoyt = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  paths.shift();
  return (
    <Container>
      <Breadcrumb separator="/">
        <BreadcrumbItem />
        {paths.map((path, i) => (
          <BreadcrumbItem key={i}>
            <span style={{ textTransform: "capitalize" }}>{path}</span>
          </BreadcrumbItem>
        ))} 
      </Breadcrumb>
      {children}
    </Container>
  );
};