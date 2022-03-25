/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
  Flex, Center, Text, VStack, Box, Image, Heading, Container,
} from '@chakra-ui/react';
import HeaderNaruto from 'images/roadmap/header_naruto.png';
import HeaderRoadmap from 'images/roadmap/header_roadmap.png';

const Roadmap: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex direction="row">
      <VStack width="100%" bgColor="yellow.150">
        <Box
          backgroundImage={`url(${HeaderRoadmap})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          w="100%"
          height={{ base: '500px', md: '450px' }}
        >
          <Center height={{ base: '500px', md: '450px' }}>
            <Flex direction="column">
              <Center><Image src={HeaderNaruto} boxSize="70px" /></Center>
              <Text fontFamily="CFSamuraiBob" fontSize="50px" fontWeight="400" color="white" mt="-10px">ROADMAP</Text>
              <Text color="white" fontWeight="400" pt="10px" fontSize="18px">Fresh dishes, giveaways, and events coming right up on 2022!</Text>
            </Flex>
          </Center>
        </Box>
        <Container pt="80px" pb="30px" maxW="8xl" px="12%">
          <Heading fontSize="55px" fontFamily="CFSamuraiBob" fontWeight="400" color="red.150" textAlign="left">Q2 2022</Heading>
          <Container fontWeight="500" color="black" textAlign="left" maxW="90%" pt="20px">
            <Text pt="10px" pb="10px">Website Launching</Text>
            <Text pt="10px" pb="10px">Social Media Presence</Text>
            <Text pt="10px" pb="10px">Live Launching of “The First Dish” </Text>
            <Text pt="10px" pb="10px">Community NFT Raffle @ 100% Sold</Text>
            <Text pt="10px">Oishi Charity Event</Text>
            <Text fontWeight="400" pl="50px">5% of the total earnings of Saikou Gourmet Club!! Will be donated to a charity that seeks to fight Global hunger. </Text>
          </Container>
        </Container>
        <Container pt="30px" pb="30px" maxW="8xl" px="12%">
          <Heading fontSize="55px" fontFamily="CFSamuraiBob" fontWeight="400" color="red.150" textAlign="left">Q3 2022</Heading>
          <Container fontWeight="500" color="black" textAlign="left" maxW="90%" pt="20px">
            <Text pt="10px">Community Art Competition</Text>
            <Text fontWeight="400" pl="50px" pb="10px">Winner will receive an exclusive NFT and become the banner on Discord. Top 10 will be posted on social media.</Text>
            <Text pt="10px">Chef Guesting V1</Text>
            <Text fontWeight="400" pl="50px" pb="10px">”The First Dish” in the style of our guest chef. Artist to be determined by the team.</Text>
            <Text pt="10px">Grant Community Giveaway</Text>
            <Text fontWeight="400" pl="50px" pb="10px">Winner will receive a 3d printed or resin Sculpture teaser for “The Second Dish”</Text>
          </Container>
        </Container>
        <Container pt="30px" pb="80px" maxW="8xl" px="12%">
          <Heading fontSize="55px" fontFamily="CFSamuraiBob" fontWeight="400" color="red.150" textAlign="left">Q4 2022</Heading>
          <Container fontWeight="500" color="black" textAlign="left" maxW="90%" pt="20px">
            <Text pt="10px">Launching of “The Second Dish” </Text>
            <Text fontWeight="400" pl="50px" pb="10px">Winner will receive an exclusive NFT and become the banner on Discord. Top 10 will be posted on social media.</Text>
            <Text pt="10px">”The First Dish” in the style of our guest chef. Artist to be determined by the team.</Text>
            <Text fontWeight="400" pl="50px" pb="10px">”The First Dish” in the style of our guest chef. Artist to be determined by the team.</Text>
            <Text pt="10px">“Metaverse Food Street” Announcement</Text>
            <Text fontWeight="400" pl="50px" pb="10px">A community driven space wehre one can showcase and/or sell their Saikou Gourmet Club!! NFT’s.</Text>
          </Container>
        </Container>
      </VStack>
    </Flex>
  );
};

export default Roadmap;
