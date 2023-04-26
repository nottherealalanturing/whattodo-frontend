import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'next/link';
// import { useAuth } from "../hooks/useAuth";

const Header = () => {
  //const { user, logout } = useAuth();
  const { user, logout } = {};
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="teal.500" py={4} px={6}>
      <Flex align="center">
        <Heading as="h1" size="md" color="white">
          WhatToDo
        </Heading>
        <Spacer />
        <Flex align="center">
          {user ? (
            <>
              <Button variant="ghost" onClick={toggleColorMode} mr={4}>
                {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
              <Link as={RouterLink} href="/profile" mr={4}>
                {user.name}
              </Link>
              <Button onClick={logout} colorScheme="whiteAlpha">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link as={RouterLink} href="/login" mr={4}>
                Login
              </Link>
              <Link as={RouterLink} href="/signup">
                Signup
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
