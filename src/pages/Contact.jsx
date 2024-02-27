import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={{ base: 12, md: 24 }}>
      <Box>
        <Text fontSize="3xl" mb="4">
          Contact Us
        </Text>
        {/* Content for the Contact Us page goes here */}
      </Box>
    </Container>
  );
};

export default Contact;
