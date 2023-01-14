import { Button } from "@chakra-ui/button";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {Box, Flex, Heading, Stack, Text} from "@chakra-ui/layout"
import { FormControl, FormLabel, Input, InputGroup, InputLeftElement, useDisclosure } from '@chakra-ui/react'
import ContactCard from './ContactCard'
import React, {Component, useState} from 'react';
import ContactInfo from "./ContactInfo";
import {v4 as uuidv4 } from 'uuid';
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils/click/getMouseEventOptions";

const Contact=(contact)=>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpenEdit, onOpen:onOpenEdit, onClose:onCloseEdit } = useDisclosure();
  const [contacts,setContacts] = useState([
    {id:100,name:'Test',email:'test@gmail.com'}
  ]);
  console.log(contacts);
  const updateContact=(email,name,id)=>
  {
    setContacts(prev=>[...contacts.filter((contact)=>contact.id!==id),{email,name,id}]);
  }
  
  const addNewContact=(email,name)=>{
    if(contacts.findIndex((contact)=>contact.email===email)===-1)
    {
    setContacts([...contacts,{email,name,id:uuidv4()}]);
    }
  }

  const [email,setEmail]=useState(contact.email);
  const [name,setName]=useState(contact.name);
  
  const onSubmit=(x)=>{
    if(x==="addContact")
    {
     
     addNewContact(email,name); 
    onClose();
    }
    else
    {
      updateContact(email,name,contact.id);
      onClose();
    }
  }

  const addContact=()=>{
    onSubmit("addContact")
   
  }

  const update=(x)=>{
    onSubmit("update")
   
  }

  const deleteContact=(id)=>
  {
    setContacts(prev=>[...contacts.filter((contact)=>contact.id!==id)]); 
  }


  const [contactId,setContactId]=useState();
  const getContactId=(id)=>{
    setContactId(id);
  };

  let selectContact=contacts.find((contact)=>contact.id===contactId);

    return(
      <>
      <ContactInfo isOpen={isOpen} onOpen={onOpen} onClose={onClose} title={"Contact Information"}>
        <Stack >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} type='email' onChange={(e)=>setEmail(e.target.value)} />  
            </FormControl>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input value={name}  type='text'  onChange={(e)=>setName(e.target.value)}  />        
            </FormControl>
            <Button alignSelf="flex-end" bg="Peru" mb="25" onClick={addContact}>Add Contact</Button>
        </Stack>
      </ContactInfo>
      <ContactInfo updateContact={updateContact} contact={selectContact} isOpen={isOpenEdit} onOpen={onOpenEdit} onClose={onCloseEdit} title={"Edit contact Information"}>
        <Stack >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} type='email' onChange={(e)=>setEmail(e.target.value)} />  
            </FormControl>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e)=>setName(e.target.value)} type='text' />        
            </FormControl>
            {contact ? (
            <Button alignSelf="flex-end" bg="Peru" mb="25" onClick={update}>update contact</Button>
            ):(
            <Button alignSelf="flex-end" bg="Peru" mb="25" onClick={onSubmit}>Add Contact</Button>
    )}
        </Stack>
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
          {contacts.map((contact,i)=>
          (<ContactCard 
          getContactId={getContactId}
          deleteContact={deleteContact} 
          onOpen={onOpenEdit} 
          contact={contact}
          key={contact.id}>
          </ContactCard>))}
        </Box>
      </Box>
      </>
    )
  
}

export default  Contact