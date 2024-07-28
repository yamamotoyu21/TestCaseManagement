import React, { useState } from 'react'
import { Box, Flex, Text, Badge, Collapse } from '@chakra-ui/react'

interface TestCase {
    _id: string,
    title: string,
    precondition: string,  // 'preconditon' を 'precondition' に修正
    steps: string,
    expectedResult: string,
    status: 'todo' | 'pass' | 'fail' | 'skip',
    lastUpdated: string  // 'lastUpdate' を 'lastUpdated' に修正
}

interface TestCaseRowProps {
    testCase: TestCase
}

const TestCaseRow: React.FC<TestCaseRowProps> = ({ testCase }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => setIsOpen(!isOpen);

    const statusColors = {
        todo: 'yellow',
        pass: 'green',
        fail: 'red',
        skip: 'gray'
    }

    return (
        <Box borderWidth={1} borderRadius="md" p={4}>
            <Flex justifyContent="space-between" alignItems="center" onClick={toggleOpen} cursor="pointer">
                <Text fontWeight="bold">{testCase.title}</Text>
                <Flex alignItems="center">
                    <Badge colorScheme={statusColors[testCase.status]} mr={4}>
                        {testCase.status.toUpperCase()}
                    </Badge>
                    <Text fontSize="sm" color="gray.500">{testCase.lastUpdated}</Text>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Box mt={4}>
                    <Text fontWeight="bold">Precondition:</Text>
                    <Text>{testCase.precondition}</Text>
                    <Text fontWeight="bold" mt={2}>Steps:</Text>
                    <Text>{testCase.steps}</Text>
                    <Text fontWeight="bold" mt={2}>Expected Result:</Text>
                    <Text>{testCase.expectedResult}</Text>
                </Box>
            </Collapse>
        </Box>
    )
}

export default TestCaseRow;