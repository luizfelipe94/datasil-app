import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { styled } from "styled-components";

const Container = styled.div`
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  height: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  /* border: 1px solid black; */
  align-items: center;
  background-color: white;
`;

export const Login = () => {
  return (
    <div style={{ backgroundColor: "#d7eded", height: "100vh" }}>
      <Container>
        <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center", marginTop: "100px", width: "65%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", width: "60%" }}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
            </div>
            <Button colorScheme='blue'>Login</Button>
          </div>
          <div style={{ width: "35%", borderRadius: "0px 10px 10px 00px", backgroundImage: "url('https://www.coachr.com.br/wp-content/uploads/2018/09/AI.jpeg')" }}>
            
          </div>
        </div>
      </Container>
    </div>
  );
};