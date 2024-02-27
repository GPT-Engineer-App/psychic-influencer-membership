import React, { useState } from "react";
import { IconButton, Menu, MenuButton, MenuList, MenuItem, Link } from "@chakra-ui/react";
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
        <MenuItem onClick={() => alert("Navigate to...")}>Page 1</MenuItem>
        <MenuItem onClick={() => alert("Navigate to...")}>Page 2</MenuItem>
        <MenuItem as={Link} to="/">
          Home
        </MenuItem>
        <MenuItem as={Link} to="/about-kendall">
          About Kendall
        </MenuItem>
        <MenuItem as={Link} to="/contact-us">
          Contact Us
        </MenuItem>
        <MenuItem as={Link} to="/services">
          Services
        </MenuItem>
        <MenuItem as={Link} to="/login">
          Login
        </MenuItem>
        <MenuItem onClick={() => alert("Navigate to...")}>Page 3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavigationMenu;
