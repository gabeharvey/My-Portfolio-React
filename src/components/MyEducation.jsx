/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Container, Image, VStack, Flex } from '@chakra-ui/react';

const MyEducation = () => {
  const educationList = [
    {
      school: 'University of Texas at San Antonio',
      logo: '/utsa-logo.png',
      duration: 'October 2023 - May 2024',
      degree: 'Full Stack Web Development Boot Camp Certificate',
      grade: '99.6% of 100% on coding challenges'
    },
    {
      school: 'Mississippi State University',
      logo: '/msu-logo.png',
      duration: 'August 2003 - May 2007',
      degree: 'Bachelor of Business Administration',
      grade: 'Final GPA 3.48'
    },
    {
        school: 'Mississippi State University',
        logo: '/msu-logo.png',
        duration: 'August 2003 - May 2007',
        degree: 'Bachelor of Arts',
        grade: 'Final GPA 3.48'
    }
  ];

  return (
    <Container maxW="container.lg" bgColor="#333333" mt="50px" py={12}>
      <VStack spacing={8} textAlign="center">
        <Box>
          <Heading mb={4} fontFamily="'Electrolize', cursive" color="#fffdd0">
            My Education
          </Heading>
          <Text fontSize="xl" fontFamily="'Share Tech Mono', cursive" color="#fffdd0" mb={1}>
            Here are some of the educational institutions I've attended, highlighting my academic journey.
          </Text>
        </Box>
      </VStack>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="600px"
        w="full"
      >
        {educationList.map((education, index) => (
          <Flex
            key={index}
            align="center"
            p={6}
            borderRadius="15px"
            bgColor="transparent"
            color="#333333"
            maxWidth="1200px"
            mb={8}
            w="full"
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify="center" 
            textAlign="center" 
          >
            <Image
              src={education.logo}
              alt={`${education.school} logo`}
              borderRadius="15px"
              boxSize="100px"
              objectFit="contain"
              mb={{ base: 4, md: 0 }}
              mr={{ md: 4 }}
              alignSelf="center" 
            />
            <Box textAlign="center">
              <Heading size="md" mb={2} fontFamily="'Electrolize', cursive" color="#fffdd0">
                {education.school}
              </Heading>
              <Text fontSize="lg" fontFamily="'Share Tech Mono', cursive" mb={2} color="#fffdd0">
                {education.degree}
              </Text>
              <Text fontSize="md" fontFamily="'Share Tech Mono', cursive" color="#e03c31">
                {education.duration}
              </Text>
              <Text fontSize="lg" fontFamily="'Share Tech Mono', cursive" mb={2} color="#fffdd0">
                {education.grade}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Container>
  );
};

export default MyEducation;
