'use client'
import { Box, Flex, Text, Button, Icon, IconButton, VStack, HStack, Image } from "@chakra-ui/react";
import { SiLinkedin, SiInstagram, SiFacebook } from 'react-icons/si';
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <Box
            w="full"
            color="white"
            bg="linear-gradient(to top, #284A27 62%, #6E6554 38%)"
            minH={{ base: "auto", md: "540px" }} // Changed from fixed height to min-height
        >
            {/* Top section */}
            <Flex
                direction="column"
                align="center"
                justify="center"
                gap={2}
                p={{ base: 4, md: 6 }} // Added responsive padding
                textAlign="center"
            >
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="510" pt={{ base: 4, md: 6 }}>
                    Join the Greenhouse Games Community
                </Text>
                <Text fontSize="sm" maxW="600px" px={4}>
                    Discover engaging digital games to inspire learning and spark creativity. Perfect for educators, parents and developers!
                </Text>
                <Button
                    size="md"
                    bg="#284A27"
                    color="white"
                    _hover={{ bg: "#346133" }}
                    mt={2}
                >
                    Sign up
                </Button>
            </Flex>

            {/* Links section */}
            <Flex
                direction={{ base: "column", md: "row" }}
                align="flex-start"
                justify="space-between"
                p={{ base: 4, md: 8 }}
                mx="auto"
                mt={4}
                gap={{ base: 6, md: 8 }}
                flexWrap="wrap" // Allows columns to wrap on small screens
            >
                {/* Logo and description */}
                <VStack 
                    align={{ base: "center", md: "flex-start" }} 
                    spacing={2} 
                    mb={{ base: 2, md: 0 }} 
                    maxW="300px"
                    flex={{ base: "1 0 100%", md: "0 0 auto" }} // Full width on mobile
                >
                    <Image
                        src="/GHG_icons/GHG-icon.png"
                        alt="EduGames Logo"
                        h={{ base: "120px", md: "150px" }} // Responsive logo size
                        w="auto"
                    />
                    <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
                        Greenhouse Games is an online marketplace for digital educational games,
                        connecting educators with developers.
                    </Text>
                    <HStack mt={2} gap={4}>
                        <Icon
                            as={SiFacebook}
                            boxSize={8}
                        />
                        <Icon
                            as={SiInstagram}
                            boxSize={8}
                        />
                        <Icon
                            as={SiLinkedin}
                            boxSize={8}
                        />
                    </HStack>
                </VStack>

                {/* Link columns - now using a map for cleaner code */}
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
                        spacing={2}
                        flex={{ base: "1 0 45%", md: "0 0 auto" }} // 2 columns on mobile
                        textAlign={{ base: "center", md: "left" }}
                    >
                        <Text fontWeight="bold">{column.title}</Text>
                        {column.links.map((link, i) => (
                            <Text key={i} fontSize="sm" _hover={{ textDecoration: "underline" }} cursor="pointer">
                                {link}
                            </Text>
                        ))}
                    </VStack>
                ))}
            </Flex>

            {/* Copyright */}
            <Box p={4} bg="#284A27">
                <Text textAlign="center" fontSize="xs">© 2024 All Rights Reserved. Greenhouse Games</Text>
            </Box>
        </Box>
    );
};

export default Footer;