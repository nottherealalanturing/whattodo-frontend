import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import TaskCard from '../components/TaskCard';
//import { useAuth } from "../hooks";

const TaskPage = () => {
  //const { user } = useAuth();
  const { user } = { test: 'assad' };

  const tasks = [
    {
      id: 1,
      taskName: 'Task 1',
      taskDescription: 'Description of Task 1',
      assignedTo: 'User 1',
      isOwner: true,
    },
    {
      id: 2,
      taskName: 'Task 2',
      taskDescription: 'Description of Task 2',
      assignedTo: 'User 2',
      isOwner: false,
    },
  ];

  return (
    <Box mt={8}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg">
          Tasks
        </Heading>
        {user && (
          <Button
            colorScheme="blue"
            size="sm"
            onClick={() => console.log('Create Task')} // Replace with actual create task logic
          >
            Create Task
          </Button>
        )}
      </Flex>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          taskName={task.taskName}
          taskDescription={task.taskDescription}
          assignedTo={task.assignedTo}
          isOwner={task.isOwner}
        />
      ))}
      {tasks.length === 0 && (
        <Text mt={4} color="gray.500">
          No tasks found.
        </Text>
      )}
    </Box>
  );
};

export default TaskPage;
