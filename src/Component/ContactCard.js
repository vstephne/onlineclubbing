import React from 'react'
import {Box, Flex, Stack, Text} from "@chakra-ui/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'

function ContactCard() {
  return (
    <Flex justify="space-between" bg="peru" p="5"   w="50%" borderRadius="20">
            <Flex align="center" p="4">
              <Box mr="4">
              <FontAwesomeIcon size="3x" icon={faUser}/>
              </Box>
              
              <Stack>
              <Text>Varshaa Shree</Text>
                <Text>vshree@gmu.edu</Text>
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