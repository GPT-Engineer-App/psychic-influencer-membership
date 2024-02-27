import React from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <VStack spacing={4}>
      <Input placeholder="Username" />
      <Input placeholder="Password" type="password" />
      <Button colorScheme="purple" width="full">
        Login
      </Button>
    </VStack>
  );
};

export default LoginForm;
