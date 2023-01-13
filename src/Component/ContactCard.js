import React from 'react'
import {Box, Flex, Stack, Text} from "@chakra-ui/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'

const ContactCard=({contact}) => {
  return (
    <Flex justify="space-between" bg="peru" p="3" margin="6"  w="50%" h="30%" borderRadius="20">
            <Flex align="center" p="3" margin="15">
              <Box mr="4">
              <FontAwesomeIcon size="3x" icon={faUser}/>
              </Box>
              
              <Stack>
              <Text>{contact.name}</Text>
                <Text>{contact.email}</Text>
              </Stack>
             </Flex>

             <Flex align="center" >
              <Box mr="4">
                <FontAwesomeIcon size="2x" icon={faEdit}/>
             </Box>
             <Box color="maroon">
              <FontAwesomeIcon size="2x" icon={faTrash}/>
             </Box>
             </Flex>
          </Flex>
  )
}

export default ContactCard