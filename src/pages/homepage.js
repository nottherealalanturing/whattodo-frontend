import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  Avatar,
  IconButton,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import GroupCard from '../components/GroupCard';
import TaskCard from '../components/TaskCard';
import { useAuth } from '../hooks/useAuth'; // Custom hook for authentication

const Home = () => {
  const { user, logout } = useAuth(); // Fetching user details and logout function from authentication hook

  return (
    <Box p={4}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg">
          Welcome, {user.username}!
        </Heading>
        <IconButton
          aria-label="Logout"
          icon={<FiPlus />}
          variant="outline"
          colorScheme="blue"
          onClick={logout}
        />
      </Flex>
    </Box>
  );
};

export default Home;
