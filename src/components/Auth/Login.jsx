import {
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

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="welcome to app" />
        <form style={{ width: '100%' }}>
          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
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
            <Link to={'/forgotpassword'}>
                <Button fontSize={'sm'}variant={'ghost'}>
                    Forget Password
                </Button>
            </Link>
          </Box>
          <Box>
            <Button my='4' colorScheme='yellow' type='submit' >
                Login
            </Button>
          </Box>
          <Box my={'-4'}>
          NewUser?
<Link to={'/signup'}>
    <Button colorScheme='yellow' variant={'link'}>
        Signup
    </Button>{" "}
    here
</Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
