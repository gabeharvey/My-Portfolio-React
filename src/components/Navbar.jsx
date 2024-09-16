/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Heading, Spacer, Link, Button } from '@chakra-ui/react';

const Navbar = () => {

  return (
    <Box p={4}>
      <Flex align="center" maxW="container.lg" mx="auto">
        <Heading as="h1" size="lg" fontFamily="'Electrolize', cusive">
          Gabe's React Portfolio
        </Heading>
        <Spacer />
        <Flex fontFamily="'Share Tech Mono', cursive">
          <Link href="#about" px={4} mt={1.5} fontSize="lg">
            About
          </Link>
          <Link href="#projects" px={4} mt={1.5} fontSize="lg">
            Projects
          </Link>
          <Link href="#contact" px={4} mt={1.5} fontSize="lg">
            Contact
          </Link>
          <Button colorScheme="gray" ml={4}>
            Resume
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
