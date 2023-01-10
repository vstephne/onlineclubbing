import { Button } from "@chakra-ui/button";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {Box, Flex, Heading, Stack, Text} from "@chakra-ui/layout"
import { FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftElement, useDisclosure } from '@chakra-ui/react'
import ContactCard from './ContactCard'
import React, {Component} from 'react';
import ContactInfo from "./ContactInfo";

const Contact=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
    return(
      <>
      <ContactInfo isOpen={isOpen} onOpen={onOpen} onClose={onClose} title={"Contact Information"}>
      {<>
      <Stack>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />  
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' />        
          </FormControl>
          <Button alignSelf="flex-end">Add Contact</Button>
      </Stack>
      </>}
      </ContactInfo>
      <Box>
        <Box>
          <Flex p="4" justify="center" align="center"></Flex>
          <Heading  as="h1" textTransform="uppercase">
            CONTACTS
          </Heading>
        </Box>

        <Box p="4">
          <Button  w="50%" bg="peru" color="white" colorScheme="purple"  fontSize="xl" fontWeight="bold" onClick={onOpen}>
            <AddIcon h="20px" w="20px" mr="4"/> Add Contact
          </Button>
        </Box>

        <Box >
            <InputGroup >
              <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
                p="10" mr ="4"
              />
              <Input p="10" mr="4" focusBorderColor="peru" type='text' placeholder='Search Contact....' />
            </InputGroup>
        </Box>

        <Box p="10">
          <ContactCard/>
        </Box>
      </Box>
      </>
    )
  
}

export default  Contact