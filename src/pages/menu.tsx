import React from 'react';
import {
  Flex, Center, Text, VStack, Box, Image, SimpleGrid, Heading, Container,
} from '@chakra-ui/react';
import HeaderContact from 'images/contact/header_contact.png';

const Contact: React.FC = () => (
  <Flex direction="row">
    <VStack width="100%" bgColor="yellow.150">
      <Box
        backgroundImage={`url(${HeaderContact})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        w="100%"
        height={{ base: '80vh' }}
      >
        <Center height="85%">
          <Heading
            fontFamily="CFSamuraiBob"
            fontWeight="400"
            color="red.150"
            fontSize="7xl"
          >
            Serving Real Soon!
          </Heading>
        </Center>
      </Box>
    </VStack>
  </Flex>
);

export default Contact;
