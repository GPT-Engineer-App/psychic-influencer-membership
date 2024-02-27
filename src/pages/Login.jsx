import React from "react";
import { Container } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Container maxW="container.sm" py={{ base: 12, md: 24 }}>
      <LoginForm />
    </Container>
  );
};

export default Login;
