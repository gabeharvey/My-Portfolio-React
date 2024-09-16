import { Box, Flex, Heading, Spacer, Link, Button, useColorModeValue } from '@chakra-ui/react';

const Navbar = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} p={4} boxShadow="md">
      <Flex align="center" maxW="container.lg" mx="auto">
        <Heading as="h1" size="lg" color={color}>
          My Portfolio
        </Heading>
        <Spacer />
        <Flex>
          <Link href="#about" px={4} color={color} fontSize="lg">
            About
          </Link>
          <Link href="#projects" px={4} color={color} fontSize="lg">
            Projects
          </Link>
          <Link href="#contact" px={4} color={color} fontSize="lg">
            Contact
          </Link>
          <Button colorScheme="teal" ml={4}>
            Resume
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
