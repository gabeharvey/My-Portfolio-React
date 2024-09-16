/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Link, Container, Stack } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" py="2rem" px="2rem" fontFamily="'Share Tech Mono', cursive" id="footer" position="relative" mt="150px">
      <Container>
        <Stack spacing={4} textAlign="center">
          <Stack direction="row" spacing={6} justify="center">
            <Link href="https://www.linkedin.com/in/gabe-harvey-37ab90308/" isExternal aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/gabeharvey" isExternal aria-label="GitHub">
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.facebook.com/" isExternal aria-label="Facebook">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://www.instagram.com/" isExternal aria-label="Instagram">
              <FaInstagram size={24} />
            </Link>
          </Stack>
          <Text>&copy; {new Date().getFullYear()} Gabe's React Portfolio. All rights reserved.</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
