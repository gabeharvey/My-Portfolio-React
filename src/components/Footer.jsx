/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Link, Container, Stack } from '@chakra-ui/react';

const Footer = () => {

  return (
    <Box py={6} mt={12} fontFamily="'Share Tech Mono', cursive">
      <Container maxW="container.lg" centerContent>
        <Stack spacing={4} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Gabe's React Portfolio. All rights reserved.</Text>
          <Stack direction="row" spacing={6} justify="center">
            <Link href="https://linkedin.com/in/your-profile">
              LinkedIn
            </Link>
            <Link href="https://github.com/your-profile">
              GitHub
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
