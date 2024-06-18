import { Box, Flex, VStack, HStack, Button, Text, Heading } from "@chakra-ui/react";

const GameWindow = () => {
  return (
    <Box p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Idle CEO Game</Heading>
        <Text fontSize="lg" mb={6}>Manage your businesses, earn revenue, and become the ultimate CEO!</Text>
      </Flex>
      <HStack spacing={8} align="start" justify="center">
        {/* User Profile Section */}
        <VStack bg="gray.100" p={4} borderRadius="md" boxShadow="md" w="30%">
          <Heading size="md">User Profile</Heading>
          <Text>Name: John Doe</Text>
          <Text>Level: 5</Text>
          <Text>Revenue: $5000</Text>
          <Button colorScheme="teal">Edit Profile</Button>
        </VStack>
        {/* Business Management Section */}
        <VStack bg="gray.100" p={4} borderRadius="md" boxShadow="md" w="30%">
          <Heading size="md">Business Management</Heading>
          <Text>Business 1: $2000/day</Text>
          <Text>Business 2: $3000/day</Text>
          <Button colorScheme="teal">Manage Businesses</Button>
        </VStack>
        {/* Shop Section */}
        <VStack bg="gray.100" p={4} borderRadius="md" boxShadow="md" w="30%">
          <Heading size="md">Shop</Heading>
          <Text>Item 1: $100</Text>
          <Text>Item 2: $200</Text>
          <Button colorScheme="teal">Visit Shop</Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default GameWindow;