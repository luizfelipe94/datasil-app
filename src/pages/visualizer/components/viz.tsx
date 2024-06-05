import { Heading } from "@chakra-ui/react";

export const Viz = ({ chart }: { chart: any }) => {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      height: "100%", 
      width: "100%", 
      padding: "5px", 
      backgroundColor: "white", 
    }}>
      <div style={{ padding: "5px" }}>
        <Heading size="lg" color="teal">Title</Heading>
      </div>
      <div style={{ height: "100%", width: "100%" }}>
        {chart}
      </div>
    </div>
  );
};