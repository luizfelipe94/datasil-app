import { useAuth } from "@/hooks/useAuth";
import { FormControl, FormLabel, Input, Button, FormErrorMessage, useToast, Text } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

type FormValues = {
  email: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.password ? values : {},
    errors: !values.email
      ? {
        email: { type: "required", message: "Email required!" },
        password: { type: "required", message: "Password required!" },
      }
      : {},
  };
};

export const Login = () => {

  const navigate = useNavigate();
  const { isAuthenticated, signin } = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });

  const [unauthorized, setUnauthorized] = useState(false);

  const onSubmit = handleSubmit((data) => {
    signin(data.email, data.password)
      .then(() => {
        navigate("/home", { replace: true });
      })
      .catch((error: AxiosError) => {
        console.log(error);
        if (error.response?.status === 401 || error.response?.status === 400) setUnauthorized(true);
        else {
          toast({
            title: "Internal server error",
            duration: 4000,
            status: "error"
          });
        }
      });
  });

  return (
    <form onSubmit={onSubmit}>
      <div style={{ backgroundColor: "#d7eded", height: "100vh" }}>
        <Container>
          <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center", marginTop: "100px", width: "65%" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "30px", width: "60%" }}>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input {...register("email")} type="email" />
                  {errors?.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={!!errors.password}>
                  <FormLabel>Password</FormLabel>
                  <Input {...register("password")} type="password" />
                  {errors?.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
                </FormControl>
              </div>
              <Button colorScheme='blue' type="submit">Login</Button>
              {unauthorized && (
                <Text fontSize='sm' color='tomato'>
                  Wrong email or password
                </Text>
              )}
            </div>
            <div style={{ width: "35%", borderRadius: "0px 10px 10px 00px", backgroundImage: "url('https://www.coachr.com.br/wp-content/uploads/2018/09/AI.jpeg')" }}>
            </div>
          </div>
        </Container>
      </div>
    </form>
  );
};