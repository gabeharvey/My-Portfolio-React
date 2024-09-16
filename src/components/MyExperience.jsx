/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Container, Image, VStack, SimpleGrid } from '@chakra-ui/react';

const MyExperience = () => {
  const experiences = [
    {
      title: 'Web Design - Sales Associate',
      company: 'Web7 Technologies',
      logo: '/web7-logo.png',
      duration: 'August 2024 - Present',
      description: 'Managed procurement of web hosting and web design clients. Assisting CEO with React builds, WordPress, and web hosting.'
    },
    {
      title: 'Head of Technology & Timber Management',
      company: 'Harvey Timber',
      logo: '/harvey-timber-logo.png',
      duration: 'May 2017 - May 2024',
      description: 'Managed timber harvesting, planting, and thinning. Constructed React application utilizing MERN stack principles for organization.'
    },
    {
      title: 'Quality Assurance Specialist',
      company: 'United Services Automobile Association',
      logo: '/usaa-logo.png',
      duration: 'September 2008 - May 2017',
      description: 'Served as Quality Assurance Specialist of New Member Solutions. Audited 400+ employees in San Antonio, Phoenix, and Tampa offices and reported results to managers.'
    }
  ];

  return (
    <Container maxW="container.lg" bgColor="#333333" mt="50px" py={12}>
      <VStack spacing={8} textAlign="center">
        <Box>
          <Heading mb={4} fontFamily="'Electrolize', cursive" color="#fffdd0">
            My Experience
          </Heading>
          <Text fontSize="xl" fontFamily="'Share Tech Mono', cursive" color="#fffdd0" mb={12}>
            Here are some of the roles I've had over the years, highlighting my journey as a Full-Stack Web Developer.
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
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 1 }} 
          spacing={8}
          maxW="1200px"
          mx="auto" 
        >
          {experiences.map((experience, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="15px"
              bgColor="#fffdd0"
              color="#333333"
              maxWidth="400px"
              textAlign="center"
            >
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                borderRadius="15px"
                mb={4}
                boxSize="80px"
                objectFit="contain"
              />
              <Heading size="md" mb={2} fontFamily="'Electrolize', cursive">
                {experience.title}
              </Heading>
              <Text fontSize="lg" fontFamily="'Share Tech Mono', cursive" mb={2}>
                {experience.company}
              </Text>
              <Text fontSize="md" fontFamily="'Share Tech Mono', cursive" mb={4} color="#e03c31">
                {experience.duration}
              </Text>
              <Text fontSize="md" fontFamily="'Share Tech Mono', cursive">
                {experience.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default MyExperience;
