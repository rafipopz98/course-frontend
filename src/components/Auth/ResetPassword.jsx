import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const ResetPassword = () => {
    const [password,setPassword]=useState('')
const params=useParams()
console.log(params.token)

  return (
    <Container py={'16'} height={'90vh'} >
        <form>
            <Heading children="Reset Password"
            my='16'
            textTransform={'uppercase'}
            textAlign={["center",'left']}
            />
            <VStack spacing={6}>
            <Input
            required
            id='password'
            placeholder='enter new password'
            onChange={e=>setPassword(e.target.value)}
            value={password}
            focusBorderColor='yellow'
            type='password'
             />
             <Button colorScheme='yellow' width={'full'} type='submit'>Change Password</Button>
             
            </VStack>
        </form>
    </Container>
  )
}

export default ResetPassword