'use client'

import { Box, Text, VStack, Field, Input, Textarea, Button } from "@chakra-ui/react";

const ContactUs = () => {
    return (
        <Box bg="#F9FCEA">
            <VStack align="flex-start" gap={2} p={8} w="60%">
                <Text
                    color="black"
                    fontWeight="bold"
                    fontSize="lg"
                >
                    Contact Us
                </Text>
                <Text
                    color="grey"
                    fontWeight="semibold"
                    fontSize="sm"
                >
                    Got any questions? Let's Chat!
                </Text>
                <Field.Root required>
                    <Field.Label color="black" mt={4} fontWeight="semibold">
                        First Name <Field.RequiredIndicator />
                    </Field.Label>
                    <Input borderWidth="2px" color="black" size="sm"/>
                </Field.Root>
                <Field.Root required>
                    <Field.Label color="black" mt={4} fontWeight="semibold">
                        Last Name <Field.RequiredIndicator />
                    </Field.Label>
                    <Input borderWidth="2px" color="black" size="sm"/>
                </Field.Root>
                <Field.Root required>
                    <Field.Label color="black" mt={4} fontWeight="semibold">
                        Email Address <Field.RequiredIndicator />
                    </Field.Label>
                    <Input borderWidth="2px" color="black" size="sm"/>
                </Field.Root>
                <Field.Root required>
                    <Field.Label color="black" mt={4} fontWeight="semibold">
                        Subject Title <Field.RequiredIndicator />
                    </Field.Label>
                    <Input borderWidth="2px" color="black" size="sm"/>
                </Field.Root>
                <Field.Root required>
                    <Field.Label color="black" mt={4} fontWeight="semibold">
                        Message <Field.RequiredIndicator />
                    </Field.Label>
                    <Textarea borderWidth="2px" color="black" size="sm"/>
                </Field.Root>
                <Button mt={4} rounded="full" size="sm" colorPalette="teal" w="30%">Submit</Button>
            </VStack>
        </Box>

    );
};

export default ContactUs;