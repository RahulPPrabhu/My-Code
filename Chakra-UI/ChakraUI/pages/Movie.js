import React from 'react'
import { Heading, Text, Box, Avatar, AvatarBadge, Grid, GridItem, useToast, Button } from '@chakra-ui/react'
import Spider from '../../images/spider.jpg'
import {ViewIcon} from '@chakra-ui/icons'
import ModalMessage from './ModalMessage'

export default function Movie({theme}) {

    const toast = useToast ()
    const avatarStyle = ({
        ml: '90%',
        cursor: 'pointer'
    })

  return (
    <div>
        <Heading as='h1' color='purple.500'>Welcome to Stylo Watch</Heading>
        <Text fontSize='xl' color='orange' fontWeight='600'>Watch Movies and Series</Text>
        <Box mt='10px' bg='blue' p='10px' w='50%' borderRadius='10px'>
            <Text fontSize='1.5em'>We will be back with more movies and series soon. <br /> <ModalMessage theme={theme}/></Text>
        </Box>
        

        <Box mt='10px'>
            <Heading as='h2' color='blue' mb='10px'>Watch Now</Heading>
            <Avatar bg='blue' name='RP' sx={avatarStyle}>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>
            <Grid templateColumns={{base: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', sm: 'repeat(1, 1fr)'}} gap={6} minChil>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Spider} alt='movie_poster'/>
                    <Text fontSize='1xl' fontWeight='500'>Movie Name: Spider Man HomeComing</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Now Playing Spiderman HomeComing', status: 'loading', duration: 5000, isClosable: true, position: 'top-right'})}>Watch Now <ViewIcon ml='8px'/></Button>
                </GridItem>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Spider} alt='movie_poster'/>
                    <Text fontSize='1xl' fontWeight='500'>Movie Name: Spider Man HomeComing</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Now Playing Spiderman HomeComing', status: 'loading', duration: 5000, isClosable: true, position: 'top-right'})}>Watch Now <ViewIcon ml='8px'/></Button>
                </GridItem>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Spider} alt='movie_poster'/>
                    <Text fontSize='1xl' fontWeight='500'>Movie Name: Spider Man HomeComing</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Now Playing Spiderman HomeComing', status: 'loading', duration: 5000, isClosable: true, position: 'top-right'})}>Watch Now <ViewIcon ml='8px'/></Button>
                </GridItem>
                <GridItem w='100%' h='100%' m='10px'>
                    <img src={Spider} alt='movie_poster'/>
                    <Text fontSize='1xl' fontWeight='500'>Movie Name: Spider Man HomeComing</Text>
                    <Button colorScheme='purple' onClick={() => toast({title: 'Now Playing Spiderman HomeComing', status: 'loading', duration: 5000, isClosable: true, position: 'top-right'})}>Watch Now <ViewIcon ml='8px'/></Button>
                </GridItem>
                           
            </Grid>
        </Box>
    </div>
  )
}
