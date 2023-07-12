import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFailure = () => {
  return (
    <Container h="90vh" >
      
      <VStack justifyContent={'center'} h={'full'}spacing={'4'}>
      <RiErrorWarningFill  size={'5rem'}/>
      <Heading textTransform={'uppercase'} my="8" textAlign={'center'}>
        Payment fail
      </Heading>
        <Link to={'/subscribe'}>
          <Button varient={'ghost'}>Try Again</Button>
        </Link>
        
      </VStack>
    </Container>
  );
};

export default PaymentFailure;
