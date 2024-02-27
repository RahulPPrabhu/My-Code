import { Box, Heading, Select, Text, Link, Divider, Button, useToast, Avatar, AvatarBadge} from '@chakra-ui/react'
import React from 'react'
import Laptop from '../../images/Laptop.png'
import {CloseIcon, EditIcon} from '@chakra-ui/icons'

export default function Cart() {

    const btnStyle = ({
        cursor: 'pointer'
    })

    const toast = useToast()

    const avatarStyle = ({
        ml: '90%',
        mb: '10px',
        cursor: 'pointer'
    })

  return (
    <>
        <Heading mb="10px">Cart <EditIcon ml='8px'/></Heading>
        <Avatar bg='blue' name='RP' sx={avatarStyle}>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
        <Box bg='grey' display='grid' gridTemplateColumns='1fr 1fr' border='1px solid blue'>
            <Box>
                <img src={Laptop} alt='Laptop' width='50%'/>
            </Box>
            <Box bg="white" m='5px'>
                <CloseIcon ml='90%' sx={btnStyle}/>
                <Heading fontSize='2xl'>Shopping Cart (1 item)</Heading>
                <Text mt='2%' mb='5px'>Laptop</Text>
                <Select placeholder='Qty' w='12%' mb='5px'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </Select>
                <Text>Price: $999</Text>
                <Link color='teal.500' fontWeight='500'>Remove from Cart</Link>
                <Divider orientation='horizontal'/>
                <Text color='teal' fontSize='2xl' fontWeight='500' textAlign='left'>Sub-Total: $999</Text>
                <Button onClick={() => toast({title: 'Thank You', status: 'success', isClosable: true, duration: 9000, position: 'top'})}>Checkout</Button>
            </Box>
            
        </Box>
    </>
  )
}
