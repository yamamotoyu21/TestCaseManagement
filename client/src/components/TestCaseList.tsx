// import React, { useState, useEffect, useCallback } from 'react'
// import axios from 'axios'
// import { Box, VStack, Heading, Button, useDisclosure, useToast, Text } from '@chakra-ui/react'
// import TestCaseForm from './TestCaseForm'
// import TestCaseRow from './TestCaseRow'
// import SearchBar from './SearchBar'
// import Pagination from './Pagination'

// interface TestCase {
//     _id: string
//     title: string
//     precondition: string
//     steps: string
//     expectedResult: string
//     status: 'todo' | 'pass' | 'fail' | 'skip'
//     lastUpdated: string
// }

// const TestCaseList: React.FC = () => {
//     useEffect(() => {
//         console.log('TestCaseList component mounted');
//     }, []);

//     const [testCases, setTestCases] = useState<TestCase[]>([]);
//     const [currentPage, setCurrentPage] = useState(1)
//     const [totalPages, setTotalPages] = useState(1)
//     const [searchTerm, setSearchTerm] = useState('')
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const toast = useToast()
//     const [error, setError] = useState<string | null>(null)

//     console.log('TestCaseList component rendering');
    
//     const fetchTestCases = useCallback(async () => {
//         try {
//             console.log('Fetching test cases...') // デバッグ用ログ
//             const response = await axios.get<{testCases: TestCase[], totalPages: number}> (
//              `http://localhost:5001/api/testcases?page=${currentPage}&search=${searchTerm}`
//             );
//             console.log('Response:', response.data) // デバッグ用ログ
//             setTestCases(response.data.testCases)
//             setTotalPages(response.data.totalPages)
//             setError(null)
//         } catch (error) {
//             console.error('Error fetching test cases:', error)
//             setError('Failed to fetch test cases. Please check the console for more details.')
//             toast({
//                 title: 'Error fetching test cases',
//                 description: 'Please try again later.',
//                 status: 'error',
//                 duration: 5000,
//                 isClosable: true,
//             })
//         }
//     }, [currentPage, searchTerm, toast])

//     useEffect(() => {
//         fetchTestCases();
//     }, [fetchTestCases])

//     const handleSearch = (term: string) => {
//         setSearchTerm(term)
//         setCurrentPage(1);
//     }

//     const handlePageChange = (page: number) => {
//         setCurrentPage(page)
//     }

//     const handleAddTestCase = () => {
//         onOpen();
//     }

//     const handleTestCaseAdded = () => {
//         fetchTestCases();
//         onClose();
//     }

//     return (
//         <Box p={8}>
//             <Heading mb={6}>Test Case Management</Heading>
//             <Button colorScheme="blue" onClick={handleAddTestCase} mb={4}>
//                 Add New Test Case
//             </Button>
//             <SearchBar onSearch={handleSearch} />
//             {error && <Text color="red.500">{error}</Text>}
//             {testCases.length === 0 ? (
//                 <Text>No test cases found. {searchTerm ? 'Try clearing your search.' : ''}</Text>
//             ) : (
//                 <VStack spacing={4} align="stretch" mt={4}>
//                     {testCases.map((testCase) => (
//                     <TestCaseRow key={testCase._id} testCase={testCase} />
//                     ))}
//                 </VStack>
//             )}
//             <Pagination 
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//             />
//             <TestCaseForm isOpen={isOpen} onClose={onClose} onTestCaseAdded={handleTestCaseAdded} />
//         </Box>
//     )
// }

// export default TestCaseList;

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TestCaseList: React.FC = () => {
  console.log('TestCaseList component rendering');
  return (
    <Box>
      <Text>Test Case List</Text>
    </Box>
  );
};

export default TestCaseList;