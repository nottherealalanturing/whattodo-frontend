import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const CreateGroupPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <Box mt={8}>
      <Heading as="h1" size="lg">
        Create Group
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="groupName" mt={4} isInvalid={errors.groupName}>
          <FormLabel>Group Name</FormLabel>
          <Input
            type="text"
            {...register('groupName', { required: 'Group Name is required' })}
          />
        </FormControl>
        {/* Add more form fields for group details, e.g., group description, members, etc. */}
        <Button mt={4} colorScheme="blue" type="submit">
          Create Group
        </Button>
      </form>
    </Box>
  );
};

export default CreateGroupPage;
