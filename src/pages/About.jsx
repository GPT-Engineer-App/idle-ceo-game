import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Idle CEO Game</Heading>
      <Text fontSize="lg" mb={6}>Idle CEO Game is a web-based multiplayer game where you manage businesses, earn revenue, and compete with others.</Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Manage multiple businesses</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Earn revenue automatically</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Compete with other players</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;