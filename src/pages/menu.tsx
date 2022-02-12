/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import {
  Flex, Center, VStack, Box, Text,
} from '@chakra-ui/react';
import HeaderContact from 'images/contact/header_contact.png';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
            <Box
              fontFamily="CFSamuraiBob"
              fontWeight="400"
              color="red.150"
              fontSize="7xl"
            >
              Serving Real Soon <Text fontFamily="GangOfThree" display="inline" fontSize={{ base: '5xl' }}>!</Text>
            </Box>
          </Center>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Contact;
