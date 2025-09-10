'use client';

import { useState, useEffect } from 'react';
import { Box, Container, VStack, Button, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Masthead = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  
  // Replace with your actual image paths
  const images = [
    '/masthead_pics/1.png',
    '/masthead_pics/2.png',
    '/masthead_pics/3.png',
    '/masthead_pics/4.png',
    '/masthead_pics/5.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setNextIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box position="relative" height="70vh" width="100%" overflow="hidden">
      {/* Current Image */}
      <motion.div
        key={`current-${currentIndex}`}
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <Image
          src={images[currentIndex]}
          alt="Masthead background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        {/* Black overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="blackAlpha.600"
        />
      </motion.div>

      {/* Next Image */}
      <motion.div
        key={`next-${nextIndex}`}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <Image
          src={images[nextIndex]}
          alt="Masthead background"
          fill
          style={{ objectFit: 'cover' }}
        />
        {/* Black overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="blackAlpha.600"
        />
      </motion.div>

      {/* Masthead Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={2}
      />

      {/* Wave SVG at the bottom */}
      <Box
        position="absolute"
        bottom={-8}
        left={0}
        width="100%"
        height="auto"
        zIndex={3}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F9FCEA" fillOpacity="1" d="M0,128L80,149.3C160,171,320,213,480,245.3C640,277,800,299,960,261.3C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </Box>

      <Container
        position="relative"
        height="100%"
        display="flex"
        alignItems="center"
        maxW="container.xl"
        zIndex={4}
      >
        <VStack
          align="flex-start"
          color="white"
          maxW="600px"
        >
          <Text fontSize="3xl" fontWeight="light">
            Greenhouse Games
          </Text>
          
          <Heading as="h1" size="6xl" fontWeight="bold" lineHeight="1.2" py={2}>
            Empower Minds Through Digital Play
          </Heading>
          
          <Button
            colorPalette="green"
            size="lg"
            px={8}
            my={8}
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            transition="all 0.2s"
            variant="surface"
          >
            Explore Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Masthead;