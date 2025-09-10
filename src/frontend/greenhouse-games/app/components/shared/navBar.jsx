'use client'

import React, { useState, useEffect } from 'react';
import {
  Image,
  Box,
  Flex,
  Input,
  Button,
  IconButton,
  Menu,
  Drawer,
  Portal,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { 
  LuSearch, 
  LuShoppingCart, 
  LuChevronDown, 
  LuMenu, 
  LuX, 
  LuUser,
  LuCalculator,
  LuCode,
  LuLanguages,
  LuBrain,
  LuFlaskConical,
  LuPalette,
  LuHeart
} from "react-icons/lu";
import { motion, AnimatePresence } from 'motion/react';

// Category data with icons
const categories = [
  { name: 'Math Games', icon: LuCalculator },
  { name: 'Coding Games', icon: LuCode },
  { name: 'Language Games', icon: LuLanguages },
  { name: 'Memorization Games', icon: LuBrain },
  { name: 'Science Games', icon: LuFlaskConical },
  { name: 'Art Games', icon: LuPalette },
  { name: 'SEL Games', icon: LuHeart }
];

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={false}
        animate={{ 
          height: isScrolled ? (isMobile ? 60 : 70) : (isMobile ? 110 : 140),
          borderRadius: isScrolled ? (isMobile ? 15 : 20) : 0,
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          backgroundColor: isScrolled ? 'rgba(216, 223, 205, 0.9)' : '#D8DFCD',
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
          border: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{
          position: 'fixed',
          top: isScrolled ? (isMobile ? 5 : 10) : 0,
          left: isScrolled ? (isMobile ? 5 : 10) : 0,
          right: isScrolled ? (isMobile ? 5 : 10) : 0,
          zIndex: 1000,
          width: isScrolled ? (isMobile ? 'calc(100% - 10px)' : 'calc(100% - 20px)') : '100%',
          overflow: 'hidden',
        }}
      >
        <Box as="nav" w="full" bg="transparent" h="full">
          <Flex direction="column" h="full">
            {/* Main Row: Logo, Search, Actions */}
            <Flex 
              justify="space-between" 
              align="center" 
              px={{ base: 3, md: 6 }} 
              py={{ base: 2, md: 3 }}
              flex="1"
              maxW="container.xl" 
              mx="auto"
              w="full"
            >
              {/* Left: Mobile Menu + Logo */}
              <Flex align="center" gap={2}>
                {/* Mobile Menu Button */}
                {isMobile && (
                  <IconButton
                    aria-label="Open menu"
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsDrawerOpen(true)}
                    color="#1b4a26"
                    _hover={{ bg: "green.100" }}
                  >
                    <LuMenu />
                  </IconButton>
                )}
                
                {/* Logo */}
                <motion.div
                  animate={{ 
                    scale: isScrolled ? (isMobile ? 0.7 : 0.8) : 1 
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <Image 
                    src="/GHG_icons/GHG-icon.png" 
                    alt="EduGames Logo" 
                    h={{ 
                      base: isScrolled ? "2rem" : "3rem", 
                      md: isScrolled ? "2.5rem" : "4rem" 
                    }} 
                    w="auto" 
                  />
                </motion.div>
              </Flex>

              {/* Center: Search Bar */}
              <AnimatePresence>
                {(!isScrolled || !isMobile) && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      flex: isMobile ? 1 : 2, 
                      paddingLeft: isMobile ? 8 : 16, 
                      paddingRight: isMobile ? 8 : 16,
                      position: 'relative'
                    }}
                  >
                    <Input 
                      placeholder="Search games..." 
                      borderRadius="full"
                      borderColor="gray.700"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{ borderColor: "green.500", boxShadow: "none" }}
                      pl={4}
                      pr={10}
                      size={{ base: "sm", md: "md" }}
                      bg="white"
                      color="black"
                    />
                    <IconButton
                      aria-label="Search games"
                      position="absolute"
                      right={isMobile ? 10 : 18}
                      top="50%"
                      transform="translateY(-50%) translateX(-30%)"
                      color="white"
                      borderRadius="full"
                      size="xs"
                      fontSize="14px"
                      _hover={{ bg: "#adb7b3ff" }}
                    >
                      <LuSearch color="#1b4a26"/>
                    </IconButton>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Right: Actions */}
              <Flex align="center" gap={2} justify="flex-end">
                {/* Mobile Search Button (when minimized) */}
                <AnimatePresence>
                  {isScrolled && isMobile && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconButton
                        aria-label="Search games"
                        variant="ghost"
                        size="sm"
                        color="#1b4a26"
                        _hover={{ bg: "green.100" }}
                      >
                        <LuSearch />
                      </IconButton>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Desktop Login/Signup Buttons */}
                <AnimatePresence>
                  {!isMobile && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Flex gap={2}>
                        <Button 
                          variant="ghost" 
                          size={isScrolled ? "xs" : "sm"}
                          color="#1b4a26" 
                          _hover={{ bg: "green.100" }}
                        >
                          Log In
                        </Button>
                        <Button 
                          variant="ghost" 
                          size={isScrolled ? "xs" : "sm"}
                          color="#1b4a26" 
                          _hover={{ bg: "green.100" }}
                        >
                          Sign Up
                        </Button>
                      </Flex>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Cart Icon */}
                <IconButton
                  aria-label="Shopping Cart"
                  variant="ghost"
                  size="sm"
                  fontSize="16px"
                  isRound
                  color="#1b4a26"
                  _hover={{ bg: "green.100" }}
                >
                  <LuShoppingCart />
                </IconButton>
              </Flex>
            </Flex>

            {/* Bottom Row: Navigation Links (Desktop Only, Not Scrolled) */}
            <AnimatePresence>
              {!isScrolled && !isMobile && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderTop: '1px solid #e2e8f0' }}
                >
                  <Flex 
                    justify="center" 
                    align="center" 
                    gap={6}
                    py={2}
                    px={6}
                    maxW="container.xl" 
                    mx="auto"
                  >
                    {/* Categories Dropdown */}
                    <Menu.Root placement="bottom-start">
                      <Menu.Trigger asChild>
                        <Button 
                          variant="ghost"
                          size="sm"
                          color="#1b4a26"
                          _hover={{ bg: 'green.100' }}
                          _active={{ bg: 'green.200' }}
                          rightIcon={<LuChevronDown />}
                        >
                          Explore Categories
                        </Button>
                      </Menu.Trigger>
                      <Portal>
                        <Menu.Positioner>
                          <Menu.Content 
                            zIndex={1001} 
                            mt={1}
                            minW="200px"
                            boxShadow="0 10px 30px rgba(0, 0, 0, 0.15)"
                            borderRadius="lg"
                            border="1px solid"
                            borderColor="gray.200"
                            py={1}
                          >
                            {categories.map((category) => {
                              const IconComponent = category.icon;
                              return (
                                <Menu.Item key={category.name}>
                                  <motion.div
                                    whileHover={{ 
                                      scale: 1.02,
                                      transition: { duration: 0.2 }
                                    }}
                                    style={{ position: 'relative', padding: '6px 12px' }}
                                  >
                                    {/* Blurry glow effect on hover */}
                                    <motion.div
                                      initial={{ opacity: 0 }}
                                      whileHover={{ 
                                        opacity: 1,
                                        transition: { duration: 0.3 }
                                      }}
                                      style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(123, 220, 181, 0.15)',
                                        borderRadius: '6px',
                                        filter: 'blur(8px)',
                                        zIndex: -1,
                                      }}
                                    />
                                    <Flex align="center" gap={2}>
                                      <IconComponent size={16} />
                                      <span style={{ fontSize: '14px' }}>{category.name}</span>
                                    </Flex>
                                  </motion.div>
                                </Menu.Item>
                              );
                            })}
                          </Menu.Content>
                        </Menu.Positioner>
                      </Portal>
                    </Menu.Root>

                    {/* Navigation Links */}
                    <Button variant="ghost" size="sm" color="#1b4a26" _hover={{ bg: "green.100" }}>
                      List Your Game
                    </Button>
                    <Button variant="ghost" size="sm" color="#1b4a26" _hover={{ bg: "green.100" }}>
                      Learn More
                    </Button>
                    <Button variant="ghost" size="sm" color="#1b4a26" _hover={{ bg: "green.100" }}>
                      Help Center
                    </Button>
                  </Flex>
                </motion.div>
              )}
            </AnimatePresence>
          </Flex>
        </Box>
      </motion.div>

      {/* Spacer */}
      <Box h={{ 
        base: isScrolled ? '70px' : '110px', 
        md: isScrolled ? '80px' : '140px' 
      }} />

      {/* Mobile Drawer Menu */}
      <Drawer.Root open={isDrawerOpen} onOpenChange={(e) => setIsDrawerOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Menu</Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <IconButton
                    aria-label="Close menu"
                    variant="ghost"
                    size="sm"
                    position="absolute"
                    right={2}
                    top={2}
                  >
                    <LuX />
                  </IconButton>
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body>
                <VStack 
                  spacing={4}
                  align="stretch"
                  mt={4}>
                  {/* User Actions */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    justifyContent="flex-start"
                    color="#1b4a26"
                  >
                    Log In
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    justifyContent="flex-start"
                    color="#1b4a26"
                  >
                    Sign Up
                  </Button>

                  {/* Categories */}
                  <Menu.Root placement="bottom-start">
                    <Menu.Trigger asChild>
                      <Button 
                        variant="ghost"
                        size="sm"
                        justifyContent="space-between"
                        rightIcon={<LuChevronDown />}
                        color="#1b4a26"
                      >
                        Explore Categories
                      </Button>
                    </Menu.Trigger>
                    <Portal>
                      <Menu.Positioner>
                        <Menu.Content zIndex={1001} py={1}>
                          {categories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                              <Menu.Item key={category.name}>
                                <motion.div
                                  whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                  }}
                                  style={{ position: 'relative', padding: '6px 12px' }}
                                >
                                  {/* Blurry glow effect on hover */}
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ 
                                      opacity: 1,
                                      transition: { duration: 0.3 }
                                    }}
                                    style={{
                                      position: 'absolute',
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                      background: 'rgba(123, 220, 181, 0.15)',
                                      borderRadius: '6px',
                                      filter: 'blur(8px)',
                                      zIndex: -1,
                                    }}
                                  />
                                  <Flex align="center" gap={2}>
                                    <IconComponent size={16} />
                                    <span style={{ fontSize: '14px' }}>{category.name}</span>
                                  </Flex>
                                </motion.div>
                              </Menu.Item>
                            );
                          })}
                        </Menu.Content>
                      </Menu.Positioner>
                    </Portal>
                  </Menu.Root>

                  {/* Navigation Links */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    justifyContent="flex-start"
                    color="#1b4a26"
                  >
                    List Your Game
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    justifyContent="flex-start"
                    color="#1b4a26"
                  >
                    Learn More
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    justifyContent="flex-start"
                    color="#1b4a26"
                  >
                    Help Center
                  </Button>
                </VStack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}

export default Navbar;