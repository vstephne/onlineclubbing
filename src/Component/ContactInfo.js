
import {  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function ContactInfo({ isOpen, onOpen, onClose, children,title }) {
  
  return (
     <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          bg="peru"
          color="black"
          w="20%"
          h="20%">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{children}</ModalBody> 
          </ModalContent>
        </Modal>
      
    </>
  )
}

export default ContactInfo


