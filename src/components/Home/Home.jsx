import React from 'react';
import './Home.css';
import {
  Heading,
  Stack,
  VStack,
  Image,
  Text,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import {CgGoogle,CgYoutube} from 'react-icons/cg' 
import {SiCoursera,SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'

import { Link } from 'react-router-dom';
import introvid from '../../assets/videos/intro.mp4'
import vg from '../../assets/images/bg.png';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="Learn From the Experts" size={'2xl'} />
            <Text children="Find the valuable course in reasonable price" />
            <Link to={'/course'}>
              <Button size={'lg'} colorScheme={'yellow'}>
                Enroll Now
              </Button>
            </Link>
          </VStack>
          <Image className='imagehome' boxSize={'md'} src={vg} o></Image>
        </Stack>
      </div>
      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading
          children="Our Patners"
          textAlign="center"
          fontFamily="body"
          color={'yellow.400'}
        />

        <HStack className='brands' justifyContent={'space-evenly'} marginTop='4'>
        <CgGoogle />
        <CgYoutube />
        <SiUdemy />
        <SiCoursera />
        <DiAws />
        </HStack>
      </Box>


      <div className="container2">
        <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback  src={introvid}></video>
      </div>
    </section>
  );
};

export default Home;
