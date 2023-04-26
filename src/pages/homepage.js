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
//import { useAuth } from '../hooks/useAuth';

const HomePage = () => {
  //const { user, logout } = useAuth();
  const { user, logout } = { user: 'assad', logout: () => {} };

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
      <Flex mt={4} justify="space-between">
        <Box w="full" pr={4}>
          <Heading as="h2" size="md" mb={2}>
            My Groups
          </Heading>
          {/* Render list of group cards */}
          {/* Example usage of GroupCard component */}
          <GroupCard
            groupName="Group 1"
            groupDescription="Group 1 description"
            groupOwner="User 1"
            isOwner={true}
          />
        </Box>
        <Box w="full" pl={4}>
          <Heading as="h2" size="md" mb={2}>
            My Tasks
          </Heading>
          {/* Render list of task cards */}
          {/* Example usage of TaskCard component */}
          <TaskCard
            taskTitle="Task 1"
            taskDescription="Task 1 description"
            taskOwner="User 1"
            isAssigned={true}
            taskProgress={50}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
