import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ value, handleChange }) => {
  return (
    <InputGroup size='lg'>
      <InputLeftElement
        pointerEvents='none'
        children={<FaSearch color='grey.500' />}
      />
      <Input value={value} onChange={handleChange} />
    </InputGroup>
  )
}

export default SearchBar
