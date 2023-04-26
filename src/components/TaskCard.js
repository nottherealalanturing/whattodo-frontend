import { Box, Flex, Text, Progress, IconButton } from '@chakra-ui/react';
import { FiEdit, FiTrash } from 'react-icons/fi';

const TaskCard = ({
  taskTitle,
  taskDescription,
  taskOwner,
  isAssigned,
  taskProgress,
}) => {
  return (
    <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
      <Flex align="center" justify="space-between">
        <Text fontWeight="bold">{taskTitle}</Text>
        {isAssigned && (
          <Flex>
            <IconButton
              aria-label="Edit Task"
              icon={<FiEdit />}
              size="sm"
              mr={2}
              variant="outline"
              colorScheme="blue"
              onClick={() => console.log(`Edit Task: ${taskTitle}`)}
            />
            <IconButton
              aria-label="Delete Task"
              icon={<FiTrash />}
              size="sm"
              variant="outline"
              colorScheme="red"
              onClick={() => console.log(`Delete Task: ${taskTitle}`)}
            />
          </Flex>
        )}
      </Flex>
      <Text color="gray.500" fontSize="sm" mt={2}>
        {taskDescription}
      </Text>
      <Text color="gray.500" fontSize="sm" mt={2}>
        Owner: {taskOwner}
      </Text>
      <Box mt={2}>
        <Progress value={taskProgress} colorScheme="blue" size="sm" />
      </Box>
    </Box>
  );
};

export default TaskCard;
