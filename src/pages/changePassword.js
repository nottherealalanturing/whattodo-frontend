import {
  Box,
  Heading,
  Button,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const ChangePasswordPage = () => {
  // Implement logic to change user password

  const handleChangePassword = () => {
    // Implement logic to change user password
  };

  return (
    <Box mt={8}>
      <Heading as="h1" size="lg">
        Change Password
      </Heading>
      <Box mt={4}>
        <FormControl id="currentPassword" mb={4}>
          <FormLabel>Current Password</FormLabel>
          <Input type="password" placeholder="Enter current password" />
        </FormControl>
        <FormControl id="newPassword" mb={4}>
          <FormLabel>New Password</FormLabel>
          <Input type="password" placeholder="Enter new password" />
        </FormControl>
        <FormControl id="confirmNewPassword" mb={4}>
          <FormLabel>Confirm New Password</FormLabel>
          <Input type="password" placeholder="Confirm new password" />
        </FormControl>
        <Button colorScheme="blue" onClick={handleChangePassword}>
          Change Password
        </Button>
      </Box>
    </Box>
  );
};

export default ChangePasswordPage;
