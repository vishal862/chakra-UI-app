import { Button, Container, Heading, Input, VStack,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return <Container p={10} maxW={"container.xl"} h={"100vh"}>
    <form>
        <VStack 
        w={['full','96']}
        alignItems={'stretch'}
        spacing={"8"}
        m={'auto'}
        my={"16"} >
            <Heading textAlign={'center'}>VIDEO HUB</Heading>
            <Avatar alignSelf={"center"} boxSize={"32"}/>
            <Input type='text' required placeholder='Name'/>
            <Input type='email' required placeholder='Email'/>
            <Input type='password'  required placeholder='Password'/>            <Button type='"submit' colorScheme='purple' >Sign Up</Button>
            <Text textAlign={"right"}>
                Already User?{" "}
                <Button variant={"link"}>
                    <Link to={"/login"}>Login</Link>
                </Button>
            </Text>
        </VStack>
    </form>
  </Container>
}


export default Signup