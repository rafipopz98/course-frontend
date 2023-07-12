import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Subscribers = () => {
  return (
    <Container h="90vh" p={16}>
      <Heading children="Welcome" my={8} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={0}
      >
        <Box bg={'yellow.400'} p={4} css={{borderRadius:'8px 8px 0 0'}}>
            <Text textAlign={'center'} fontSize={'lg'} children={`Pro Pack - 299.00(in rupees)`}/>
        </Box>
        <Box p={4}>
        <VStack textAlign={'center'}px={8}mt={4}spacing={8}>
        <Text color={'black'}children=
            {`Join the pro pack and get access to all contents`}
        />
        <Heading size={'md'}children={`299rs only`}/>
        </VStack>
        <Button my={8} width={'full'} colorScheme='yellow' >
Buy Now
        </Button>

        </Box>


        <Box bg={'blackAlpha.600'}p={4}css={{borderRadius:'8px 8px 0 0'}}>
        <Heading color={'white'} textTransform={'uppercase'} size={'sm'}children={`100% refund at cancellation`}/>
        <Text fontSize={'xs'} color='white'children={`Term's and Conditions Apply`}/>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribers;
