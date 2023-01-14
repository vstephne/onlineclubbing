import { Button } from "@chakra-ui/button";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {Box, Flex, Heading, Stack} from "@chakra-ui/layout"
import { FormControl, FormLabel, Input, InputGroup, InputLeftElement, useDisclosure } from '@chakra-ui/react'
import ContactCard from './ContactCard'
import React, {useState} from 'react';
import ContactInfo from "./ContactInfo";
import {v4 as uuidv4 } from 'uuid';
// import { getMouseEventOptions } from "@testing-library/user-event/dist/utils/click/getMouseEventOptions";



const Contact=(contact)=>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpenEdit, onOpen:onOpenEdit, onClose:onCloseEdit } = useDisclosure();
  const [contacts,setContacts] = useState([
    {name:'Test',email:'test@gmail.com',id:"1"},
  ]);

  
  const [contactId,setContactId]=useState();
  const addNewContact=(email,name)=>{
    if(contacts.findIndex((contact)=>contact.email===email)===-1 && email!=="")
    {
    setContacts([...contacts,{email,name,id:uuidv4()}]);
    }
  };

 
  const getContactId=(id)=>{
    setContactId(id);
  };

  console.log(contacts);
  console.log(contactId);

  const updateContact=(email,name,id)=>
  {
    setContacts(prev=>[...contacts.filter((contact)=>contact.id!==id),{email,name,id}]);
  };
  
 

  const [email,setEmail]=useState(contact ? contact.email : "");
  const [name,setName]=useState(contact ? contact.name : "");
  const onSubmit=()=>{
    if(contact)
    {
     updateContact(email,name,contact.id);
     onClose();
    }
    else
    {
    addNewContact(email,name); 
    onClose();
    }
  }

  const deleteContact=(id)=>
  {
    setContacts(prev=>[...contacts.filter((contact)=>contact.id!==id)]); 
  };

  let selectContact=contacts.find((contact)=>contact.id===contactId);

  console.log(selectContact);
  const [searchData,setSearchData] = useState("");

  let searchContacts = contacts.filter((contact)=>contact.name.includes(searchData));

    return(
      <>
      <ContactInfo isOpen={isOpen} onOpen={onOpen} onClose={onClose} title={"Add new Contact"}>
        <br/>
        <Stack >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} type='email' onChange={(e)=>setEmail(e.target.value)} />  
            </FormControl>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input value={name}  type='text'  onChange={(e)=>setName(e.target.value)}  />        
            </FormControl>
            <Button alignSelf="flex-end" bg="Peru" mb="25" onClick={onSubmit}>Add Contact</Button>
        </Stack>
      </ContactInfo>
      <ContactInfo updateContact={updateContact} contact={selectContact} isOpen={isOpenEdit} onOpen={onOpenEdit} onClose={onCloseEdit} title={"Edit contact Information"}>
        <br/>
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
            <Button alignSelf="flex-end" bg="Peru" mb="25" onClick={onSubmit}>update contact</Button>
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
              <Input p="10" mr="4" focusBorderColor="peru" type='text' placeholder='Search Contact....'
              onChange={(e)=>setSearchData(e.target.value)} />
            </InputGroup>
        </Box>

        <Box p="10">
          {searchContacts.map((contact,i)=>
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