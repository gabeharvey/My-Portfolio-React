import { Box, Heading, Text, Button, Container, VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="container.lg" centerContent>
      <VStack spacing={8} textAlign="center" py={12}>
        <Box>
          <Heading mb={4}>Welcome to My Portfolio</Heading>
          <Text fontSize="xl">
            I’m a passionate web developer specializing in creating amazing user experiences.
            Explore my work and get in touch to discuss your next project!
          </Text>
        </Box>
        <Button colorScheme="teal" size="lg">
          View My Work
        </Button>
      </VStack>
    </Container>
  );
};

export default Home;
