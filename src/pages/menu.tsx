/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import {
  Flex, Center, VStack, Box, Button, Link,
} from '@chakra-ui/react';
import HeaderContact from 'images/contact/header_contact.png';
import { GiNoodles } from 'react-icons/gi';

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
              fontWeight="400"
              color="red.150"
              fontSize="7xl"
            >
              <Button fontSize={{ base: '20px', md: '40px' }} leftIcon={<GiNoodles />} width="100%" height="100%" p={{ base: '15px', md: '20px' }} bg="red.150" _hover={{ bg: 'red.150' }} _active={{ bg: 'red.1540' }} color="white">
                <Link href="https://buynfts.exchange/sales/TheFirstDish" target="_blank">Mint an SGC!!</Link>
              </Button>
            </Box>
          </Center>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Contact;
