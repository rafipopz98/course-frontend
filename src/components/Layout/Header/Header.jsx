import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: true,
  };

  const LogoutHandler=()=>{
    console.log("logout")
    onClose();
  }

  return (
    <div>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width="12"
        height={'12'}
        rounded={'full'}
        zIndex={'overlay'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSE</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <Link  onClick={onClose} to="/">
                <Button variant={'ghost'}>Home</Button>
              </Link>
              <Link onClick={onClose} to="/courses">
                <Button variant={'ghost'}>Browse All Courses</Button>
              </Link>
              <Link  onClick={onClose}to="/request">
                <Button variant={'ghost'}>Request New Course</Button>
              </Link>
              <Link onClick={onClose} to="/contact">
                <Button variant={'ghost'}>Contact Us</Button>
              </Link>
              <Link onClick={onClose} to="/about">
                <Button variant={'ghost'}>About Us</Button>
              </Link>
              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to={'/profile'}>
                          <Button variant={'ghost'}>Profile</Button>
                        </Link>
                        <Button onClick={LogoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role && (
                        <Link onClick={onClose} to={'/admin/dashboard'}>
                          <Button colorScheme="purple" variant={'ghost'}>
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : ( 
                  <>
                    <Link onClick={onClose} to={'/login'}>
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to={'/signup'}>
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
