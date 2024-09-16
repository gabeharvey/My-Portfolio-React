/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Heading, Spacer, Link, Button } from '@chakra-ui/react';

const Navbar = () => {

  return (
    <Box>
      <Flex align="center" id="navbar">
        <Heading as="h1" size="lg" fontFamily="'Electrolize', cusive">
          Gabe's React Portfolio
        </Heading>
        <Spacer />
        <Flex fontFamily="'Share Tech Mono', cursive">
          <Link href="#about" fontSize="lg">
            About
          </Link>
          <Link href="#projects" fontSize="lg">
            Projects
          </Link>
          <Link href="#contact" fontSize="lg">
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
