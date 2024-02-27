import React from 'react'
import {Modal, ModalBody, ModalCloseButton, ModalOverlay, ModalHeader,ModalContent, Button, ModalFooter, useDisclosure} from '@chakra-ui/react'

export default function Message({theme}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} colorScheme='purple'>Read More</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={theme ? 'black': 'white'}>
          <ModalHeader>Update..</ModalHeader>
          <ModalCloseButton />
          <ModalBody>We will be shortly adding more movies and series. So Stay Tuned</ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
