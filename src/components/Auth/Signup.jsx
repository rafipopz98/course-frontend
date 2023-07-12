import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const  fileuploadStyle={
    '&::file-selector-button':{
        cursor:'pointer',
        marginLeft:'-5%',
        border:'none',
        height:'100%',
        width:"110%",
        color:'#ECC948',
        backgroundColor:'white',
    }
}


const Signup = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [image, setImage] = useState();

  const changeImageHandler=e=>{
    const file=e.target.files[0]
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend=()=>{
        setImagePreview(reader.result)
        setImage(file)
    }
    
}
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading my='4'children="REGISTRATION" />
        <form style={{ width: '100%' }}>
          <Box my='4'>
            <Avatar
              src={imagePreview}
              display={'flex'}
              justifyContent={'center'}
              size={'2xl'}
            />
          </Box>
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
            <FormLabel htmlFor="email" children="Email " />
            <Input
              required
              id="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="Enter password"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="password" children="Password " />
            <Input
              required
              id="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="Enter password"
              type="password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <Link to={'/forgetpassword'}>
              <Button fontSize={'sm'} variant={'ghost'}>
                Forget Password
              </Button>
            </Link>
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar " />
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type="file"
              focusBorderColor="yellow.500"
              css={fileuploadStyle}
              onChange={changeImageHandler}
            />
          </Box>
          <Box>
            <Button my="4" colorScheme="yellow" type="submit">
              Signup
            </Button>
          </Box>
          <Box my={'-4'}>
            Already have a account??
            <Link to={'/login'}>
              <Button colorScheme="yellow" variant={'link'}>
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Signup;
