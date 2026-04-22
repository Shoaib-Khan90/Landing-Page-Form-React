import React from 'react'
import './Body.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Body = () => {
  return (
    <div>
      <div className='main'>
        <div className='body'>
        <h1>Shabby Landing Page For React Developers</h1>
        <h3>Build your React landing page effortlessly with the required sections to your project.</h3>
        <button>Get Started</button>
        <button style={{marginLeft:'10px', backgroundColor:"yellowgreen"}}> <a href="https://github.com/Shoaib-Khan90/Landing-Page-Form-React">Github Repository <FontAwesomeIcon icon={faGithub} /> </a></button>
        </div>
        <div className='card'>
        <div className='card1'>
        <div className='flex'>
        <img src="./Images/image.avif" width="60px" alt="" />
        <h3 style={{marginLeft:"20px"}} >John Doe React</h3>
        </div>
        <p style={{marginTop:"-20px", marginLeft:"80px"}}>@john_doe</p>
        <h4>This landing Page Is Aweasom !</h4>
        </div>
        <div className='card2'>
            <div className='flex1'>
            <h2>Free</h2>
            <button>Most Popular</button>
            </div>
            <div className='flex2'>
            <h2>$0</h2>
            <p>/Month</p>
            </div>
            <div className='head'>
            <p>This is the free demo for everyone</p>
            </div>
            <button style={{width:"200px", marginLeft:"20px", padding:"10px", borderRadius:"10px", backgroundColor:'green', color: "white", border:"none", fontSize:"20px"}}>Start Free Trial</button>
            <div className='line'>
            
            </div>
        </div>
        <div className='card3'>

        </div>
        <div className='card4'>

        </div>
        </div>
        </div>
      </div>
  )
}

export default Body
