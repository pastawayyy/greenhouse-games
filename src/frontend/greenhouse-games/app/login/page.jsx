'use client'

import { Box, VStack, Field, Input, Text, FieldRequiredIndicator, Checkbox, Button, HStack, Separator, List, Flex, Stack } from "@chakra-ui/react";
import { PasswordInput } from "../components/ui/password-input"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <Box 
            minH="100vh" 
            py={{ base: 4, md: 8 }}
            px={{ base: 4, md: 6 }}
        >
            <Stack 
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 6, md: 8 }}
                maxW="6xl"
                mx="auto"
                align="stretch"
            >
                {/* Login Form Section */}
                <VStack 
                    gap={4} 
                    align="flex-start" 
                    p={{ base: 4, md: 8 }} 
                    w={{ base: "100%", lg: "50%" }}
                >
                    <VStack align="flex-start" gap={2} w="full">
                        <Text
                            color="black"
                            fontWeight="bold"
                            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                            lineHeight="short"
                        >
                            Welcome Back to Greenhouse Games
                        </Text>
                        <Text
                            color="#6e6e6eff"
                            fontWeight="bold"
                            fontSize={{ base: "md", md: "lg" }}
                        >
                            Log In
                        </Text>
                    </VStack>

                    <Field.Root required w="full">
                        <VStack align="flex-start" gap={3} w="full">
                            <Box w="full">
                                <Field.Label color="black" mb={1}>
                                    Email <FieldRequiredIndicator />
                                </Field.Label>
                                <Input 
                                    color="black" 
                                    placeholder="Email address" 
                                    size={{ base: "md", md: "lg" }}
                                    borderRadius="md"
                                />
                            </Box>
                            
                            <Box w="full">
                                <Field.Label color="black" mb={1}>
                                    Password <FieldRequiredIndicator />
                                </Field.Label>
                                <PasswordInput 
                                    color="black" 
                                    placeholder="Password"
                                    size={{ base: "md", md: "lg" }}
                                    borderRadius="md"
                                />
                            </Box>
                        </VStack>
                    </Field.Root>

                    {/* Forgot Password & Remember Me */}
                    <VStack align="flex-start" gap={3} w="full">
                        <Text 
                            color="teal.600" 
                            fontSize="sm"
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                        >
                            Forgot Password?
                        </Text>
                        
                        <Checkbox.Root color="black" value="remember me">
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label fontSize={{ base: "sm", md: "md" }}>
                                Remember me
                            </Checkbox.Label>
                        </Checkbox.Root>
                    </VStack>

                    {/* Login Buttons */}
                    <VStack width="100%" gap={4} mt={4}>
                        <Button
                            colorPalette="teal"
                            width={{ base: "100%", sm: "80%", md: "70%" }}
                            size={{ base: "md", md: "lg" }}
                            borderRadius="xl"
                        >
                            Log in
                        </Button>
                        
                        <Text 
                            textAlign="center" 
                            color="gray.500" 
                            fontSize={{ base: "sm", md: "md" }}
                        >
                            - or -
                        </Text>
                        
                        <Button
                            variant="solid"
                            colorPalette="teal"
                            width={{ base: "100%", sm: "80%", md: "70%" }}
                            size={{ base: "md", md: "lg" }}
                            borderRadius="xl"
                            gap={2}
                        >
                            <FcGoogle />
                            Sign in with Google
                        </Button>
                    </VStack>
                </VStack>

                {/* Separator - Hidden on mobile */}
                <Separator 
                    orientation={{ base: "horizontal", lg: "vertical" }} 
                    size="md"
                    display={{ base: "none", lg: "block" }}
                />

                {/* Sign Up Section */}
                <VStack 
                    gap={4} 
                    align="flex-start" 
                    p={{ base: 4, md: 8 }}
                    w={{ base: "100%", lg: "50%" }}
                >
                    <VStack align="flex-start" gap={2} w="full">
                        <Text
                            fontWeight="semibold"
                            color="black"
                            fontSize={{ base: "lg", md: "xl" }}
                        >
                            Not a member yet?
                        </Text>
                        <Text 
                            color="black" 
                            fontSize={{ base: "sm", md: "md" }}
                            lineHeight="base"
                        >
                            Create a Greenhouse Games account to unlock additional benefits:
                        </Text>
                    </VStack>

                    <List.Root 
                        color="black" 
                        fontSize={{ base: "sm", md: "md" }}
                        spacing={2}
                        w="full"
                    >
                        <List.Item>
                            Access and manage your purchased games directly from our platform.
                        </List.Item>
                        <List.Item>
                            Save your information for faster checkouts.
                        </List.Item>
                        <List.Item>
                            Enjoy exclusive access to{' '}
                            <Text as="span" fontWeight="bold" color="teal.600">
                                FREE
                            </Text>{' '}
                            games available only for members.
                        </List.Item>
                    </List.Root>

                    <VStack w="full" gap={4} mt={4}>
                        <Button 
                            asChild
                            colorPalette="teal"
                            variant="solid"
                            borderRadius="xl"
                            width={{ base: "100%", sm: "80%", md: "70%" }}
                            size={{ base: "md", md: "lg" }}
                        >
                            <a href="./signup">Register</a>
                        </Button>
                        
                        <Text 
                            color="grey" 
                            fontSize={{ base: "xs", md: "sm" }}
                            textAlign="center"
                            lineHeight="base"
                        >
                            Prefer not to sign up? You can still purchase games without an account!
                        </Text>
                    </VStack>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Login;