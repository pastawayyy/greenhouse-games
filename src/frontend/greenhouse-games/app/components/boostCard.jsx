"use client";
import { Box, Flex, Text, Button, Center } from "@chakra-ui/react";

const BoostCard = () => {
  return (
    <Center>
      <Box
        borderRadius="lg"
        w={{ base: "90%", sm: "80%", md: "640px" }}
        p={6}
        mt={8}
        overflow="hidden"
        position="relative"
        minH="300px"
        bgSize="cover"
        bgImage="url('/boostCard_bg.png')"
      >
        {/* Optional overlay for better text contrast */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0,0,0,0.2)"
          zIndex="1"
        />
        
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={6}
          position="relative"
          zIndex="2"
        >
          {/* Left Side - Text */}
          <Box flex="1">
            <Text fontSize="xs" fontWeight="bold" letterSpacing="wide" mb={2}>
              BOOST ENGAGEMENT
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4} lineHeight="short">
              FIND NEW WAYS <br />
              TO IMPROVE <br />
              LEARNING OUTCOMES
            </Text>
            <Button
              color="white"
              bg="#4C5B78"
              borderRadius="md"
              px={6}
              _hover={{ bg: "#3B4A66" }}
              size={{ base: "md", md: "lg" }}
            >
              Explore Latest
            </Button>
          </Box>

          {/* Right Side - Placeholder (optional if image is in background) */}
          <Box
            flexShrink={0}
            borderRadius="xl"
            minW={{ base: "120px", md: "200px" }}
            minH={{ base: "120px", md: "200px" }}
            display={{ base: "none", sm: "flex" }}
            alignItems="center"
            justifyContent="center"
            bg="rgba(255, 255, 255, 0.2)"
            backdropFilter="blur(10px)"
          >
            <Text color="white" fontWeight="bold" fontSize="sm">
              CONTENT
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default BoostCard;