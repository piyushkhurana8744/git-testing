import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"teal",color:"white"}}>
    <Link href="/Home"><h1>Home</h1></Link>
    <Link href="/Project"><h1>Project</h1></Link>      
    </div>
  )
}

export default Navbar
