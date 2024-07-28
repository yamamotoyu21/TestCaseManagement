import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

interface TestCaseFormProps {
  isOpen: boolean;
  onClose: () => void;
  onTestCaseAdded: () => void;
}

interface TestCaseData {
  title: string;
  precondition: string;
  steps: string;
  expectedResult: string;
  status: 'todo' | 'pass' | 'fail' | 'skip';
}

const TestCaseForm: React.FC<TestCaseFormProps> = ({ isOpen, onClose, onTestCaseAdded }) => {
  const [formData, setFormData] = useState<TestCaseData>({
    title: '',
    precondition: '',
    steps: '',
    expectedResult: '',
    status: 'todo',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:5001/api/testcases', formData);
      onTestCaseAdded();
      onClose();
      toast({
        title: 'Test case added.',
        description: "We've added your new test case.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error adding test case:', error);
      toast({
        title: 'Error.',
        description: 'Failed to add the test case. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Test Case</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input name="title" value={formData.title} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Precondition</FormLabel>
                <Textarea name="precondition" value={formData.precondition} onChange={handleChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Steps</FormLabel>
                <Textarea name="steps" value={formData.steps} onChange={handleChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Expected Result</FormLabel>
                <Textarea name="expectedResult" value={formData.expectedResult} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select name="status" value={formData.status} onChange={handleChange}>
                  <option value="todo">Todo</option>
                  <option value="pass">Pass</option>
                  <option value="fail">Fail</option>
                  <option value="skip">Skip</option>
                </Select>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit" isLoading={isSubmitting}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default TestCaseForm;