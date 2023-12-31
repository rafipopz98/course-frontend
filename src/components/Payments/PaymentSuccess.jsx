import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h="90vh" p="16">
      <Heading my="8" textAlign={'center'}>
        You have pro pack
      </Heading>
      <VStack
        boxShadow={'lg'}
        pb={16}
        alignItems={'center'}
        p="4"
        css={{ borderRadius: '8px 8px 0 0' }}
      >
        <Text >PAyment Successull</Text>
        <Box p="4">
          <VStack textAlign={'center'} px={'8'} mt={4} spacing={8}>
            <Text>Congratulations nnow u have access to premium Contents</Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to={'/profile'}>
          <Button varient={'ghost'}>Go To Profile</Button>
        </Link>
        <Heading size={'xs'}>Reference:hxfjgkluy;iohjb,vm.jjhg,vb</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
