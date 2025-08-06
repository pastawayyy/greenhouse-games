'use client'

import { Box, Flex, VStack, Field, Input, Text, FieldRequiredIndicator, Checkbox, Button } from "@chakra-ui/react";
import { PasswordInput } from "../components/ui/password-input"

const Login = () => {
    return (
        <Box bg="#F9FCEA">
            <VStack gap={2} align="flex-start" p={8} w="45%">
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
                    fontSize="large"
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
                <Checkbox.Root color="black" mt="2" value="remember me">
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Remember me</Checkbox.Label>
                </Checkbox.Root>

                <Button variant="surface" mt="3">
                    Submit
                </Button>
            </VStack>
        </Box>

    );
};

export default Login;
