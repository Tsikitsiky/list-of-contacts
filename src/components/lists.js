import { Box, Divider } from '@chakra-ui/layout'
import { useState } from 'react'
import Contact from './contact'

const ContactsList = ({ data }) => {
  const [checkedContactsIds, setCheckedContactsIds] = useState([])
  const handleClick = (id) => {
    const isAlreadyChecked = checkedContactsIds.includes(id)
    const newCheckedContactsIds = isAlreadyChecked
      ? checkedContactsIds.filter((item) => item !== id)
      : [...checkedContactsIds, id]
    console.log(newCheckedContactsIds.join())
    setCheckedContactsIds(newCheckedContactsIds)
  }
  return (
    <Box backgroundColor='gray.100'>
      {data.map((person) => (
        <Box key={person.id}>
          <Contact
            person={person}
            onClick={() => handleClick(person.id)}
            isChecked={checkedContactsIds.includes(person.id)}
          />
          <Divider orientation='horizontal' />
        </Box>
      ))} 
    </Box>
  )
}

export default ContactsList
