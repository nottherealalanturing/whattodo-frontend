import {
  Box,
  Heading,
  Button,
  Input,
  VStack,
  Text,
  IconButton,
  Spacer,
  useToast,
} from '@chakra-ui/react';
import { SearchIcon, AddIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const FriendPage = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const toast = useToast();

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const response = await Axios.get('/api/pending-requests'); // Replace with your API endpoint for fetching pending requests
        setPendingRequests(response.data);
      } catch (error) {
        console.error('Failed to fetch pending requests:', error);
      }
    };

    fetchPendingRequests();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await Axios.get(`/api/search-users?q=${searchQuery}`); // Replace with your API endpoint for searching users
      setSearchResults(response.data);
    } catch (error) {
      console.error('Failed to search users:', error);
    }
  };

  // Accept friend request
  const handleAcceptFriendRequest = async (id) => {
    try {
      // Logic for accepting friend request
      // ...

      // Show success toast
      toast({
        title: 'Friend request accepted',
        description: 'You have accepted the friend request.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Failed to accept friend request:', error);
    }
  };

  // Reject friend request
  const handleRejectFriendRequest = async (id) => {
    try {
      // Logic for rejecting friend request
      // ...

      // Show error toast
      toast({
        title: 'Friend request rejected',
        description: 'You have rejected the friend request.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Failed to reject friend request:', error);
    }
  };

  return (
    <Box>
      {/* Pending Friend Requests */}
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Pending Friend Requests
        </Text>
        <VStack mt={4} spacing={2} align="stretch">
          {pendingRequests.map((request) => (
            <Box
              key={request.id}
              p={2}
              borderRadius="md"
              borderWidth={1}
              borderColor="gray.200"
            >
              <Text>{request.name}</Text>
              <Spacer />
              <IconButton
                icon={<CheckIcon />}
                colorScheme="green"
                aria-label="Accept Friend Request"
                size="sm"
                onClick={() => handleAcceptFriendRequest(request.id)}
              />
              <IconButton
                icon={<CloseIcon />}
                colorScheme="red"
                aria-label="Reject Friend Request"
                size="sm"
                onClick={() => handleRejectFriendRequest(request.id)}
              />
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Search Users */}
      <Box mt={8}>
        <Text fontSize="xl" fontWeight="bold">
          Search Users
        </Text>
        <Box mt={4}>
          <Input
            placeholder="Search for users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button mt={2} colorScheme="teal" onClick={handleSearch}>
            Search
          </Button>
        </Box>
        <VStack mt={4} spacing={2} align="stretch">
          {searchResults.map((user) => (
            <Box
              key={user.id}
              p={2}
              borderRadius="md"
              borderWidth={1}
              borderColor="gray.200"
            >
              <Text>{user.name}</Text>
              <Spacer />
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => handleSendFriendRequest(user.id)}
              >
                Add Friend
              </Button>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default FriendPage;
