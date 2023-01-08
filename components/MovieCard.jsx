import React from 'react'
import { Image,Text,Box, Center, Button } from '@chakra-ui/react'
const Moviecard = ({Title,Released,imdbRating,Runtime,image}) => {
  return (
    <div>
      <Box textAlign={"center"}>
      <Center><Image height="200px" src={image} /></Center>
        <Text fontSize={"24px"} fontWeight="600">{Title}</Text>
        <Text fontSize={"18px"} fontWeight="500">Release on: {Released}</Text>
        <Text fontSize={"18px"} fontWeight="500">Rating: {imdbRating}</Text>
        <Text fontSize={"18px"} fontWeight="500">Runtime: {Runtime}</Text>

      </Box>
    </div>
  )
}

export default Moviecard
