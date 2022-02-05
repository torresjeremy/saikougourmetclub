/* eslint-disable max-len */
import React from 'react';
import {
  Flex, Text, Center, VStack,
} from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Flex width="100%" height={{ base: '250px', md: '150px' }} bg="red.150" color="white">
    <Center>
      <VStack spacing="5">
        <Text fontSize="sm" width="70%" fontWeight="200">
          Saikou Gourmet Club!! may only be re-sold for gain or profit as NFTs with legitimate policy IDs. We do not grant for any person(s) or
          business(es) to reproduce, print or otherwise sell our content for commercial purposes without explicit permission.
          For further guidance, please contact us directly.
        </Text>
        <Text fontSize="sm" width="70%" fontWeight="200">
          © 2021 Saikou Gourmet Club!!
        </Text>
      </VStack>
    </Center>
  </Flex>
);

export default Footer;
