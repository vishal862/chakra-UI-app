import { Button, Container, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return <Container p={10} maxW={"container.xl"} h={"100vh"}>
    <form>
        <VStack 
        w={['full','96']}
        alignItems={'stretch'}
        spacing={"8"}
        m={'auto'}
        my={"16"} >
            <Heading>Welcome Back</Heading>
            <Input type='email' required placeholder='Email'/>
            <Input type='password'  required placeholder='Password'/>
            <Button alignSelf={"flex-end"} variant={"link"}>Forget Password?</Button>
            <Button type='"submit' colorScheme='purple' >Login</Button>
            <Text textAlign={"right"}>
                New User?{" "}
                <Button variant={"link"}>
                    <Link to={"/signup"}>Sign Up</Link>
                </Button>
            </Text>
        </VStack>
    </form>
  </Container>
}

export default Login