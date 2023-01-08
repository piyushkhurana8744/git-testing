import React from 'react'
import Link from "next/link"
const Home = ({git}) => {
    console.log(git)
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
        <div>
        <h1>Hello My Name is</h1>
        <h1>Piyush Khurana</h1>
        <h1>Github username : {git[0].login} </h1>
        <Link href={git[0].html_url} > <div style={{display:"flex",gap:"20px"}}>
            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" style={{width:"50px"}}/>
        <h1>Piyushkhurana</h1>
        </div></Link>
     <Link href="https://drive.google.com/file/d/1vqWuq5cA26_WRNHWpiq4sFmVZNfMgVBA/view?usp=share_link"> <button style={{padding:"10px 60px 10px 60px",backgroundColor:"#dc153d",color:"white",fontWeight:"600",fontSize:"20px",border:"none",borderRadius:"20px",marginTop:"20px"}}>Resume</button></Link>
      </div>
      <div>
        <img src={git[0].avatar_url} alt="" style={{width:"200px",borderRadius:"50%"}}/>
      </div>
        </div>
            
        <div>
            <h1 style={{width:"30%",margin:"auto"}}>Tech Stack</h1>
            <div  style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",width:"90%",margin:"auto",gap:"20px"}}>
           <img style={{width:"100px"}} src="https://debobrota-haldar.netlify.app/static/media/html.8664168d5bc90b1a24396f85aadbf623.svg" alt="" />
           <img style={{width:"80px"}} src="https://debobrota-haldar.netlify.app/static/media/css.39769a8bd378bf410d6b381a8d88fa35.svg" alt="" />
           <img style={{width:"80px"}} src="https://debobrota-haldar.netlify.app/static/media/javascript.4c1b5332c1b1057928f6f06cf972c91c.svg" alt="" />
           <img style={{width:"80px"}} src="https://debobrota-haldar.netlify.app/static/media/react.4e0c97009b885bfa75c5412262a46f5f.svg" alt="" />
           <img style={{width:"80px"}} src="https://debobrota-haldar.netlify.app/static/media/redux.7fe607aacc31f6e6199e70f16aae407e.svg" alt="" />
           <img style={{width:"80px"}} src="https://debobrota-haldar.netlify.app/static/media/typescript.17936c69824e11a996c4.png" alt="" />
           <img style={{width:"80px"}} src="https://debobrota-haldar.netlify.app/static/media/materialui.87264df237ee700ba78bb58ff701a6d3.svg" alt="" />
          
            </div>
        </div>
        <div>
            <h1 style={{width:"30%",margin:"auto"}}>Education</h1>
            <h2 style={{width:"50%",margin:"auto",marginTop:"20px"}}>Full Stack Web Developer : Masai School Banglore</h2>
            <h2 style={{width:"50%",margin:"auto",marginTop:"20px"}}>ITI Mechanic Motor Vehicle : ITI Nand Nagri</h2>
        </div>
    </div>
  )
}
export const getServerSideProps=async()=>{
    let res=await fetch(`http://localhost:3004/posts`)
    let data=await res.json()
    return{
        props:{
          git:data
        }
    }
}
export default Home
