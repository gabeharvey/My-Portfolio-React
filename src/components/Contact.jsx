/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'; 
import { Box, Heading, Text, Container, VStack, Button, Input, Textarea } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }

    emailjs.send('service_ci2tiru', 'template_f30j0mr', formData, 'OsmvrvTNk66UEd-sC')
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <Container maxW="container.lg" bgColor="#333333" mt="50px" py={1}>
      <VStack spacing={8} textAlign="center" py={1} as="form" onSubmit={handleSubmit}>
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
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleInputChange}
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
              name="message"
              value={formData.message}
              onChange={handleInputChange}
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
              type="submit"
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
          {status && <Text color="#fffdd0" mt={4}>{status}</Text>}
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;