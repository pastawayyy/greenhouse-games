'use client'
import { Box, Flex, Text, Button, Icon, IconButton, VStack, HStack, Image } from "@chakra-ui/react";

const JoinUs = () => {
    return (
        <Box
            w="full"
            color="white"
            bg="#6E6554"
            minH={{ base: "auto", md: "205px" }}
        >
            {/* Top brown section */}
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
        </Box>
    );
};

export default JoinUs;
