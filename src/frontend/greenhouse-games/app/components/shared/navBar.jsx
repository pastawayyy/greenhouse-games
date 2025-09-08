'use client'

import React from 'react';
import {
  Image,
  Box,
  Flex,
  Input,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { FiSearch, FiShoppingCart, FiChevronDown } from "react-icons/fi";

function Navbar() {
  const categories = [
    'Math Games', 
    'Coding Games', 
    'Language Games', 
    'Memorization Games', 
    'Science Games', 
    'Art Games', 
    'SEL Games'
  ];

  return (
    <Box as="nav" w="full" borderBottom="1px" borderColor="gray.200" bg="#D8DFCD">
      {/* Top Section */}
      <Flex justify="space-evenly" align="center" px={6} maxW="container.xl" mx="auto">
        {/* Logo */}
        <Box flex="1">
          <Image src="/GHG_icons/GHG-icon.png" alt="EduGames Logo" h="6vw" w="auto" />
        </Box>

        {/* Logo and Categories Dropdown */}
        <Flex flex="1" align="center" gap={4}>
          {/* Categories Dropdown */}
          <Menu>
            <MenuButton 
              as={Button} 
              leftIcon={<FiChevronDown />}
              variant="ghost"
              size="sm"
              color="black"
              _hover={{ bg: 'gray.200' }}
              _active={{ bg: 'gray.300' }}
            >
              Categories
            </MenuButton>
            <MenuList>
              {categories.map((category) => (
                <MenuItem key={category}>{category}</MenuItem>
              ))}
            </MenuList>
          </Menu>
          
          {/* Logo */}
          <Image src="/GHG_icons/GHG-icon.png" alt="EduGames Logo" h="6vw" w="auto" />
        </Flex>

        {/* Search */}
        <Box flex="2" px={4} position="relative">
          <Input 
            placeholder="Search games..." 
            borderRadius="full"
            borderColor="gray.700"
            _hover={{ borderColor: "gray.400" }}
            _focus={{ borderColor: "green.500", boxShadow: "none" }}
            pl={4}
            pr={10}
          />

          <IconButton
            aria-label="Search games"
            position="absolute"
            right={6}
            top="50%"
            transform="translateY(-50%)"
            bg="#224750"
            color="white"
            borderRadius="full"
            size="xs"
            fontSize="16px"
            _hover={{ bg: "#2d5a65" }}
            icon={<FiSearch />}
          />
        </Box>

        {/* Auth + Cart */}
        <Flex flex="1" justify="flex-end" align="center" gap={2}>
          <Button variant="ghost" size="sm" color="#1b4a26" _hover={{ bg: "gray.200" }}>
            Log In
          </Button>
          <Button variant="ghost" size="sm" color="#1b4a26" _hover={{ bg: "gray.200" }}>
            Sign Up
          </Button>
          <IconButton
            aria-label="Shopping Cart"
            variant="ghost"
            size="md"
            fontSize="16px"
            isRound
            color="#1b4a26"
            _hover={{ bg: "green.200" }}
            icon={<FiShoppingCart />}
          />
        </Flex>
      </Flex>

      {/* Bottom Section (simple links) */}
      <Box w="full" py={1} px={6} bg="#D8DFCD">
        <HStack spacing={4} justify="center">
          <Button variant="ghost" size="sm" px={4} _hover={{ bg: "gray.200" }} color="black">
            List Your Game
          </Button>
          <Button variant="ghost" size="sm" px={4} _hover={{ bg: "gray.200" }} color="black">
            Learn More
          </Button>
          <Button variant="ghost" size="sm" px={4} _hover={{ bg: "gray.200" }} color="black">
            Help Center
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default Navbar;