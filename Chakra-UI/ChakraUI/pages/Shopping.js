import { Heading, Text, Grid, GridItem, Box, Button, useToast, Avatar, AvatarBadge } from '@chakra-ui/react'
import React from 'react'
import Laptop from '../../images/Laptop.png'
import { EditIcon } from '@chakra-ui/icons'

export default function Shopping() {

    const toast = useToast ()
    const avatarStyle = ({
        ml: '90%',
        cursor: 'pointer'
    })

  return (
    <div>
        <Heading as='h1' color='purple.500'>Welcome to Stylo</Heading>
        <Text fontSize='xl' color='orange' fontWeight='600'>Single place for both shopping and movies</Text>

        <Box mt='10px'>
            <Heading as='h2' color='blue' mb='10px'>Shop Now</Heading>
            <Avatar bg='blue' name='RP' sx={avatarStyle}>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>
            <Grid templateColumns={{base: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', sm: 'repeat(1, 1fr)'}} gap={6} minChil>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Laptop} alt='Laptop'/>
                    <Text fontSize='1xl' fontWeight='500'>Product: Laptop</Text>
                    <Text mb='5px' fontWeight='500'>Price: $999</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Added to Cart', status: 'success', duration: 5000, isClosable: true, position: 'top-right'})}>Add to Cart <EditIcon ml='8px'/></Button>
                </GridItem>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Laptop} alt='Laptop'/>
                    <Text fontSize='1xl' fontWeight='500'>Product: Laptop</Text>
                    <Text mb='5px' fontWeight='500'>Price: $999</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Added to Cart', status: 'success', duration: 5000, isClosable: true, position: 'top-right'})}>Add to Cart <EditIcon ml='8px'/></Button>
                </GridItem>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Laptop} alt='Laptop'/>
                    <Text fontSize='1xl' fontWeight='500'>Product: Laptop</Text>
                    <Text mb='5px' fontWeight='500'>Price: $999</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Added to Cart', status: 'success', duration: 5000, isClosable: true, position: 'top-right'})}>Add to Cart <EditIcon ml='8px'/></Button>
                </GridItem>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Laptop} alt='Laptop'/>
                    <Text fontSize='1xl' fontWeight='500'>Product: Laptop</Text>
                    <Text mb='5px' fontWeight='500'>Price: $999</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Added to Cart', status: 'success', duration: 5000, isClosable: true, position: 'top-right'})}>Add to Cart <EditIcon ml='8px'/></Button>
                </GridItem>

                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Laptop} alt='Laptop'/>
                    <Text fontSize='1xl' fontWeight='500'>Product: Laptop</Text>
                    <Text mb='5px' fontWeight='500'>Price: $999</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Added to Cart', status: 'success', duration: 5000, isClosable: true, position: 'top-right'})}>Add to Cart <EditIcon ml='8px'/></Button>
                </GridItem>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Laptop} alt='Laptop'/>
                    <Text fontSize='1xl' fontWeight='500'>Product: Laptop</Text>
                    <Text mb='5px' fontWeight='500'>Price: $999</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Added to Cart', status: 'success', duration: 5000, isClosable: true, position: 'top-right'})}>Add to Cart <EditIcon ml='8px'/></Button>
                </GridItem>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Laptop} alt='Laptop'/>
                    <Text fontSize='1xl' fontWeight='500'>Product: Laptop</Text>
                    <Text mb='5px' fontWeight='500'>Price: $999</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Added to Cart', status: 'success', duration: 5000, isClosable: true, position: 'top-right'})}>Add to Cart <EditIcon ml='8px'/></Button>
                </GridItem>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Laptop} alt='Laptop'/>
                    <Text fontSize='1xl' fontWeight='500'>Product: Laptop</Text>
                    <Text mb='5px' fontWeight='500'>Price: $999</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Added to Cart', status: 'success', duration: 5000, isClosable: true, position: 'top-right'})}>Add to Cart <EditIcon ml='8px'/></Button>
                </GridItem>            
            </Grid>
        </Box>
        
    </div>
  )
}
