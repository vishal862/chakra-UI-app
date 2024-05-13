import { Box, Button, HStack, Heading, Input, Stack, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return <Box 
  bgColor={"black"} 
  minh={"40"} 
  color={"white"}>

    <Stack
        h={"full"}
        direction={["column","row"]}
        p={7}
        >
        <VStack alignItems={"stretch"} w={"full"}>
            <Heading 
             size={10} 
             p={4} 
             textTransform={"uppercase"}
             textAlign={"Center"}>
                Subscribe to Get updates
            </Heading>
            <HStack>
                <Input p={4} textTransform={"uppercase"} placeholder='enter email here..'/>
                <Button 
                 borderRadius={'0 20px 20px 0'}
                 variant={"ghost"}
                 colorScheme='purple'>
                    <AiOutlineSend/>
                </Button>
            </HStack>            
        </VStack>
        <VStack 
            w={"full"}
            borderLeft={["none","1px solid white"] }
            borderRight={["none","1px solid white"] }>
                <Heading textTransform={'uppercase'}>
                    video hub
                </Heading>
                <Text>All Rights Reserved</Text>
        </VStack>
        <VStack 
            w={"full"}>
                <Heading size={"md"} textTransform={'uppercase'}>
                    social media
                </Heading>
                <Button variant={"link"} colorScheme='white'>
                    <a target={"blank"} href='https://www.youtube.com/@it_is_Anifinity'>YouTube</a>
                </Button>
                <Button variant={"link"} colorScheme='white'>
                    <a target={"blank"} href='https://www.instagram.com/vishhh_49'>Instagram</a>
                </Button>
                <Button variant={"link"} colorScheme='white'>
                    <a target={"blank"} href='https://www.github.com/vishal862'>GitHub</a>
                </Button>
        </VStack>
        
    </Stack>


  </Box>
    
  
}

export default Footer