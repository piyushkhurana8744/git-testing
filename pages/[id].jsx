import React from 'react'
import {useRouter} from "next/router"
const Singleuser = ({user}) => {
  console.log(user)
  return (
    <div>
     <img src={user.avatar} alt="" />
     <h1>{user.first_name} {user.last_name}</h1>
     <h1>{user.email}</h1>
    </div>
  )
}
export const getServerSideProps=async(context)=>{
  const id=context.params.id
  let res=await fetch(`https://reqres.in/api/users/${id}`)
  let data=await res.json()
  return{
    props:{
      user:data.data
    }
  }
}
export default Singleuser
