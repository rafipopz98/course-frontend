import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {TiSocialInstagram,TiSocialYoutube} from 'react-icons/ti'
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center','flex-start']}width={'full'}>
        <Heading children='copryright 2023' color='white'/>
        <Heading children='muhammad rafi'
            size={'sm'}
            color={'yellow.400'}
            fontFamily={'body'}

        />

        </VStack>

        <HStack spacing={['2','10']}
        justifyContent={'center'}
        color={'white'}
        fontSize={'50'}
        >
            <a href="http://instagram/rafi_raff_popz" target="_blank">
                <TiSocialInstagram/>
            </a>
            <a href="http://youtube" target="_blank">
                <TiSocialYoutube/>
            </a>
            <a href="http://github/rafipopz98" target="_blank">
                <DiGithub/>
            </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
