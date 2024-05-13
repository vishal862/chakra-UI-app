import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return <Container p={16} maxW={'container.xl'} h={"100vh"} justifyContent={'center'}>
    <VStack color="purple.500" h={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={"10vmax"}/>
        <form>
             <HStack>
                <Input 
                css={{
                  '&::file-selector-button':{
                    border:"none",
                    height:"100%",
                  }
                }}
                 p={2} textAlign={'center'} required type={'file'}/>
                <Button  colorScheme='purple' color={"white"} type={'submit'}>Upload</Button>
             </HStack>
        </form>
    </VStack>
  </Container>
  
}

export default Upload