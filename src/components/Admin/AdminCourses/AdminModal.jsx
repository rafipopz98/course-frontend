import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Signup';

const AdminModal = (isOpen, onClose, id,deleteButtonHandler,addLectureHandler) => {
    const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [video, setVideo] = useState('');
const [videoPrev, setVideoPrev] = useState('');
const changeVideoHandler=e=>{
    const file=e.target.files[0]
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend=()=>{
        setVideoPrev(reader.result)
        setVideo(file)
    }
    
}
const handleClose=()=>{
    setDescription('')
    setTitle('')
    setVideo('')
    setVideoPrev('')
    onClose()
}
  const courseTitle = 'react course';
  return (
    <Modal isOpen={isOpen} size={'full'} onClose={handleClose} scrollBehavior='outside'>
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalOverlay />
        <ModalCloseButton onClick={onClose}/>
        <ModalBody p="16">
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={5}>
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
              </Box>

              <Heading children={'lectures'} size={'lg'} />
              <VideoCard 
               title="react inro"
  description="lorem lorem lorem lorem"
  num={1}  
  lectureId='cfgvhbj'
  courseId={id}
  deleteButtonHandler={deleteButtonHandler}
  addLectureHandler={addLectureHandler}


              />
            </Box>
            <Box>
              <form
                onSubmit={e =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={'4'}>
                  <Heading 
                    children="Add Lecture"
                    size={'md'}
                    textTransform="uppercase"
                  />

                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <Input
                    accept="video/mp4"
                    required
                    type={'file'}
                    focusBorderColor="purple.300"
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'purple',
                      },
                    }}
                    onChange={changeVideoHandler}
                  />

                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}

                  <Button
                   
                    w="full"
                    colorScheme={'purple'}
                    type="submit"
                  >   Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AdminModal;

function VideoCard(
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler
  ,addLectureHandler
) {
  return (
    <Stack
      my="8"
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
      direction={['column', 'row']}
    >
      <Box>
        <Heading size={'sm'} children={`${num} ${title}`} />
        <Text />
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
