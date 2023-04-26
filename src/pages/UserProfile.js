import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth'; // Import the useAuth hook for authentication
import NextLink from 'next/link'; // Import Next.js Link for client-side navigation

const UserProfile = () => {
  //const { user, logout } = useAuth(); // Get the authenticated user and logout function from useAuth hook
  const { user, logout } = {
    user: { name: 'assad', email: 'asdas' },
    logout: useAuth(),
  };
  const handleLogout = () => {
    // Implement logout logic, e.g., call API to logout user
    logout(); // Call logout function from useAuth hook to log out user
  };

  return (
    <Box mt={8}>
      <Heading as="h1" size="lg">
        User Profile
      </Heading>
      <Box mt={4}>
        <Text>
          <strong>Name:</strong> {user.name}
        </Text>
        <Text>
          <strong>Email:</strong> {user.email}
        </Text>
        {/* Add more profile information fields, e.g., username, profile picture, etc. */}
        <Box mt={4}>
          {/* Button to edit profile */}
          <NextLink href="/edit-profile" passHref>
            <Link>
              <Button colorScheme="blue" mr={4}>
                Edit Profile
              </Button>
            </Link>
          </NextLink>
          {/* Button to change password */}
          <NextLink href="/change-password" passHref>
            <Link>
              <Button colorScheme="blue">Change Password</Button>
            </Link>
          </NextLink>
        </Box>
      </Box>
      <Button mt={4} colorScheme="red" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default UserProfile;
