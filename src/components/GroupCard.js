import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { FiEdit, FiTrash } from 'react-icons/fi';

const GroupCard = ({ groupName, groupDescription, groupOwner, isOwner }) => {
  return (
    <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
      <Flex align="center" justify="space-between">
        <Text fontWeight="bold">{groupName}</Text>
        {isOwner && (
          <Flex>
            <IconButton
              aria-label="Edit Group"
              icon={<FiEdit />}
              size="sm"
              mr={2}
              variant="outline"
              colorScheme="blue"
              onClick={() => console.log(`Edit Group: ${groupName}`)}
            />
            <IconButton
              aria-label="Delete Group"
              icon={<FiTrash />}
              size="sm"
              variant="outline"
              colorScheme="red"
              onClick={() => console.log(`Delete Group: ${groupName}`)}
            />
          </Flex>
        )}
      </Flex>
      <Text color="gray.500" fontSize="sm" mt={2}>
        {groupDescription}
      </Text>
      <Text color="gray.500" fontSize="sm" mt={2}>
        Owner: {groupOwner}
      </Text>
    </Box>
  );
};

export default GroupCard;
