import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.200" py={4} px={6} mt="auto">
      <Flex align="center">
        <Spacer />
        <Text color="gray.600" fontSize="sm">
          &copy; 2023 WhatToDo. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
