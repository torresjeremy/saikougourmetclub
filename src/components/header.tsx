import React from 'react';
import Logo from 'images/Logo.png';
import {
  Flex, Center, Spacer, Image, Menu, MenuButton, IconButton, MenuList, MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
      fontWeight="bold"
    >
      <Center p="5" fontWeight="bold"><Link to="/">Home</Link></Center>
      <Center p="5"><Link to="/about">About</Link></Center>
      <Center p="5"><Link to="/menu">Menu</Link></Center>
      <Center p="5"><Link to="/roadmap">Roadmap</Link></Center>
      <Center p="5"><Link to="/test">Contact</Link></Center>
      <Center p="5" pr="0"><Link to="/test"><FaTwitter size={20} /></Link></Center>
      <Center p="5"><Link to="/test"><FaDiscord size={20} /></Link></Center>
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
        <MenuList bg="yellow.150" borderColor="black">
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">About</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/menu">Menu</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/roadmap">Roadmap</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/test">Contact</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/test"><FaTwitter size={20} /></Link>
          </MenuItem>
          <MenuItem>
            <Link to="/test"><FaDiscord size={20} /></Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
);

export default Header;
