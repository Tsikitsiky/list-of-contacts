import { Checkbox } from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { Box, HStack, Stack, Text } from '@chakra-ui/layout'

const Contact = ({ person, onClick, isChecked }) => {
  return (
    <>
      <HStack
        paddingBlock='10px'
        justifyContent='space-between'
        onClick={onClick}>
        <Stack direction='row' alignItems='center'>
          <Box width='50px' height='50px'>
            {person.avatar ? (
              <Image
                src={person.avatar}
                alt={person.first_name}
                borderRadius='full'
                border='3px'
                borderColor='blackAlpha.100'
                backgroundColor='white'
              />
            ) : (
              <Box
                width='inherit'
                height='inherit'
                borderRadius='full'
                border='3px'
                borderColor='blackAlpha.100'
                backgroundColor='white'
                display='flex'
                alignItems='center'
                justifyContent='center'>
                <Text>
                  {person.first_name.substring(0, 1)}
                  {person.last_name.substring(0, 1)}
                </Text>
              </Box>
            )}
          </Box>
          <Text>
            {person.first_name} {person.last_name}
          </Text>
        </Stack>
        <Checkbox checked={isChecked}></Checkbox>
      </HStack>
    </>
  )
}

export default Contact
