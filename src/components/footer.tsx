/* eslint-disable max-len */
import React from 'react';
import {
  Text, Center, VStack, Box,
} from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Box width="100%" height={{ base: '250px', md: '150px' }} bg="red.150" color="white">
    <Center height={{ base: '250px', md: '150px' }}>
      <VStack spacing="5">
        <Center>
          <Text fontSize="12px" width={{ base: '70%', md: '50%' }} fontWeight="200">
            Saikou Gourmet Club!! may only be re-sold for gain or profit as NFTs with legitimate policy IDs. We do not grant for any person(s) or
            business(es) to reproduce, print or otherwise sell our content for commercial purposes without explicit permission.
            For further guidance, please contact us directly.
          </Text>
        </Center>
        <Center>
          <Text fontSize="12px" width="100%" fontWeight="200">
            © 2021 Saikou Gourmet Club!!
          </Text>
        </Center>
      </VStack>
    </Center>
  </Box>
);

export default Footer;
