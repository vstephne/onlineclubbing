
import {  Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function ContactInfo({ isOpen, onOpen, onClose, children, title }) {
  return (
     <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          onOpen = {onOpen}
          alignSelf="center"
          >
          <ModalOverlay />
          
          <ModalContent bg="#f7f4f4" opacity=".5" w="25%" h="25%" >
           
             <ModalCloseButton bg="Peru" alignSelf="flex-end"/>
            <ModalHeader>{title}</ModalHeader>
            
            
            <ModalBody pd="4">{children}</ModalBody> 
           
          </ModalContent>
        </Modal>
      
    </>
  )
}

export default ContactInfo


