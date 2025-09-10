'use client'

import { Box, VStack, Field, Input, Text, FieldRequiredIndicator, Checkbox, Button, HStack, Separator, List, Flex } from "@chakra-ui/react";
import { PasswordInput } from "../components/ui/password-input"

const Login = () => {
    return (
        <Box bg="#F9FCEA">
            <HStack gap="8">
                <VStack gap={2} align="flex-start" p={8} w="47%">
                    <Text
                        color="black"
                        fontWeight="bold"
                        fontSize="xl"
                    >
                        Welcome Back to Greenhouse Games
                    </Text>
                    <Text
                        color="grey"
                        fontWeight="bold"
                        fontSize="lg"
                    >
                        Log In
                    </Text>
                    <Field.Root required>
                        <Field.Label color="black" mt={2}>
                            Email <FieldRequiredIndicator />
                        </Field.Label>
                        <Input color="black" placeholder="Email address" />
                        <Field.Label color="black" mt={2}>
                            Password <FieldRequiredIndicator />
                        </Field.Label>
                        <PasswordInput color="black" placeholder="Password" />
                    </Field.Root>
                    {/* Need to make it a link */}
                    <Text color="grey" fontSize="xs">Forgot Password?</Text>
                    <Checkbox.Root
                        color="black"
                        mt="2"
                        value="remember me"
                    >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label>Remember me</Checkbox.Label>
                    </Checkbox.Root>
                    <Flex justify="center" width="100%">
                        <VStack width="100%" gap={4}>
                            <Button
                                colorPalette="teal"
                                mt="3"
                                width="60%"
                                rounded="xl"
                            >
                                Log in
                            </Button>
                            {/* need to add google auth but we dont hv the proper page yet but alr made the API key */}
                            <Text align="center" color="black"> - or -</Text>
                        </VStack>
                    </Flex>
                </VStack>
                <Separator orientation="vertical" height="60" size="md" />
                <VStack gap={2} align="flex-start" p={8} >
                    <Text
                        fontWeight="semibold"
                        color="grey"
                        fontSize="xl"
                    >
                        Not a member yet?
                    </Text>
                    <Text color="grey" fontSize="sm">Create a Greenhouse Games account to unlock additional benefits: </Text>
                    <List.Root color="grey" ml={4} fontSize="sm">
                        <List.Item >
                            Access and manage your purchased games directly from our platform.
                        </List.Item>
                        <List.Item>
                            Save your information for faster checkouts.
                        </List.Item>
                        <List.Item>
                        Enjoy exclusive access to{' '} <Text as="span" fontWeight="bold">FREE</Text> games available only for members.
                        </List.Item>
                    </List.Root>
                    <Flex justify="center" width="full">
                        <Button asChild
                            colorPalette="teal"
                            m="3"
                            rounded="xl"
                            width="60%"
                        >
                            <a href="./signup">Register</a>
                        </Button>
                    </Flex>
                    <Text color="grey" fontSize="sm">
                        Prefer not to sign up? You can still purchase games without an account!
                    </Text>
                </VStack>
            </HStack>
        </Box>

    );
};

export default Login;
