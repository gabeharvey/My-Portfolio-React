/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Box, Heading, Text, Container, VStack, SimpleGrid, Image, Button } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const createSpringProps = (flips, index) => {
  return flips.map(flip =>
    useSpring({
      transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
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

  return (
    <Container maxW="container.lg" bgColor="#333333" mt="50px">
            <VStack spacing={8} textAlign="center" py={12}>
        <Box>
          <Heading mb={4} fontFamily="'Electrolize', cursive" color="#fffdd0">Gabe Harvey's Portfolio</Heading>
          <Text fontSize="xl" fontFamily="'Share Tech Mono', cursive" color="#fffdd0">
            Gabe Harvey is a Full-Stack Web Developer and a rising star in the coding world! Please check out some of my work!
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
          {['card1.png', 'card2.png', 'card3.png', 'card4.png'].map((image, index) => (
            <Box key={index} p={4} width="100%" maxWidth="300px" cursor="pointer" display="flex" justifyContent="center">
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
                    src={`/${image}`}
                    alt={`Card ${index + 1}`}
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
                    transform: 'rotateY(180deg)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    padding: '1rem',
                    backgroundColor: '#444444',
                  }}
                >
                  <Text color="#fffdd0" fontFamily="'Share Tech Mono', cursive">
                    Card Back Content {index + 1}
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
