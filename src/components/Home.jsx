import { Box, Heading, Text, Button, Container, VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="container.lg" bgColor="#333333" mt="50px">
      <VStack spacing={8} textAlign="center" py={12}>
        <Box>
          <Heading mb={4} fontFamily="'Electrolize', cusive" color="#fffdd0">Welcome to My Portfolio</Heading>
          <Text fontSize="xl" fontFamily="'Share Tech Mono', cursive" color="#fffdd0">
            Gabe Harvey is a Full-Stack Web Developer and a rising star in the coding world! Please check out some of my work!
          </Text>
        </Box>
        <Button colorScheme="red" size="lg" fontFamily="'Share Tech Mono', cursive" color="#fffdd0">
          View My Work
        </Button>
      </VStack>
    </Container>
  );
};

export default Home;
