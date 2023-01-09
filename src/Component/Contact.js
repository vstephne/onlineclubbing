import { Button } from "@chakra-ui/button";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {Box, Flex, Heading, Stack, Text} from "@chakra-ui/layout"
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import ContactCard from './ContactCard'
import React, {Component} from 'react';

const Contact=()=>{
    return(
      <Box>
        <Box>
          <Flex p="4" justify="center" align="center"></Flex>
          <Heading  as="h1" textTransform="uppercase">
            CONTACTS
          </Heading>
        </Box>

        <Box p="4">
          <Button  w="50%" bg="peru" color="white" colorScheme="purple"  fontSize="xl" fontWeight="bold">
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
    )
  
}

export default  Contact