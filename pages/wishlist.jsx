import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from "axios"
import { Table, Tbody, Td ,Tr,Thead,Th, Button} from '@chakra-ui/react'
const WishList = () => {
  const [WishList,setWishList]=useState([])
    const getData=async()=>{
      let res=await axios.get(`http://localhost:3004/posts`)
      setWishList(res.data)
    }
    const handleDelete=async(id)=>{
      let res=await axios.delete(`http://localhost:3004/posts/${id}`)
      getData()
    }
    useEffect(()=>{
     getData()
    },[])
  return (
    <div>
      <Table>
        <Thead>
            <Tr>
            <Th>S.No</Th>
          <Th>Title</Th>
          <Th>Rating</Th>
          <Th>Realease Date</Th>
          <Th>Remove</Th>
            </Tr>
         
        </Thead>
        <Tbody>
          {WishList.map(el=><Tr key={el.id}>
            <Td>{el.id}</Td>
            <Td>{el.Title}</Td>
            <Td>{el.imdbRating}</Td>
            <Td>{el.Released}</Td>
            <Td><Button onClick={()=>handleDelete(el.id)}>Remove</Button></Td>
          </Tr>)}
        </Tbody>
      </Table>
    </div>
  )
}

export default WishList
