/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Container, VStack, Button, Input, Textarea } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Container maxW="container.lg" bgColor="#333333" mt="50px" py={1}>
      <VStack spacing={8} textAlign="center" py={1}>
        <Box>
          <Heading mb={4} fontFamily="'Electrolize', cursive" color="#fffdd0">
            Contact Gabe Harvey
          </Heading>
          <Text fontSize="xl" fontFamily="'Share Tech Mono', cursive" color="#fffdd0">
            Interested in collaborating or have any questions? Feel free to reach out and let's connect!
          </Text>
        </Box>
        <Box w="full">
          <VStack spacing={4} align="center">
            <Input 
              placeholder="Your Name" 
              size="lg" 
              fontFamily="'Share Tech Mono', cursive" 
              color="#fffdd0" 
              bgColor="#444" 
              borderColor="#555" 
              _hover={{ borderColor: '#fffdd0' }}
              _placeholder={{ color: "#fffdd0" }}
            />
            <Input 
              placeholder="Your Email" 
              size="lg" 
              fontFamily="'Share Tech Mono', cursive" 
              color="#fffdd0" 
              bgColor="#444" 
              borderColor="#555" 
              _hover={{ borderColor: '#fffdd0' }}
              _placeholder={{ color: "#fffdd0" }}
            />
            <Textarea
              placeholder="Your Message"
              size="lg"
              fontFamily="'Share Tech Mono', cursive"
              color="#fffdd0"
              bgColor="#444"
              borderColor="#555"
              _hover={{ borderColor: '#fffdd0' }}
              _placeholder={{ color: "#fffdd0" }}
              resize="vertical"
              minH="150px"
            />
            <Button 
              colorScheme="red" 
              size="lg" 
              fontFamily="'Share Tech Mono', cursive" 
              color="#fffdd0" 
              mb={6}
              _hover={{ bgColor: "#c53030" }} 
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;