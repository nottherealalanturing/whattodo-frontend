import { Box, Flex, Text, Input, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link'; // Import Next.js Link component for routing

const SignupPage = () => {
  return (
    <Box>
      {/* Header */}
      <Flex justifyContent="center" alignItems="center" height="100px">
        <Text fontSize="2xl">WhatToDo</Text> {/* Updated app name */}
      </Flex>

      {/* Signup Form */}
      <Flex
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Box width="300px" p="4" boxShadow="md" borderRadius="md">
          <Text fontSize="xl" mb="4">
            Sign up
          </Text>
          <Input placeholder="Username" mb="2" />
          <Input placeholder="Email" mb="2" />
          <Input placeholder="Password" mb="2" type="password" />
          <Input placeholder="Confirm Password" mb="4" type="password" />
          <Button colorScheme="blue" size="md" mb="4" width="100%">
            Sign Up
          </Button>
          <Text>
            Already have an account?{' '}
            <NextLink href="/login">
              {' '}
              {/* Added routing to login page */}
              <Link color="blue.500">Log in</Link>
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

export default SignupPage;
