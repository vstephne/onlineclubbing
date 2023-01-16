import {Button} from "@chakra-ui/button";
import {Image} from "@chakra-ui/image";
import {Heading} from "@chakra-ui/layout";
import {AddIcon, SearchIcon } from "@chakra-ui/icons";
import {Flex} from "@chakra-ui/layout"; 
import {Box} from "@chakra-ui/layout";
import React from "react";
import { FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftElement, useDisclosure } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { Stack, Text} from "@chakra-ui/layout"
const Contacttest = () => {
    return (
    <Box>
        <Flex p ="4" justify="center" align="center">
             <Image src="/contact.png" w="150px" h="100px"/> 
            <Heading as="h1" testTransformation="uppercase">
            CONTACTS
            </Heading>
        </Flex> 

      <Box p="4" align="center">
        <Button 
            bg="purple" 
            w="70%" 
            color="white"
            fontSize="xl" 
            fontWeight="bold"
            colorScheme="purple"
            >
            <AddIcon h="20px" w="20px" mr="4"/> Add Contact 

        </Button>
      </Box>
    <Box p="4" justify="Center">
        <InputGroup >
        <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
                p="10" mr ="4"
              />
              <Input 
              p="10" 
              mr="4" 
              focusBorderColor="purple" 
              type='text' 
              placeholder='      Search Contact....' />
        </InputGroup>
    </Box>
   <Box p="4">
    <Flex justify="space-between" bg="lavender" p="4" borderRadius="xl">
       <Flex align ="center">
        <Box mr="4">
        <FontAwesomeIcon size = "2x" icon={faUser} mr="4"/>
        </Box>
      
      <Stack>
        <Text>Deeksha</Text>
        <Text>dgnagadh@gmu.edu</Text>
      </Stack>
     </Flex> 
     <Flex>
      <FontAwesomeIcon size = "2x"icon={faEdit} />
      <FontAwesomeIcon size = "2x"icon={faTrash} />
      </Flex>
      </Flex>
   </Box>   
</Box>
    );
};

export default Contacttest
