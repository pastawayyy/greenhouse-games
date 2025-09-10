'use client'

import {
  Box,
  Image,
  Text,
  Flex,
  Avatar,
  Icon,
  IconButton,
  useBreakpointValue
} from "@chakra-ui/react";
import { LuStar, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useState, useRef, useEffect, useCallback } from "react";

const Carousel = ({ title = "Explore popular games", items }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const scrollProgressRef = useRef(0);
  const startTimeRef = useRef(0);
  const pauseTimeRef = useRef(0);
  
  // Calculate visible items based on screen size
  const breakpointValues = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  });
  
  useEffect(() => {
    setVisibleItems(breakpointValues || 1);
  }, [breakpointValues]);

  // Infinite scroll animation
  const startInfiniteScroll = useCallback(() => {
    if (!scrollRef.current || isPaused) return;
    
    const scrollElement = scrollRef.current;
    const scrollWidth = scrollElement.scrollWidth / 3; // Since we've tripled the content
    const duration = 60000; // 60 seconds for a full loop
    
    // If we're resuming from a pause, use the saved progress
    if (pauseTimeRef.current > 0) {
      startTimeRef.current = performance.now() - (pauseTimeRef.current - startTimeRef.current);
      pauseTimeRef.current = 0;
    } else {
      startTimeRef.current = performance.now();
    }
    
    const animate = (currentTime) => {
      if (isPaused) {
        pauseTimeRef.current = currentTime;
        return;
      }
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = (elapsed % duration) / duration;
      
      // Save current progress
      scrollProgressRef.current = progress;
      
      // Smooth scrolling with ease-in-out effect
      const scrollPos = progress * scrollWidth;
      scrollElement.scrollLeft = scrollPos;
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Handle user interactions
  const handleUserInteraction = () => {
    setIsPaused(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleInteractionEnd = () => {
    // Resume after a delay
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Manual navigation
  const scroll = (direction) => {
    handleUserInteraction();
    
    if (scrollRef.current) {
      const scrollAmount = 220 * visibleItems;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      
      // Update our progress reference based on the new scroll position
      setTimeout(() => {
        if (scrollRef.current) {
          const scrollWidth = scrollRef.current.scrollWidth / 3;
          scrollProgressRef.current = scrollRef.current.scrollLeft / scrollWidth;
        }
      }, 300); // Wait for the scroll to complete
    }
    
    handleInteractionEnd();
  };

  // Initialize and cleanup animation
  useEffect(() => {
    startInfiniteScroll();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startInfiniteScroll]);

  // Clone items for infinite scroll illusion
  const clonedItems = items ? [...items, ...items, ...items] : [];

  if (!items || items.length === 0) {
    return (
      <Box py={4} bg="#F9FCEA" position="relative">
        <Text textAlign="center" py={8}>No items to display</Text>
      </Box>
    );
  }

  return (
    <Box 
      py={4} 
      bg="#F9FCEA" 
      position="relative"
      onMouseEnter={handleUserInteraction}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleUserInteraction}
      onTouchEnd={handleInteractionEnd}
    >
      {/* Header with title and navigation buttons */}
      <Flex justify="space-between" align="center" px={4} mb={4}>
        <Text fontWeight="bold" color="green.800" fontSize={{ base: "lg", md: "xl" }}>
          {title}
        </Text>
        
        <Flex gap={2}>
            <IconButton aria-label="Scroll left" onClick={() => scroll("left")} rounded="full" variant="outline" colorPalette="green">
            <LuChevronLeft color="green"/>
            </IconButton>

            <IconButton aria-label="Scroll right" onClick={() => scroll("right")} rounded="full" variant="outline" colorPalette="green">
            <LuChevronRight color="green"/>
            </IconButton>
        </Flex>
      </Flex>

      {/* Carousel items */}
      <Box 
        overflowX="hidden" 
        css={{
          '&::-webkit-scrollbar': { display: 'none' },
          'msOverflowStyle': 'none',
          'scrollbarWidth': 'none'
        }}
        ref={scrollRef}
      >
        <Flex gap={6} px={4} width="max-content">
          {clonedItems.map((item, index) => (
            <Box
              key={index}
              minW="200px"
              maxW="200px"
              rounded="xl"
              overflow="hidden"
              position="relative"
              flexShrink={0}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              transition="transform 0.2s"
              borderWidth="1px"
              borderColor="gray.200"
            >
              <Box textAlign="start" p={4}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  borderRadius="lg"
                  boxSize="150px"
                  mx="auto"
                  mb={3}
                  objectFit="cover"
                />
                <Text fontWeight="bold" fontSize="md" color="green.700" noOfLines={1}> 
                  {item.title}
                </Text>
                <Flex align="center" justify="start" gap={2} mt={2}>
                    <Avatar.Root size="xs">
                      <Avatar.Fallback name={item.organiser} />
                      <Avatar.Image src={item.organiserPic || null} />
                    </Avatar.Root>
                  <Text fontSize="xs" fontWeight="medium" color="green.700" noOfLines={1}>
                    {item.organiser}
                  </Text>
                </Flex>
              </Box>

              <Box px={4} pb={3} mt="auto">
                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="black" fontWeight="bold">
                    {item.price}
                  </Text>
                  <Flex align="center" gap={1}>
                    <Text fontSize="xs" fontWeight="bold" color="black">
                      {item.rating}
                    </Text>
                    <Icon as={LuStar} color="green.400" boxSize={3} />
                    <Text fontSize="xs" color="black">
                      ({item.reviews})
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Carousel;