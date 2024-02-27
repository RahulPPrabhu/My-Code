import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    useToast,
  } from '@chakra-ui/react'
  import React from 'react'
  
  export default function Register() {

    const toast = useToast()

    return (
        <FormControl w='50%'>
            <FormLabel>Name</FormLabel>
            <Input type='text' />
            <FormHelperText>Enter Your Name.</FormHelperText>

            <FormLabel>Email</FormLabel>
            <Input type='email' />
            <FormHelperText>This will be your username.</FormHelperText>

            <FormLabel>Password</FormLabel>
            <Input type='password' />
            <FormHelperText>This is secret.</FormHelperText>

            <Button colorScheme='purple' onClick={() => toast({title: 'Registerd', status: 'success', duration: 5000})}>Register</Button>
        </FormControl>
    )
  }
  