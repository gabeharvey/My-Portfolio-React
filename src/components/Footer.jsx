import { Box, Text, Link, Container, Stack, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} color={color} py={6} mt={12}>
      <Container maxW="container.lg" centerContent>
        <Stack spacing={4} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</Text>
          <Stack direction="row" spacing={6} justify="center">
            <Link href="#about" color={color}>
              About
            </Link>
            <Link href="#projects" color={color}>
              Projects
            </Link>
            <Link href="#contact" color={color}>
              Contact
            </Link>
            <Link href="https://linkedin.com/in/your-profile" isExternal color={color}>
              LinkedIn
            </Link>
            <Link href="https://github.com/your-profile" isExternal color={color}>
              GitHub
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
