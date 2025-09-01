'use client'

import {
    Box,
    Text,
    VStack,
    Tooltip,
    Field,
    Input,
    Button,
    List,
    Link,
    Checkbox
} from "@chakra-ui/react";
import { CiCircleQuestion } from "react-icons/ci";
import { PasswordInput } from "../components/ui/password-input"

const SignUp = () => {
    return (
        <Box bg="#F9FCEA">
            <VStack align gap="2" p={8} w="65%">
                <Text color="black" fontWeight="semibold" fontSize="xl">
                    Sign Up
                </Text>
                {/* <Tooltip 
                    showArrow
                    content="">
                    <Button>
                        <CiCircleQuestion />
                    </Button>
                    
                </Tooltip> */}
                <Box color="gray" fontSize="sm">
                    <Text>Create a Greenhouse Games account to unlock additional benefits: </Text>
                    <List.Root ml={4}>
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
                    <Text>
                        Prefer not to sign up? You can still purchase games without an account!
                    </Text>
                    <Text mt={4}>If you're a developer looking to list your games, please visit <Link variant="underline" colorPalette="blue" href="#">Developer Registration</Link></Text>
                    <VStack align="center" mt={8}>
                        {/* need to add google auth but we dont hv the proper page yet but alr made the API key */}
                        <Text> - or -</Text>
                    </VStack>
                </Box>
                <Box color="black" fontSize="sm">
                    <Field.Root required>
                        <Field.Label fontWeight="semibold" mt={2}>
                            First Name <Field.RequiredIndicator />
                        </Field.Label>
                        <Input borderWidth="2px" size="sm" />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label fontWeight="semibold" mt={4}>
                            Last Name <Field.RequiredIndicator />
                        </Field.Label>
                        <Input borderWidth="2px" size="sm" />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label fontWeight="semibold" mt={4}>
                            Email Address <Field.RequiredIndicator />
                        </Field.Label>
                        <Input borderWidth="2px" size="sm" />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label fontWeight="semibold" mt={4}>
                            Password <Field.RequiredIndicator />
                        </Field.Label>
                        <PasswordInput borderWidth="2px" size="sm" />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label fontWeight="semibold" mt={4}>
                            Confirm Password <Field.RequiredIndicator />
                        </Field.Label>
                        <PasswordInput borderWidth="2px" size="sm" />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label fontWeight="semibold" mt={4}>
                            Date of Birth (DD/MM/YYYY) <Field.RequiredIndicator />
                        </Field.Label>
                        <Input borderWidth="2px" size="sm" />
                    </Field.Root>
                    <Field.Root required></Field.Root>

                    {/* ADD THE DROPDOWNS FOR REMINAING TWO INPUTS */}

                </Box>
                <Checkbox.Root mt={4}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label fontWeight="normal" fontSize="sm" color="gray.700" >
                        I'd like to receive updates, exclusive offers and news from Greenhouse Games via email
                    </Checkbox.Label>
                </Checkbox.Root>
                <Checkbox.Root>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label fontWeight="normal" fontSize="sm" color="gray.700" >
                        By signing up, I agree to the <Link colorPalette="blue" href="#"> Terms and Conditions </Link> and <Link colorPalette="blue" href="#">Privacy Policy</Link>
                    </Checkbox.Label>
                </Checkbox.Root>
                <Button mt={4} rounded="full" size="sm" colorPalette="teal" w="30%">Sign Up</Button>
            </VStack>
        </Box>

    );
};

export default SignUp;