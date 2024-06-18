import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center">
        <Heading size="md" color="white">Idle CEO Game</Heading>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
        <Link as={RouterLink} to="/about" color="white" mx={2}>About</Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;