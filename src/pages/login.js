import { Box, Flex, Text, Input, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const LoginPage = () => {
  return (
    <Box>
      {/* Header */}
      <Flex justifyContent="center" alignItems="center" height="100px">
        <Text fontSize="2xl">WhatToDo</Text> {/* Updated app name */}
      </Flex>

      {/* Login Form */}
      <Flex
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Box width="300px" p="4" boxShadow="md" borderRadius="md">
          <Text fontSize="xl" mb="4">
            Log in
          </Text>
          <Input placeholder="Email or Username" mb="2" />
          <Input placeholder="Password" mb="4" type="password" />
          <Button colorScheme="blue" size="md" mb="4" width="100%">
            Log In
          </Button>
          <Text>
            Don&apos;t have an account?{' '}
            <NextLink href="/signup">
              {' '}
              {/* Added routing to signup page */}
              <Link color="blue.500">Sign up</Link>
            </NextLink>
          </Text>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex justifyContent="center" alignItems="center" height="100px">
        <Text>Copyright &copy; 2023 WhatToDo. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default LoginPage;
