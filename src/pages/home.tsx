import React from 'react';
import HeaderBG from 'images/home_header.png';
import MainNFT from 'images/home_nft_showcase.gif';
import Greetings from 'images/greetings.png';
import {
  Image, Flex, Center, SimpleGrid, Text, VStack, Button, Box, Container,
} from '@chakra-ui/react';
import NFT_IMAGES from 'utils/nft_image_imports';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex direction="row">
      <VStack width="100%" bgColor="yellow.150">
        <Box
          backgroundImage={`url(${HeaderBG})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          w="100%"
          h={{ base: '600px', md: 'auto' }}
        >
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} height={{ base: '600px', md: '700px' }}>
            <Container maxW="5xl">
              <Center pt={{ base: '40px', md: 'auto' }} height="100%" pb="30px">
                <VStack spacing="8">
                  <Image src={Greetings} maxWidth={{ base: '250px', md: '350px', lg: '450px' }} style={{ transform: 'rotate(-1.15deg)' }} />
                  <Text px={{ base: '30px', md: '0px' }} width={{ base: 'auto', lg: '430px' }} textAlign="left" color="white" fontWeight="500" fontSize={{ base: '14px', md: '16px', lg: '20px' }}>
                    Saikou Gourmet Club is a collection of 3,333 uniquely hand-drawn,
                    manually mixed and matched CNFT
                    PFP on the Cardano blockchain.
                    It features the ultimate universal language - food.
                  </Text>
                </VStack>
              </Center>
            </Container>
            <Center pb={{ base: '40px', md: 'auto' }}><Image src={MainNFT} width={{ base: '250px', md: '350px', lg: '450px' }} /></Center>
          </SimpleGrid>
        </Box>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} height="auto" spacing="20" pt="20" pb="20">
          <Image src={NFT_IMAGES.NFT1} maxWidth="300px" />
          <Image src={NFT_IMAGES.NFT2} maxWidth="300px" />
          <Image src={NFT_IMAGES.NFT3} maxWidth="300px" />
          <Image src={NFT_IMAGES.NFT4} maxWidth="300px" />
          <Image src={NFT_IMAGES.NFT5} maxWidth="300px" />
          <Image src={NFT_IMAGES.NFT6} maxWidth="300px" />
        </SimpleGrid>
        <SimpleGrid columns={{ sm: 1, md: 2 }} height="auto" spacing={{ base: '20', md: '20px' }} pt={{ base: '0', lg: '20' }} pb="40">
          <Center width="450px">
            <VStack spacing="5">
              <Text fontWeight="bold" fontSize="3xl">
                Saikou Gourmet Club!!
              </Text>
              <Text fontWeight="bold" fontSize="3xl">
                Fresh CNFT drops
              </Text>
              <Text textAlign="center" width={{ base: '300px', lg: '200px' }}>
                Heavily inspired by
                Japanese manga and food,
                our creatives present
                “The First Dish” made
                fresh from our kitchen.
              </Text>
              <Button size="md" colorScheme="red">
                See More
              </Button>
            </VStack>
          </Center>
          <Center width="450px">
            <VStack spacing="5">
              <Text fontWeight="bold" fontSize="3xl">
                Roadmap
              </Text>
              <Text fontWeight="bold" fontSize="3xl">
                2022 Schedule
              </Text>
              <Text textAlign="center" fontWeight="400" width={{ base: '300px', lg: '300px' }} pb="5">
                What’s cooking in our kitchen?
                Check out our schedule for 2022 to get
                fresh updates on the latest events and
                dishes from our collection.
              </Text>
              <Button size="md" colorScheme="red" onClick={() => navigate('/roadmap')}>
                See More
              </Button>
            </VStack>
          </Center>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default Home;
