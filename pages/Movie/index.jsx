import React from 'react'
import Moviecard from '../../components/MovieCard'
import Link from "next/link"
const Movie = ({movie}) => {
  console.log(movie)
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px",marginTop:"30px"}}>
      {movie.map(el=><Link href={`/Movie/${el.id}`}><Moviecard Title={el.Title} Released={el.Released} image={el.Images[2]}
      imdbRating={el.imdbRating} Runtime={el.Runtime}/></Link>)}
    </div>
  )
}
export const getServerSideProps=async()=>{
  let res=await fetch(`https://movies-database-gold.vercel.app/movies`)
      let data=await res.json()
      return{
          props:{
              movie:data
          }
      }
  }
export default Movie
