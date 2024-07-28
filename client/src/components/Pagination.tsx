import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: ( page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange}) => {
    return (
        <Flex justifyContent="center" alignItems="center" mt={6}>
            <Button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage -1)}
                mr={4}
                >Previous
            </Button>
            <Text>
                Page {currentPage} of {totalPages}
            </Text>
            <Button 
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                ml={4}
            >
                Next
            </Button>
        </Flex>
    )
}

export default Pagination;