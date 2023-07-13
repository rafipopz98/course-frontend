// import {
//   Avatar,
//   Button,
//   Container,
//   HStack,
//   Heading,
//   Image,
//   Input,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Stack,
//   Text,
//   VStack,
//   useDisclosure,
// } from '@chakra-ui/react';
// import React from 'react';
// import { RiDeleteBin7Fill } from 'react-icons/ri';
// import { Link } from 'react-router-dom';
// import { fileUploadCss } from '../Auth/Signup';
// import { useState } from 'react';

// const Profile = () => {

//     const changeImageSubmitHandler=(e,image)=>{
//         e.preventDefault()
//         console.log(image)
//     }
//   const user = [
//     {
//       name: 'rafi',
//       email: 'vhbjnkhkvj',
//       createdAt: String(new Date().toISOString()),
//       role: 'user',
//       subscription: {
//         status: 'active',
//         poster:''
//       },
//       playlist:[
//         {
//             course:'dfg',
//             poster:'https://avatars.githubusercontent.com/u/107236681?s=400&u=443689edb29b28e29dac2b55e93145a1632adcf8&v=4'
//         }
//       ]
//     },
//   ];
//   const removeFromPlaylistHandler=(id)=>{
//     console.log("hi")
//   }
//   const {isOpen,onClose,onOpen}=useDisclosure
//   return (
//     <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
//       <Heading children="profile" m="8" textTransform={'uppercase'} />
//       <Stack
//         justifyContent={'flex-start'}
//         alignItems={'center'}
//         direction={['column', 'row']}
//         spacing={['8', '16']}
//         padding={'8'}
//       >
//         <VStack>
//           <Avatar boxSize={'48'} />
//           <Button onClick={onOpen} colorScheme="yellow" variant={'ghost'}>
//             chnage photo
//           </Button>
//         </VStack>
//         <VStack spacing={4} alignItems={['center', 'flex-start']}>
//           <HStack>
//             <Text children="Name" fontWeight={'bold'} />

//             <Text children={user.name} />
//           </HStack>

//           <HStack>
//             <Text children="Email" fontWeight={'bold'} />

//             <Text children={user.email} />
//           </HStack>
//           <HStack>
//             <Text children="CreatedAt" fontWeight={'bold'} />

//             <Text children={user.createdAt.split('T')[0]} />
//           </HStack>
//           {user.role !== 'admin' && (
//             <HStack>
//               <Text children="Subscription" fontWeight={'bold'} />
//               {user.subscription.status === 'active'}?(
//               <Button color={'yellow.500'} varient="unstyled">
//                 Cancel Subscription
//               </Button>
//               ):(
//               <Button>
//                 <Link to={'/subscribe'}>
//                   <Button colorScheme="yellow">Subscribe</Button>
//                 </Link>
//               </Button>
//               )
//             </HStack>
//           )}

//           <Stack alignItems={'center'} direction={['column', 'row']}>
//             <Link to={'updateprofile'}>
//               <Button>Update Profile</Button>
//             </Link>
//             <Link to={'changepassword'}>
//               <Button>Change Password</Button>
//             </Link>
            
//           </Stack>
//         </VStack>
//       </Stack>
//       <Heading  children='Playlist'/>
//       {
//         user.playlist.length>0 &&(
//             <Stack alignItems={'center'} direction={['column', 'row']} flex={'wrap'}p='4'>


// {
//     user.playlist.map((element,index)=>(
//         <VStack w='48' m='2' key={element.course} >
//         <Image boxSize={'full'} objectFit={'contain'} src={element.poster}/>
// <HStack>
//     <Link to={`/course/${element.course}`}>
//         <Button  colorScheme='yellow' varient='ghost'>
//             Watch Now
//         </Button>
//     </Link>
//     <Button onClick={removeFromPlaylistHandler(element.course)}>
//         <RiDeleteBin7Fill />
//     </Button>
// </HStack>
//         </VStack>
        
//     ))
// }

//             </Stack>   
//         )
//       }

//       <ChangePhotoBox
//       changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>
//     </Container>
//   );
// };

// export default Profile;

// function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){
//     const [image,setImage]=useState('')
//     const [imagePrev,setImagePrev]=useState('')
//     const changeImage=e=>{
//         const file=e.target.files[0]
//         const reader=new FileReader()
//         reader.readAsDataURL(file)
//         reader.onloadend=()=>{
//             setImagePrev(reader.result)
//             setImage(file)
//         }
        
//     }
//     const closeHandler=()=>{
//         onClose()
//         setImagePrev('')
//         setImage('')
//     }

    
//     return(
//         <Modal isOpen={isOpen} onClose={onClose}>
//             <ModalOverlay backdropFilter={'blur(10px)'}/>
//             <ModalContent>
//             <ModalHeader>Change Photo</ModalHeader>
//                 <ModalBody>
//                     <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}>
//                         <VStack spacing={'8'}>
//                         {imagePrev&&<Avatar src={imagePrev} boxSize={'48'}/>}
//                         <Input
// onChange={changeImage}
//                             type='file'
//                             css={{'&::file-selector-button':fileUploadCss}}
//                         />
// <Button w='full'colorScheme='yellow' type='submit'>
// Change

// </Button>

//                         </VStack>
//                     </form>
//                 </ModalBody>
//                 <ModalFooter>
// <Button mr={3} onClick={closeHandler}>Cancel</Button>
//                 </ModalFooter>
//             </ModalContent>
//         </Modal>
//     )
// }
import React from 'react'

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile