import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const CreateTaskPage = () => {
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
        Create Task
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="taskName" mt={4} isInvalid={errors.taskName}>
          <FormLabel>Task Name</FormLabel>
          <Input
            type="text"
            {...register('taskName', { required: 'Task Name is required' })}
          />
        </FormControl>
        {/* Add more form fields for task details, e.g., task description, assigned users, etc. */}
        <Button mt={4} colorScheme="blue" type="submit">
          Create Task
        </Button>
      </form>
    </Box>
  );
};

export default CreateTaskPage;
