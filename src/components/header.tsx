import React from 'react';
import Logo from 'images/logo.png';
import {
  Flex, Center, Spacer, Image, Menu, MenuButton, IconButton, MenuList, MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => (
  <Flex width="100%" height="130px" bg="yellow.150">
    <Center maxHeight="130px" ml={{ base: '12px', md: '40px' }}>
      <Link to="/">
        <Image src={Logo} objectFit="cover" alt="logo" width={{ base: '100px', md: 'auto' }} />
      </Link>
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
      mr="45px"
    >
      <Center p="5" fontWeight="bold"><NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Home</NavLink></Center>
      <Center p="5"><NavLink to="/about" className={({ isActive }) => (isActive ? 'activeLink' : '')}>About</NavLink></Center>
      <Center p="5"><NavLink to="/menu" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Menu</NavLink></Center>
      <Center p="5"><NavLink to="/roadmap" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Roadmap</NavLink></Center>
      <Center p="5"><NavLink to="/contact" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Contact</NavLink></Center>
      <Center p="5" pr="0">
        <a href="https://twitter.com/SaikouGC" target="_blank" rel="noreferrer">
          <FaTwitter size={20} />
        </a>
      </Center>
      <Center pl="5">
        <a href="https://discord.gg/jgEKBrFKg8" target="_blank" rel="noreferrer">
          <FaDiscord size={20} />
        </a>
      </Center>
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
            mr={{ base: '12px', md: '40px' }}
            mt="2"
          />
        </Center>
        <MenuList bg="yellow.150" borderColor="black">
          <MenuItem>
            <Center w="100%"><Link to="/">Home</Link></Center>
          </MenuItem>
          <MenuItem>
            <Center w="100%"><Link to="/about">About</Link></Center>
          </MenuItem>
          <MenuItem>
            <Center w="100%"><Link to="/menu">Menu</Link></Center>
          </MenuItem>
          <MenuItem>
            <Center w="100%"><Link to="/roadmap">Roadmap</Link></Center>
          </MenuItem>
          <MenuItem>
            <Center w="100%"><Link to="/contact">Contact</Link></Center>
          </MenuItem>
          <MenuItem>
            <Center w="100%">
              <a href="https://twitter.com/SaikouGC" target="_blank" rel="noreferrer">
                <FaTwitter size={20} />
              </a>
            </Center>
          </MenuItem>
          <MenuItem>
            <Center w="100%">
              <a href="https://discord.gg/jgEKBrFKg8" target="_blank" rel="noreferrer">
                <FaDiscord size={20} />
              </a>
            </Center>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
);

export default Header;
