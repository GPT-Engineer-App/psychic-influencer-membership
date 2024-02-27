import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const NavigationMenu = () => {
  // Handler for opening navigation will be added here
  const handleToggle = () => {
    console.log("Toggle navigation");
  };

  return <IconButton variant="outline" aria-label="Open Menu" icon={<FaBars />} onClick={handleToggle} position="absolute" top={4} right={4} />;
};

export default NavigationMenu;
