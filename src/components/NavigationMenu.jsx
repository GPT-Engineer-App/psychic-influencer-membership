import React, { useState } from "react";
import { IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu isOpen={isOpen}>
      <MenuButton as={IconButton} variant="outline" aria-label="Open Menu" icon={<FaBars />} onClick={handleToggle} position="absolute" top={4} right={4} />
      <MenuList>
        {/* Removed placeholder menu items */}
        <MenuItem as={Link} to="/" _hover={{ textDecoration: "none" }}>
          Home
        </MenuItem>
        <MenuItem as={Link} to="/about-kendall" _hover={{ textDecoration: "none" }}>
          About Kendall
        </MenuItem>
        <MenuItem as={Link} to="/contact-us" _hover={{ textDecoration: "none" }}>
          Contact Us
        </MenuItem>
        <MenuItem as={Link} to="/services" _hover={{ textDecoration: "none" }}>
          Services
        </MenuItem>
        <MenuItem as={Link} to="/login" _hover={{ textDecoration: "none" }}>
          Login
        </MenuItem>
        {/* Removed placeholder menu item */}
      </MenuList>
    </Menu>
  );
};

export default NavigationMenu;
