import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import GroupCard from '../components/GroupCard';
//import { useAuth } from '../hooks';

const GroupPage = () => {
  //const { user } = useAuth();
  const { user } = { test: 'assad' };

  const groups = [
    {
      id: 1,
      groupName: 'Group 1',
      groupDescription: 'Description of Group 1',
      groupOwner: 'User 1',
      isOwner: true,
    },
    {
      id: 2,
      groupName: 'Group 2',
      groupDescription: 'Description of Group 2',
      groupOwner: 'User 2',
      isOwner: false,
    },
  ];

  return (
    <Box mt={8}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg">
          Groups
        </Heading>
        {user && (
          <Button
            colorScheme="blue"
            size="sm"
            onClick={() => console.log('Create Group')} // Replace with actual create group logic
          >
            Create Group
          </Button>
        )}
      </Flex>
      {groups.map((group) => (
        <GroupCard
          key={group.id}
          groupName={group.groupName}
          groupDescription={group.groupDescription}
          groupOwner={group.groupOwner}
          isOwner={group.isOwner}
        />
      ))}
      {groups.length === 0 && (
        <Text mt={4} color="gray.500">
          No groups found.
        </Text>
      )}
    </Box>
  );
};

export default GroupPage;
