import { Box, Text, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading>Contact Us</Heading>
      <Text>If you have any questions or feedback, feel free to reach out to us!</Text>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea />
      </FormControl>
      <Button colorScheme="blue">Submit</Button>
    </VStack>
  </Box>
);

export default Contact;