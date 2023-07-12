import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email,setEmail]=useState('')
  return (
    <Container py={'16'} height={'90vh'} >
        <form>
            <Heading children="Forgot Password"
            my='16'
            textTransform={'uppercase'}
            textAlign={["center",'left']}
            />
            <VStack spacing={6}>
            <Input
            required
            id='email'
            placeholder='enter tour  email'
            onChange={e=>setEmail(e.target.value)}
            value={email}
            focusBorderColor='yellow'
            type='email'
             />
             <Button colorScheme='yellow' width={'full'} type='submit'>Send  Reset Link</Button>
             
            </VStack>
        </form>
    </Container>
  )
}

export default ForgetPassword