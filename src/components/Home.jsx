import { Box, Heading, Text, Button, Container, VStack, SimpleGrid } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="container.lg" bgColor="#333333" mt="50px">
      {/* Existing Section */}
      <VStack spacing={8} textAlign="center" py={12}>
        <Box>
          <Heading mb={4} fontFamily="'Electrolize', cursive" color="#fffdd0">Welcome to My Portfolio</Heading>
          <Text fontSize="xl" fontFamily="'Share Tech Mono', cursive" color="#fffdd0">
            Gabe Harvey is a Full-Stack Web Developer and a rising star in the coding world! Please check out some of my work!
          </Text>
        </Box>
        <Button colorScheme="red" size="lg" fontFamily="'Share Tech Mono', cursive" color="#fffdd0">
          View My Work
        </Button>
      </VStack>
      <Box bgColor="#333333" mt={10} py={12}>
        <Heading mb={8} fontFamily="'Electrolize', cursive" color="#fffdd0" textAlign="center">
          My Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <Box
              key={idx}
              bgColor="#e03c31" 
              p={6}
              borderRadius="md"
              shadow="md"
              _hover={{ bgColor: '#c0392b', transform: 'scale(1.05)' }}
              transition="0.3s ease"
              color="#fffdd0"
              textAlign="center"
            >
              <Heading size="md" fontFamily="'Electrolize', cursive" mb={4}>
                Project {idx + 1}
              </Heading>
              <Text fontFamily="'Share Tech Mono', cursive">
                Description of the project goes here. Highlight the tech stack or functionality.
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Home;