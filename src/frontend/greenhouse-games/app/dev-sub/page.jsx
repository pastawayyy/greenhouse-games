'use client'

import { Vstack, List, Text, Box, VStack, Button } from "@chakra-ui/react"


//  spacing looks so weird pls help me
// also fix hyperlinks

const DevSub = () => {
    return (
        <Box 
            minH="100vh"
            py={{ base: 4, md: 8 }}
            px={{ base: 4, md: 6 }}
        >
            <VStack 
                align 
                gap="2"
                p={{ base: 4, md: 8 }} 
                w={{ base: "100%", sm: "90%", md: "80%", lg: "65%" }}
                maxW="4xl"
                mx="auto"
            >
                 <Box
                    w="full"
                >
                    <Text 
                        color= "black"
                        fontWeight= "semibold"
                        fontSize={{ base: "xl", md: "2xl" }}
                        mb={{ base: 1, md: 1 }}

                    >
                        Get Started
                    </Text>
                    <Text
                        color="gray"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="semibold"
                    >
                        Why list on Greenhouse Games?
                    </Text>
                    <List.Root 
                        ml={{ base: 2, md: 4 }}
                        color="gray"
                        fontSize={{ base: "xs", sm: "sm" }}
                        gap="2"
                        mt={{ base: 1, md: 1 }}
                    >
                        <List.Item>
                            Reach educators, parents, and students passionate about learning through play
                        </List.Item>
                        <List.Item>
                            Gain visbility in a unified, dedicated market place for educational games 
                        </List.Item>
                        <List.Item>
                            Access tools and analytics to optimise your game's success
                        </List.Item>
                    </List.Root>
                    <Text
                        color="gray"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="semibold"
                        mt={{ base: 2, md: 4 }}
                    >
                        Process of Listing Your Games on Greenhouse Games
                    </Text>
                    <List.Root as="ol"
                        ml={{ base: 2, md: 4 }}
                        color="gray"
                        fontSize={{ base: "xs", sm: "sm" }}
                        gap="2"
                        mt={{ base: 1, md: 1 }}
                    >
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                Submit & List Your Games for FREE
                                </Text>
                                 : Listing your games on Greenhouse Games in completely free! Simply ensure your submission meets our requirements, and we'll take care of hosting it on our platform for educators and parents to discover
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                    Follow Guidelines for Submission
                                </Text>
                                    : To maintain the quality of our marketplace
                            </Text> 
                        </List.Item>
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                    Follow Guidelines for Submission
                                </Text>
                                : To maintain the quality of our marketplace, all submitted games must adhere to our&nbsp; 
                                <Text as="span" textDecoration="underline" textDecorationColor="blue" color="blue">
                                    Submission Guidelines    
                                </Text>  
                                . This ensures educators trust the content listed on our platform
                            </Text> 
                        </List.Item>
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                    Greenhouse Games Host Your Games
                                </Text>
                                : Once approved, your game will be hosted on our platform, making it accessible to a wide audience of educators, parents and students 
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                    Earn Revenues Through Sales
                                </Text>
                                : When educators purchase your game, you'll receieve payment after we deduct&nbsp;
                                <Text as="span" textDecoration="underline" textDecorationColor="red" color="red">
                                    X%   
                                </Text>  
                                sales commission through our revenue-saving model. Payments will be credited to the account details you provide durign submission  
                            </Text>
                        </List.Item>
                    </List.Root>
                    <Text
                        color="gray"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="semibold"
                        mt={{ base: 2, md: 4 }}
                    >
                        How to Submit Your Game:
                    </Text>
                    <List.Root as="ol"
                        ml={{ base: 2, md: 4 }}
                        color="gray"
                        fontSize={{ base: "xs", sm: "sm" }}
                        gap="2"
                        mt={{ base: 1, md: 1 }}
                    >
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                Prepare your Game Materials
                                </Text>
                                : Ensure your game meets our requirements (see&nbsp; 
                                <Text as="span" textDecoration="underline" textDecorationColor="blue" color="blue">
                                    Submission Guidelines    
                                </Text>  
                                )
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                    Submit Your Game for Review
                                </Text>
                                    : Upload your game details, media and documentation
                            </Text> 
                        </List.Item>
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                    Approval Process
                                </Text>
                                : Our team will review your submission and provide feedback, approval or reach out directly to you if we require any more information
                            </Text> 
                        </List.Item>
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                    Submit Your Payment Information
                                </Text>
                                : Provide us with your payment details so we can credit your earnings promptly 
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text>
                                <Text as="span" fontWeight="semibold">
                                    Launch and Monitor Performance
                                </Text>
                                : Once approved, your game will be listed and we will provide your listings' monthly metrics  
                            </Text>
                        </List.Item>
                    </List.Root>
                    <Text
                        color="gray"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="semibold"
                        mt={{ base: 2, md: 4 }}
                    >
                        Ready to Get Started?
                    </Text>
                    <Button
                        size="md"
                        bg="#284A27"
                        color="white"
                        _hover={{ bg: "#346133" }}
                        mt={2}
                        >
                        Submit Now
                    </Button>
                </Box>
            </VStack>
        </Box>
    );

};

export default DevSub;