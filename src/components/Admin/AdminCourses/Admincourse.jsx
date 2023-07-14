import {
    Box,
    Button,
    Grid,
    HStack,
    Heading,
    Image,
   
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
   
    useDisclosure,
  } from '@chakra-ui/react';
  import React from 'react';
  import cursor from '../../../assets/images/cursor.png';
  import Sidebar from '../Dashboard/Sidebar';
  import { RiDeleteBin7Fill } from 'react-icons/ri';
import AdminModal from './AdminModal';




  const Admincourse = () => {
      const {isOpen,onClose,onOpen}=useDisclosure()
    const courses = [
      {
        _id: "gkvhbkjl",
        title: 'react course',
        category: 'web dev',
        poster: {
          url: 'https://images.pexels.com/photos/17383443/pexels-photo-17383443/free-photo-of-man-art-sign-typography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        createdBy: 'rafi',
        views:123,
        numOfVideos:45,
      },
    ]; 
  
    const courseDetailHandler=(userId)=>{
      console.log(userId)
      onOpen()
    }
    const deleteButtonHandler=(userId)=>{
      console.log(userId)
    }
    const deleteLectureHandler=(courseId,lectureId)=>{
        console.log(courseId)
        console.log(lectureId)
    }
    const addLectureHandler=(e,id,courseId,description,video)=>{
        e.preventDefaultHandler()
    }
  
    return (
      <Grid
        css={{
          cursor: `url(${cursor}), default`,
        }}
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
      >
        <Box p={['0', '16']} overflowX="auto">
          <Heading
            textTransform={'uppercase'}
            children="All Users"
            my="16"
            textAlign={['center', 'left']}
          />
  
          <TableContainer w={['100vw', 'full']}>
            <Table variant={'simple'} size="lg">
              <TableCaption>All available courses in the database</TableCaption>
  
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lecture</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
  
              <Tbody>
                {courses.map(item => (
                  <Row courseDetailHandler={courseDetailHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}  />
                ))}
              </Tbody> 
            </Table>
          </TableContainer>
          <AdminModal

            isOpen={isOpen}
            onClose={onClose}
            deleteButtonHandler={deleteLectureHandler}
            addLectureHandler={addLectureHandler}
          />
        </Box>

       
        <Sidebar />
      </Grid>
    );
  };
  
  export default Admincourse;
  
  function Row({item,courseDetailHandler,deleteButtonHandler}) {
    return (
      <Tr>
        <Td>#{item._id}</Td>
        <Td>
            <Image src={item.poster.url}/>
        </Td>
        <Td>{item.title}</Td>
        <Td textTransform={'uppercase'}>{item.category}</Td>
        <Td>{item.createdBy}</Td>
        <Td isNumeric>{item.views}</Td>
        <Td isNumeric>{item.numOfVideos}</Td>
        
        <Td isNumeric>
          <HStack justifyContent={'flex-end'}>
            <Button onClick={()=>courseDetailHandler(item._id)} varient="outline" color={'purple.500'}>
             View Lectures
            </Button>
            <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
              <RiDeleteBin7Fill />
            </Button>
          </HStack>
        </Td>
      </Tr>
    );
  }
  


