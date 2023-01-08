import React from 'react'
import Link from "next/link"
const Project = ({project}) => {
    console.log(project)
  return (
    <div >
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"90%", margin:"auto",marginTop:"20px",gap:"20px"}}>
        {project.map(el=><div style={{textAlign:"center"}}>
        <img src="https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg" alt="" style={{width:"300px"}}/>
        <h3>{el.name}</h3>
        <Link href={el.html_url}><button style={{padding:"10px 60px 10px 60px",backgroundColor:"#dc153d",color:"white",fontWeight:"600",fontSize:"20px",border:"none",borderRadius:"20px",marginTop:"20px"}}>Go to github</button></Link>
        <h3>Fork :- {el.forks_count}</h3>
        <h3>Star :- {el.stargazers_count}</h3>
        <h3>language :- {el.language}</h3>
      </div>)}
        </div>
      
    </div>
  )
}
export const getServerSideProps=async()=>{
    let res=await fetch(`http://localhost:3004/comments`)
    let data=await res.json()
    return{
        props:{
         project:data[0].items
        }
    }
}
export default Project
