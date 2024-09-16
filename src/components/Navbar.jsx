/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box>
      <Flex
        align="center"
        id="navbar"
        h="120px" 
        px="2rem" 
        py="2.5rem"
        position="relative"
        mb="150px"
      >
        <Heading as="h1" size="lg" fontFamily="'Electrolize', cursive" fontSize="2xl">
          Gabe's React Portfolio
        </Heading>
        <Spacer />
        <Flex fontFamily="'Share Tech Mono', cursive" fontSize="lg">
          <Link href="#about" mx={4}>
            About
          </Link>
          <Link href="#projects" mx={4}>
            Projects
          </Link>
          <Link href="#contact" mx={4}>
            Contact
          </Link>
          <Link href="#contact" mx={4}>
            Resume
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

