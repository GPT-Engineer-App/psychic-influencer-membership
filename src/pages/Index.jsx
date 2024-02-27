import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Box, Container, Heading, Text, VStack, StackDivider, Button, Image, useColorModeValue, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { FaCheck, FaCrown, FaStar, FaGem } from "react-icons/fa";

const Index = () => {
  const Feature = ({ title, children, icon }) => {
    return (
      <VStack spacing={3} align="stretch">
        <Box display="flex" alignItems="center">
          {icon}
          <Heading size="md" fontWeight="extrabold" marginLeft={2}>
            {title}
          </Heading>
        </Box>
        <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
          {children}
        </Text>
      </VStack>
    );
  };

  const tiers = [
    {
      name: "Bronze Aura",
      price: "9.99",
      features: ["1 Free Question per Month", "Access to Basic Insights", "Member-Only Newsletter"],
      icon: <FaStar />,
    },
    {
      name: "Silver Spirit",
      price: "29.99",
      features: ["3 Free Questions per Month", "Access to In-Depth Insights", "Bi-Weekly Personal Readings", "10% Off All Services"],
      icon: <FaCrown />,
    },
    {
      name: "Gold Soul",
      price: "49.99",
      features: ["Unlimited Questions", "All Access to Exclusive Insights", "Weekly Personal Readings", "20% Off All Services", "Priority Booking"],
      icon: <FaGem />,
    },
  ];

  const membershipCols = useBreakpointValue({ base: 1, md: 3 });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container maxW="container.xl" py={{ base: 12, md: 24 }}>
      {!isLoggedIn && (
        <Box mb={10}>
          <LoginForm />
        </Box>
      )}
      <VStack spacing={{ base: 8, md: 10 }} textAlign="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1505358131519-deb04e8e7ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxLZW5kYWxsJTIwSGF1Z2h0JTIwcHN5Y2hpY3xlbnwwfHx8fDE3MDkwNzMyODF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kendall Haught" mb={4} />
        <Heading size="2xl">Join the Psychic Circle with Kendall Haught</Heading>
        <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.400")}>
          Discover your path and unlock the secrets of the universe. Choose your tier and harness the power of exclusive psychic insights.
        </Text>
      </VStack>

      <SimpleGrid columns={membershipCols} spacing={10} mt={16}>
        {tiers.map((tier) => (
          <Box p={10} shadow="xl" borderWidth="1px" borderRadius="lg" divider={<StackDivider />} bg={useColorModeValue("white", "gray.700")}>
            <VStack spacing={5} align="stretch">
              <Feature title={tier.name} icon={tier.icon}>
                <Text fontSize="5xl" fontWeight="bold">
                  ${tier.price}
                  <Text as="span" fontSize="2xl" color={useColorModeValue("gray.600", "gray.400")}>
                    /mo
                  </Text>
                </Text>
              </Feature>
              {tier.features.map((feature) => (
                <Feature title={feature} icon={<FaCheck color="green.500" />} />
              ))}
              <Button mt={5} size="lg" colorScheme="purple" variant="solid">
                Get Started
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
