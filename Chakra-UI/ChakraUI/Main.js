import { Heading, Box, Text, Button, SimpleGrid, CircularProgress, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, useToast, Progress, Switch} from '@chakra-ui/react'
import {ChatIcon} from '@chakra-ui/icons'

import React, {useEffect, useState} from 'react'
import './pages/theme.css'

export default function Main() {

    const [state, setState] = useState(false)
    console.log(state)

    const toast = useToast()

    useEffect(() => {
        document.body.classList.toggle('DarkMode', state)
    }, [state])

    const boxStyle = {
        color: 'white',
        bg: 'purple.900',
        w: '250px',
        p: "10px",
        ml: "25%",
        mt: "10px"
    }
  return (
    <div>
        <h1>{state ? 'DarkMode': 'LightMode'}</h1>
        <Heading as='h1' color='orangered'>Main <ChatIcon color={'black'} /></Heading>
        <Box bg={'orange'} p='10px' color='white' w='250px' mx='40%'> 
            <Text fontSize='2xl'>Sample Text</Text>
            <Button colorScheme='purple' onClick={() => toast({
                title: 'Submitted', description: 'Data has been Submitted', status: 'success', duration: 9000, isClosable: true, position: 'top-right'
            })}>Click</Button>
        </Box>
        <SimpleGrid columns={2} spacing={'10px'}>
            <Box bg="red">1</Box>
            <Box bg="green">1</Box>
            <Box bg="blue">1</Box>
            <Box bg="yellow">1</Box>
        </SimpleGrid>
        <CircularProgress value={80}/>
        <Spinner color='red.500' />
        <Alert status='success' w={'50%'} mx={'25%'}
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'>
            <AlertIcon />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Success
            </AlertTitle>
            <AlertDescription maxW='sm'>
                You are Good to go!!!
            </AlertDescription>
            
        </Alert>
        <Box sx={boxStyle}>
            Style Prop Implementation
            <Switch ml='5px' value={state} onChange={() => setState(!state)}/>
        </Box>
        <Progress value={80}/>
    </div>
  )
}
