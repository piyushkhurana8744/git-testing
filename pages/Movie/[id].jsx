import React from 'react'
import Moviecard from '../../components/MovieCard'
import { Button ,Center} from '@chakra-ui/react'
import axios from "axios"
const SingleMovie = ({movie}) => {
  const handlewishlist=async()=>{
    let res=await axios.post(` http://localhost:3004/posts`,movie)
  }
    console.log(movie)
  return (
    <div>
       <Moviecard key={movie.id} Title={movie.Title} Rmovieeased={movie.Rmovieeased} Runtime={movie.Runtime} imdbRating={movie.imdbRating} image={movie.Images[2]} />
       <Center><Button onClick={handlewishlist}>Add To WishList</Button></Center>
    </div>
  )
}
export const getServerSideProps=async(context)=>{
let id=context.params.id
console.log(id)
let res=await fetch(`https://movies-database-gold.vercel.app/movies/${id}`)
    let data=await res.json()
    return{
        props:{
            movie:data
        }
    }
}
export default SingleMovie
