'use client'
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";


const Footer = () => {
    return (
        <Box
            bg="#6E6554"
            w="full"
            borderRadius="lg"
            h="190px"
            color="white"
        >

            <Flex
                direction="column"
                align="center"
                justify="center"
                gap={1}

            >
                <Box flex="1">
                    <Text fontSize="4xl" fontWeight="510" lineHeight="short" pt={6}>
                        Join the Greenhouse Games Community
                    </Text>
                </Box>
                <Text fontSize="sm">
                    Discover engaging digital games to inspire learning and spark creativity. Perfect for educators, parents and developers!
                </Text>
            </Flex>
            <Flex
                direction="column"
                align="center"
                justify="center"
                p={6}
            >

                <Button
                    size="md"
                    bg="#284A27"
                    color="white"
                    _hover={{ bg: "#346133" }}
                >
                    Sign up
                </Button>
            </Flex>
        </Box>
    );
};

export default Footer;