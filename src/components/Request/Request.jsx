import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Request = () => {
const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[course,setCourse]=useState('')


  return (
    <Container h='92vh'>
    <VStack h='full' justifyContent={'center'} spacing={16}>
        <Heading children="Request new Course" />
        <form style={{ width: '100%' }}>
          <Box marginY={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              placeholder="Enter Name"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Enter Email " />
            <Input
              required
              id="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
              type="emial"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="message" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => {
                setCourse(e.target.value);
              }}
              placeholder="Explain the Course "
            //   type="textField"
              focusBorderColor="yellow.500"
            />
          </Box>
          
          <Box>
            <Button my='4' colorScheme='yellow' type='submit' >
                send mail
            </Button>
          </Box>
          <Box my={'-4'}>
          See available courses
<Link to={'/courses'}>
    <Button colorScheme='yellow' variant={'link'}>
        Click
    </Button>{" "}
    here
</Link>
          </Box>
         
        </form>
    </VStack>

    </Container>
  )
}

export default Request