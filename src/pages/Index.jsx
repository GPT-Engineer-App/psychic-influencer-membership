import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Box, Container, Heading, Text, VStack, StackDivider, Button, Image, useColorModeValue, SimpleGrid, useBreakpointValue, Popover, PopoverTrigger, PopoverContent, Flex } from "@chakra-ui/react";
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
      name: "Double A Elite",
      price: "44.44",
      priceAnnual: "500",
      features: ["Limited spots available (100)", "All benefits from Tiers A, B, and C", "Every 4 months 1 personalized tarot readings (50 minutes Video)"],
      icon: <FaStar />,
    },
    {
      name: "Premium",
      price: "33.33",
      priceAnnual: "270",
      features: ["Limited spots available (200)", "Every 4 Months personalized tarot readings (30 minutes audio)", "All benefits from Tiers B and C", "Monthly Spells Book digital access", "Monthly Video spell guide tutorials", "Monthly 1 Guest webinars", "Weekly Bonus content", "Private Chat server", "Monthly Video Manifestation practice", "Monthly live sessions", "Monthly AMA sessions"],
      icon: <FaCrown />,
    },
    {
      name: "Standard",
      price: "22.22",
      priceAnnual: "200",
      features: ["Choice of 3x a year tarot readings", "All benefits from Tier C", "Monthly Ritual/Spell digital guides", "Monthly Horoscope/astrology access", "Birthday shoutouts/Birthday ritual suggestions", "Monthly screensavers"],
      icon: <FaGem />,
    },
    {
      name: "Basic",
      price: "7.99",
      priceAnnual: "75",
      features: ["Newsletter", "Daily affirmations/weekly collective reading", "Exclusive discounts", "Monthly badge/sticker", "Monthly polls", "Private chat server", "Early access to new offerings"],
      icon: <FaCheck />,
    },
  ];

  const membershipCols = useBreakpointValue({ base: 1, md: 3 });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container maxW="container.xl" py={{ base: 12, md: 24 }}>
      <Flex justifyContent="flex-end" pt={4}>
        {!isLoggedIn && (
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="purple">Login</Button>
            </PopoverTrigger>
            <PopoverContent p={4}>
              <LoginForm />
            </PopoverContent>
          </Popover>
        )}
      </Flex>
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
