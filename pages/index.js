import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link' 
const inter = Inter({ subsets: ['latin'] })

export default function Home({users}) {
  console.log(users)
  return (
    <>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {users.map(el=><Link href={`/${el.id}`} key={el.id}><div>
          <img src={el.avatar} alt="" width="200px" height={"200px"}/>
          <h1>{`${el.first_name} ${el.last_name}`}</h1>
          <h1>{el.email}</h1>
        </div></Link>)}
      </div>
    </>
  )
}
export const getServerSideProps=async()=>{
  let res=await fetch(`https://reqres.in/api/users?page=1`)
  let data=await res.json()
  return{
    props:{
      users:data.data
    }
  }
}
