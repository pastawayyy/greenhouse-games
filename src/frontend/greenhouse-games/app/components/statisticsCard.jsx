'use client';
import { useState, useEffect, useRef } from 'react';
import { Box, Container, VStack, Button, Text, Grid } from '@chakra-ui/react';

const StatBox = ({ number, suffix, label, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();
  const observerRef = useRef(null);

  useEffect(() => {
    // Only set up the observer if we haven't animated yet
    if (!hasAnimated) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Disconnect the observer immediately
            if (observerRef.current) {
              observerRef.current.disconnect();
              observerRef.current = null;
            }
            
            // Start counting animation
            let startTime = null;
            const animateCount = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
              
              // Ease-out function: fast at start, slow at end
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(easeOut * number);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animateCount);
              }
            };
            
            requestAnimationFrame(animateCount);
          }
        },
        { threshold: 0.3 } // Reduced threshold to trigger earlier
      );

      if (ref.current && observerRef.current) {
        observerRef.current.observe(ref.current);
      }
    }

    return () => {
      // Clean up observer on unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [number, duration, hasAnimated]);

  return (
    <Box
      ref={ref}
      bg="#6D8C65"
      borderRadius="xl"
      p={4}
      textAlign="left"
      width="100%"
      height="100px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      _hover={{ transform: "translateY(-5px)", boxShadow: "lg", transition: "all 0.3s" }}
    >
      <Text fontSize="3xl" fontWeight="bold" color="white" lineHeight="1">
        {count.toLocaleString()}{suffix}
      </Text>
      <Text fontSize="md" color="white" mt={1}>
        {label}
      </Text>
    </Box>
  );
};

const StatisticsCard = () => {
  return (
    <Box
      position="relative"
      width={{ base: "95%", sm: "90%", md: "75%" }}
      py={9}
      bgSize="cover"
      bgImage="url('/statistics_bg.png')"
      bgPos="center"
      bgRepeat="no-repeat"
      rounded="2xl"
      my={8}
      mx="auto"
      overflow="hidden"
    >
      
      <Container position="relative" zIndex={1} maxW="container.sm" px={4}>
        <VStack spacing={8}>
          {/* Heading */}
          <Text 
            fontSize={{ base: "xl", md: "3xl" }} 
            fontWeight="bold" 
            color="white" 
            textAlign="center"
            px={2}
          >
            Unlock a World of Resources
          </Text>
          
          {/* Statistics Boxes - Grid layout */}
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={3}
            width="100%"
            px={1}
          >
            <StatBox number={10} suffix="M+" label="digital games" duration={2} />
            <StatBox number={10} suffix="K+" label="educators empowered" duration={2.5} />
            <StatBox number={200} suffix="+" label="game developers" duration={3} />
            <StatBox number={1} suffix="M+" label="hours played" duration={3.5} />
          </Grid>
          
          {/* Button */}
          <Button
            colorScheme="blue"
            size="md"
            px={6}
            py={4}
            variant="solid"
            fontSize="md"
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            transition="all 0.2s"
          >
            Explore More
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default StatisticsCard;