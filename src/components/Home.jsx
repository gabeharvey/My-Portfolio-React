import { Box, Heading, Text, Button, Container, VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="container.lg" centerContent>
      <VStack spacing={8} textAlign="center" py={12}>
        <Box>
          <Heading mb={4} fontFamily="'Electrolize', cusive">Welcome to My Portfolio</Heading>
          <Text fontSize="xl" fontFamily="'Share Tech Mono', cursive">
            Gabe Harvey is a Full-Stack Web Developer and a rising star in the coding world! Please check out some of my work!
          </Text>
        </Box>
        <Button colorScheme="gray" size="lg" fontFamily="'Share Tech Mono', cursive">
          View My Work
        </Button>
      </VStack>
    </Container>
  );
};

export default Home;
