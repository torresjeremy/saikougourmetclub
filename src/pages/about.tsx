/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Flex, Center, Text, VStack, Box, Image, SimpleGrid, Heading,
} from '@chakra-ui/react';
import HeaderBG from 'images/about_header.png';
import NFT_IMAGES from 'utils/nft_image_imports';
// @ts-ignore
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/about.scss';
import { useMediaQuery } from 'react-responsive';

const About: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isTabletOrMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <Flex direction="row">
      <VStack width="100%" bgColor="yellow.150">
        <Box
          backgroundImage={`url(${HeaderBG})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          w="100%"
          h={{ base: '750px', md: 'auto' }}
        >
          <Center height={{ base: '750px', md: '700px' }}>
            <Flex direction="column">
              <Center>
                <Flex direction="row">
                  <Center>
                    <Box fontFamily="CFSamuraiBob" color="white" fontSize={{ base: '50px', md: '7xl' }} pb="35px" lineHeight={{ base: '35px', md: '36px' }}>
                      WHO IS SAIKOU GOURMET CLUB <Text fontFamily="GangOfThree" display="inline" fontSize={{ base: '33px', md: '5xl' }}>?</Text>
                    </Box>
                  </Center>
                </Flex>
              </Center>
              <Slider {...settings}>
                <Image src={NFT_IMAGES.NFT1} maxWidth={{ base: '250px', md: '400px' }} p="2" />
                <Image src={NFT_IMAGES.NFT2} maxWidth={{ base: '250px', md: '400px' }} p="2" />
                <Image src={NFT_IMAGES.NFT3} maxWidth={{ base: '250px', md: '400px' }} p="2" />
                <Image src={NFT_IMAGES.NFT4} maxWidth={{ base: '250px', md: '400px' }} p="2" />
                <Image src={NFT_IMAGES.NFT5} maxWidth={{ base: '250px', md: '400px' }} p="2" />
                <Image src={NFT_IMAGES.NFT6} maxWidth={{ base: '250px', md: '400px' }} p="2" />
              </Slider>
              <Center>
                <Text textAlign="center" color="white" fontWeight="400" pt="5" width={{ base: 'auto', md: '60%' }} px={{ base: '30px', md: '0' }}>
                  A collection of 3,333 uniquely hand-drawn and manually mixed CNFT PFP on the Cardano
                  blockchain. Featuring the ultimate universal language - food.
                  A series of dishes will be launched in order to build a community-driven platform for collectors.
                  Each dish will feature a variety of content, background, dish bowl/plate, and characters.
                </Text>
              </Center>
            </Flex>
          </Center>
        </Box>
        <SimpleGrid columns={{ sm: 1, lg: 2 }} height="auto" spacing={{ base: '0', md: '125px' }} pt="100px" pb="100px">
          <Center width={{ sm: '300px', md: '400px' }}>
            <VStack spacing="5" p={{ base: '40px', md: '0' }}>
              <Text fontWeight="700" fontSize="3xl">
                Creatives
              </Text>
              <Text textAlign="center" fontWeight="500" fontSize="md">
                The team is currently composed of three members with a love for art and design with a shared passion for food
                and Japanese culture.
              </Text>
            </VStack>
          </Center>
          <Center width={{ sm: '300px', md: '400px' }}>
            <VStack spacing="5" p={{ base: '40px', md: '0' }}>
              <Text fontWeight="700" fontSize="3xl">
                Food Metaverse
              </Text>
              <Text textAlign="center" fontWeight="500" fontSize="md">
                Connecting the metaverse
                with the ultimate universal
                language - food. Steaming, hot, dishes to enjoy for every collector.
              </Text>
            </VStack>
          </Center>
          <Center width={{ sm: '300px', md: '400px' }}>
            <VStack spacing="5" p={{ base: '40px', md: '0' }}>
              <Text fontWeight="700" fontSize="3xl">
                Culture
              </Text>
              <Text textAlign="center" fontWeight="500" fontSize="md">
                We grew up watching Japanese anime and being exposed to manga during our childhood, which is the main
                inspiration for the SGC collection.
              </Text>
            </VStack>
          </Center>
          <Center width={{ sm: '300px', md: '400px' }}>
            <VStack spacing="5" p={{ base: '40px', md: '0' }}>
              <Text fontWeight="700" fontSize="3xl">
                Charity
              </Text>
              <Text textAlign="center" fontWeight="500" fontSize="md">
                5% of the total earnings of SGC will be donated to a charity that seeks to fight global hunger.
              </Text>
            </VStack>
          </Center>
        </SimpleGrid>
        <Center>
          <Heading fontFamily="CFSamuraiBob" color="red.150" fontWeight="400" fontSize="6xl" pb="70px">TEAM</Heading>
        </Center>
        <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing="100px" pb="100px" px="40px">
          <VStack spacing="5">
            <Image src={NFT_IMAGES.NFT2} width={{ base: '250px', md: '400px' }} />
            <Text fontWeight="bold" fontSize="3xl">Dana</Text>
            <Text fontWeight="500" fontSize="lg">
              Main Artist
              <br />
              Project Head
            </Text>
          </VStack>
          <VStack spacing="5">
            <Image src={NFT_IMAGES.NFT1} width={{ base: '250px', md: '400px' }} />
            <Text fontWeight="bold" fontSize="3xl">Liam</Text>
            <Text fontWeight="500" fontSize="lg">
              Co Project Head
              <br />
              Marketing
              <br />
              Social Media Strategist
            </Text>
          </VStack>
          <VStack spacing="5">
            <Image src={NFT_IMAGES.NFT3} width={{ base: '250px', md: '400px' }} />
            <Text fontWeight="bold" fontSize="3xl">Dave</Text>
            <Text fontWeight="500" fontSize="lg">
              Assistant Artist
              <br />
              Discord & Social
              <br />
              Moderator
            </Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default About;
