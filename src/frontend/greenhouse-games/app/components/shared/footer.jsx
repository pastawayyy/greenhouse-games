'use client'
import { Box, Flex, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <Box
      w="full"
      color="white"
      bg="#284A27"
      minH={{ base: "auto", md: "340px" }}
    >
      {/* Links section */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "flex-start" }}
        justify="space-between"
        p={{ base: 6, md: 8, lg: 12 }}
        mx="auto"
        maxW="1200px"
        gap={{ base: 8, md: 10 }}
      >
        {/* Logo and description */}
        <VStack 
          align={{ base: "center", lg: "flex-start" }} 
          spacing={4} 
          flex="1"
          minW={{ base: "100%", lg: "300px" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Image
            src="/GHG_icons/GHG-icon.png"
            alt="Greenhouse Games Logo"
            h={{ base: "100px", md: "130px", lg: "150px" }}
            w="auto"
          />
          <Text fontSize={{ base: "sm", md: "md" }} maxW="300px">
            Greenhouse Games is an online marketplace for digital educational games,
            connecting educators with developers.
          </Text>
          <HStack spacing={4} mt={2}>
            {[
              { icon: SiFacebook, label: "Facebook" },
              { icon: SiInstagram, label: "Instagram" },
              { icon: SiLinkedin, label: "LinkedIn" }
            ].map((social, index) => (
              <Box
                key={index}
                as="a"
                href="#"
                aria-label={social.label}
                _hover={{ transform: "scale(1.1)", color: "green.200" }}
                transition="all 0.2s"
              >
                <social.icon size={24} />
              </Box>
            ))}
          </HStack>
        </VStack>

        {/* Link columns */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          flex="2"
          wrap="wrap"
          gap={{ base: 6, md: 4 }}
          w={{ base: "100%", lg: "auto" }}
        >
          {[
            {
              title: "SHOP",
              links: ["Math Games", "Coding Games", "Language Games", "Memorisation Games", "Science Games", "Art Games", "SEL Games"]
            },
            {
              title: "SELL",
              links: ["Get Started", "Submission Guidelines", "Support for Developers", "Terms for Developers"]
            },
            {
              title: "ABOUT",
              links: ["Our Story", "How it Works", "Meet the Team"]
            },
            {
              title: "SUPPORT",
              links: ["Help & FAQ", "Terms & Conditions", "Privacy Policy", "Student Privacy", "Feedback", "Contact Us"]
            }
          ].map((column, index) => (
            <VStack 
              key={index}
              align={{ base: "center", md: "flex-start" }}
              spacing={3}
              minW={{ base: "100%", sm: "45%", md: "140px", lg: "160px" }}
              mb={{ base: index === 3 ? 0 : 4, md: 0 }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                {column.title}
              </Text>
              {column.links.map((link, i) => (
                <Text 
                  key={i} 
                  fontSize={{ base: "xs", md: "sm" }}
                  _hover={{ textDecoration: "underline", color: "green.100" }} 
                  cursor="pointer"
                  transition="color 0.2s"
                >
                  {link}
                </Text>
              ))}
            </VStack>
          ))}
        </Flex>
      </Flex>

      {/* Copyright */}
      <Box p={4} bg="#1f3b1e">
        <Text textAlign="center" fontSize={{ base: "xs", md: "sm" }}>
          © 2025 All Rights Reserved. Greenhouse Games
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;