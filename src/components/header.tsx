import React from 'react';
import Logo from 'images/Logo.png';
import {
  Flex, Link, Center, Spacer, Image, Box, Menu, MenuButton, IconButton, MenuList, MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header: React.FC = () => (
  <Flex width="100%" height="130px" bg="yellow.150">
    <Center maxHeight="130px">
      <Image ml={{ base: '2', md: '10' }} src={Logo} objectFit="cover" alt="logo" width={{ base: '100px', md: '150px' }} />
    </Center>
    <Spacer />
    <Flex
      flexDirection="row"
      sx={{
        '@media only screen and (max-width: 767px)': {
          display: 'none',
        },
      }}
    >
      <Center p="5"><Link to="/test" fontWeight="bold">Home</Link></Center>
      <Center p="5"><Link to="/test" fontWeight="bold">About</Link></Center>
      <Center p="5"><Link to="/test" fontWeight="bold">Menu</Link></Center>
      <Center p="5"><Link to="/test" fontWeight="bold">Roadmap</Link></Center>
      <Center p="5"><Link to="/test" fontWeight="bold">Contact</Link></Center>
    </Flex>
    <Flex
      display="none"
      sx={{
        '@media only screen and (max-width: 767px)': {
          display: 'block',
        },
      }}
      height="130px"
    >
      <Menu>
        <Center height="130px">
          <MenuButton
            as={IconButton}
            colorScheme="black"
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            mr={{ base: '2', md: '10' }}
            mt="2"
          />
        </Center>
        <MenuList>
          <MenuItem>
            <Link to="/test" fontWeight="bold">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/test" fontWeight="bold">About</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/test" fontWeight="bold">Menu</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/test" fontWeight="bold">Roadmap</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/test" fontWeight="bold">Contact</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
);

export default Header;
