import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"teal"}}>
       <Link href="/"><h1 style={{fontSize:"30px",fontWeight:"600",color:"white"}}>Home</h1></Link>
      <Link href="/Movie"><h1 style={{fontSize:"30px",fontWeight:"600",color:"white"}}>Movie</h1></Link>
      <Link href="/wishlist"><h1 style={{fontSize:"30px",fontWeight:"600",color:"white"}}>Wishlist</h1></Link>
    </div>
  )
}

export default Navbar
