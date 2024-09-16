/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Box, Heading, Text, Container, VStack, Button, Image, Flex } from '@chakra-ui/react';

const About = ({ scrollToSection, refs }) => {
  return (
    <Container maxW="container.lg" bgColor="#333333" mt="50px" py={1}>
      <VStack spacing={8} textAlign="center" py={1}>
        <Box>
          <Heading mb={4} fontFamily="'Electrolize', cursive" color="#fffdd0">
            Gabe Harvey's React Portfolio
          </Heading>
          <Text fontSize="xl" fontFamily="'Share Tech Mono', cursive" color="#fffdd0">
            Martin "Gabe" Harvey is a Full-Stack Web Developer and a rising star in the coding world! Please check out some of my work!
          </Text>
        </Box>
        <Button 
          colorScheme="red" 
          size="lg" 
          fontFamily="'Share Tech Mono', cursive" 
          color="#fffdd0" 
          mb={6} 
          onClick={() => scrollToSection(refs.projectsRef)}  
        >
          View My Work
        </Button>
      </VStack>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="420px"
        w="full"
      >
        <Flex
          align="center"
          p={2}
          borderRadius="15px"
          bgColor="transparent"
          color="#333333"
          maxWidth="1200px"
          mb={2}
          w="full"
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          textAlign="center"
          position="relative"
        >
          <Image
            src="/profile-pic.png" 
            alt="Picture of Gabe Harvey"
            borderRadius="55px"
            boxSize={{ base: '300px', sm: '350px', md: '350px', lg: '400px' }}
            objectFit="cover"
            mb={{ base: 4, md: 0 }}
            mr={{ md: 4 }}
            zIndex={2}
            style={{
              maskImage: 'radial-gradient(circle, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%)',
            }}
          />
        </Flex>
      </Box>
    </Container>
  );
};

export default About;