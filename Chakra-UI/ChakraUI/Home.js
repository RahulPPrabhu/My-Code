import {Switch, Tab, TabList, TabPanel, TabPanels, Tabs, useToast } from '@chakra-ui/react'
import {SearchIcon, EditIcon, ViewIcon, SettingsIcon, SunIcon, MoonIcon} from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Shopping from './pages/Shopping'
import Cart from './pages/Cart'
import Movie from './pages/Movie'
import Register from './pages/Register'
import './pages/theme.css'

export default function Home() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const [state, setState] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('DarkMode', state)
    }, [state])

  return (
    <div>
        <Tabs align='center'>
            <TabList>
                <Tab>Shopping <SearchIcon ml='8px' alignItems='center'/></Tab>
                <Tab>Cart <EditIcon ml='8px' alignItems='center'/></Tab>
                <Tab>Movies & Series <ViewIcon ml='8px' alignItems='center'/></Tab>
                <Tab ref={btnRef} onClick={onOpen}>Login <SettingsIcon ml='8px' alignItems='center'/></Tab>
                <Switch value={state} onChange={() => setState(!state)} mt='10px'/>
                {state ? <MoonIcon mt='10px'/>: <SunIcon mt='10px'/>}
            </TabList>

            <TabPanels>
                <TabPanel><Shopping /></TabPanel>
                <TabPanel><Cart /></TabPanel>
                <TabPanel><Movie theme={state}/></TabPanel>
                <TabPanel>
                    <Register />
                    <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Login to your account</DrawerHeader>
            
                        <DrawerBody>
                        <Input placeholder='Enter Username...' mb='10px'/>
                        <Input placeholder='Enter Password...' />
                        </DrawerBody>
            
                        <DrawerFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={() => toast({title: 'Logged In', status: 'success', position: 'top', duration: 9000, isClosable: true})}>Login</Button>
                        </DrawerFooter>
                    </DrawerContent>
                    </Drawer></TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  )
}
