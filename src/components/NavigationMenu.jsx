import React, { useState } from "react";
import { IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
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
        <MenuItem onClick={() => alert("Navigate to...")}>Page 3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavigationMenu;
