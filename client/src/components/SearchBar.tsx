import React, { useState} from 'react';
import { Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('')
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term)
    }

    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input 
                type="text"
                placeholder="テストケース検索..."
                value={searchTerm}
                onChange={handleSearch}
                />
        </InputGroup>
    )

}

export default SearchBar;