import { Box, Container, Heading,Image, Stack ,Text} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions={
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p:'4',
    size:'3xl'
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
        <Heading 
        py={"2"} 
        textTransform={"uppercase"} 
        borderBottom={"5px solid"} 
        w={"fit-content"} 
        m={"auto"}>
            Services
        </Heading>

        <Stack 
        h={"full"}
        p={"4px"}
        direction={["column" , "row"]}
        alignItems={"center"}>
            <Image src={img5} h={["40","400"]}/>
        <Text 
        lineHeight={"190%"}
        letterSpacing={"widest"}
        p={["4","10"]}
        textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus et officiis molestiae odit aliquid deserunt dignissimos officia delectus accusantium vel amet a debitis dolore quidem cupiditate quas rem consectetur ipsa, provident illum similique? Error necessitatibus illum consectetur lavoluptatem voluptatum? Eveniet, officiis! Cupiditate aliquid, sed architecto delectus sunt dolorem sequi earum numquam veniam ipsum dolor facilis rem dignissimos dolores eligendi illum, ipsam distinctio animi laudantium blanditiis consectetur! Quo amet, minus dolorem laborum ullam earum blanditiis! Illum placeat ratione fugit asperiores cumque, atque laudantium esse beatae sint qui error. Quidem quis aliquam a, iure uptatum officia ratione. Repudiandae excepturi iure eius, rerum adipisci quod dolorem non ab deleniti cupiditate quam asperiores nemo ex odit voluptates saepe fugit pariatur nisi corrupti aliquid? Iusto, sed quae delectus cumque nisi mollitia assumenda atque quos, aliquam porro amet dignissimos nulla architecto eaque? Impedit libero sint odio nemo distinctio corporis unde voluptate, accusantium fugit?
        </Text>    
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {

return (
  <Carousel
    autoPlay
    infiniteLoop 
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
   >
    <Box w="full" h={'100vh'}>
        <Image src={img1} h={'full'} objectFit={'cover'}/>
        <Heading color={'white'} bgColor={'Black'} {...headingOptions}>
            Watch The Future
        </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
        <Image src={img2} h={'full'} objectFit={'cover'}/>
        <Heading color={'black'} bgColor={'white'} {...headingOptions}>
            Gaming Is future
        </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
        <Image src={img3} h={'full'} objectFit={'cover'}/>
        <Heading color={'black'} bgColor={'white'} {...headingOptions}>
            gaming on console
        </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
        <Image src={img4} h={'full'} objectFit={'cover'}/>
        <Heading color={'black'} bgColor={'white'} {...headingOptions}>
            night life is cool
        </Heading>
    </Box>
   </Carousel>
);
};

export default Home;
