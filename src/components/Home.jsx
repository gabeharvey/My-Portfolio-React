/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Box, Heading, Text, Container, VStack, SimpleGrid, Image, Button } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const createSpringProps = (flips, index) => {
  return flips.map(flip =>
    useSpring({
      transform: `perspective(600px) rotateX(${flip ? 180 : 0}deg)`,
      config: { mass: 5, tension: 800, friction: 80 },
    })
  )[index];
};

const Home = () => {
  const [flipped, setFlipped] = useState([false, false, false, false]); 

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const springProps = flipped.map((flip, index) => createSpringProps(flipped, index));

  const cardData = [
    {
      frontImage: 'tives-thread-and-thimble-logo.png',
      backLogo: '/tech1-logo.png',
      backText: 'Tives Thread and Thimble'
    },
    {
      frontImage: 'harvey-timber-screen.png',
      backLogo: '/tech2-logo.png',
      backText: 'Harvey Timber'
    },
    {
      frontImage: 'desk-space-logo.png',
      backLogo: '/tech3-logo.png',
      backText: 'Desk Space'
    },
    {
      frontImage: 'yeez-and-jays-logo.png',
      backLogo: '/tech4-logo.png',
      backText: 'Vue.js, Express.js, MySQL'
    }
  ];

  return (
    <Container maxW="container.lg" bgColor="#333333" mt="50px">
      <VStack spacing={8} textAlign="center" py={12}>
        <Box>
          <Heading mb={4} fontFamily="'Electrolize', cursive" color="#fffdd0">Gabe Harvey's Portfolio</Heading>
          <Text fontSize="xl" fontFamily="'Share Tech Mono', cursive" color="#fffdd0">
            Martin "Gabe" Harvey is a Full-Stack Web Developer and a rising star in the coding world! Please check out some of my work!
          </Text>
        </Box>
        <Button colorScheme="red" size="lg" fontFamily="'Share Tech Mono', cursive" color="#fffdd0">
          View My Work
        </Button>
      </VStack>
      <VStack spacing={6} align="center" width="100%">
        <Heading size="xl" mb={6} color="#fffdd0" fontFamily="'Share Tech Mono', cursive">
          My Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} spacing={10} width="100%" justifyItems="center">
          {cardData.map((card, index) => (
            <Box key={index} p={4} width="100%" maxWidth="400px" cursor="pointer" display="flex" justifyContent="center">
              <animated.div
                style={{
                  transformStyle: 'preserve-3d',
                  transform: springProps[index]?.transform || 'none',
                  position: 'relative',
                  width: '100%',
                  height: '300px', 
                }}
                onClick={() => handleFlip(index)}
              >
                <animated.div
                  style={{
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Image
                    src={`/${card.frontImage}`}
                    alt={`Card ${index + 1} front`}
                    borderRadius="15px"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </animated.div>
                <animated.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    backfaceVisibility: 'hidden',
                    transform: 'rotateX(180deg)', 
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    padding: '1rem',
                    backgroundColor: '#444444',
                  }}
                >
                  <Image
                    src={card.backLogo}
                    alt={`Technologies logo ${index + 1}`}
                    borderRadius="15px"
                    boxSize="80px"
                    mb={4}
                    objectFit="contain"
                  />
                  <Text color="#fffdd0" fontFamily="'Share Tech Mono', cursive" textAlign="center">
                    {card.backText}
                  </Text>
                </animated.div>
              </animated.div>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Home;
