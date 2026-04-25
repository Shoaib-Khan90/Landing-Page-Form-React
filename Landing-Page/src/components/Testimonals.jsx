import React from 'react'
import './Testimonals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Testimonals = () => {
  return (
    <div className='Testimonals'>
      <section id='testimonals'>
      <div className='head3'>
        <h1>Discover Why <span style={{color:"green"}}> People Love </span> This Landing Page</h1>
        <p>Discover why people love this landing page because it combines modern design, clear messaging, and a smooth user experience that instantly captures attention.</p>
      </div>
      <div className='product'>
       <div className='card1'>
        <div className='flex'>
        <img src="./Images/image.avif" width="60px" alt="" />
        <h3 style={{marginLeft:"20px"}} >John Doe React</h3>
        </div>
        <p style={{marginTop:"-20px", marginLeft:"80px"}}>@john_doe</p>
        <h4>This landing Page Is Aweasom !</h4>
        </div>
         <div style={{height:"150px"}} className='card1'>
        <div className='flex'>
        <img src="./Images/image.avif" width="60px" alt="" />
        <h3 style={{marginLeft:"20px"}} >John Doe React</h3>
        </div>
        <p style={{marginTop:"-20px", marginLeft:"80px"}}>@john_doe</p>
        <h4>Modern and visually attractive design that grabs attention instantly.</h4>
        </div>
         <div style={{height:"130px"}} className='card1'>
        <div className='flex'>
        <img src="./Images/image.avif" width="60px" alt="" />
        <h3 style={{marginLeft:"20px"}} >John Doe React</h3>
        </div>
        <p style={{marginTop:"-20px", marginLeft:"80px"}}>@john_doe</p>
        <h4>Clear and simple messaging that explains the product effectively.</h4>
        </div>
      </div>

      <div className='product1'>
       <div style={{height:'120px'}} className='card1'>
        <div className='flex'>
        <img src="./Images/image.avif" width="60px" alt="" />
        <h3 style={{marginLeft:"20px"}} >John Doe React</h3>
        </div>
        <p style={{marginTop:"-20px", marginLeft:"80px"}}>@john_doe</p>
        <h4>Smooth and user-friendly navigation for a better experience.</h4>
        </div>
         <div style={{height:"150px"}} className='card1'>
        <div className='flex'>
        <img src="./Images/image.avif" width="60px" alt="" />
        <h3 style={{marginLeft:"20px"}} >John Doe React</h3>
        </div>
        <p style={{marginTop:"-20px", marginLeft:"80px"}}>@john_doe</p>
        <h4>Fully responsive layout that works perfectly on mobile, tablet, and desktop.</h4>
        </div>
         <div  style={{height:"130px"}} className='card1'>
        <div className='flex'>
        <img src="./Images/image.avif" width="60px" alt="" />
        <h3 style={{marginLeft:"20px"}} >John Doe React</h3>
        </div>
        <p style={{marginTop:"-20px", marginLeft:"80px"}}>@john_doe</p>
        <h4>Strategically placed call-to-action buttons that increase conversions.</h4>
        </div>
      </div>

      <div className='Crew'>
      <div className='head4'>
      <h1> <span style={{color:"green"}}>Our Dedicated </span> Crew</h1>
      <p>Our Dedicated Crew is the driving force behind our success, bringing passion, creativity, and expertise to every project.</p>
      </div>

      <div className='crew'>
      <div className='Emma'>
      <img style={{borderRadius:"50%", marginTop:"-50px"}} src="./Images/Emma.avif" width="100px" height="100px" alt="" />
      <h1>Emma Smith</h1>
      <h3>Product Manager</h3>
      <p>Life is like the river, sometimes it sweeps you gently along and sometimes the rapids come out of nowhere</p>
      <a style={{color:"black", textDecoration:"none"}} href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
      <a style={{color:"black", textDecoration:"none",marginLeft:"20px"}} href="https://github.com/Shoaib-Khan90/Landing-Page-Form-React"><FontAwesomeIcon icon={faGithub} /> </a>
      <a style={{color:"black", textDecoration:"none"}} href="https://www.linkedin.com/feed/"><FontAwesomeIcon style={{marginLeft:"20px"}} icon={faLinkedin} /></a>
      </div>
        <div className='Emma'>
      <img style={{borderRadius:"50%", marginTop:"-50px"}} src="./Images/John.avif" width="100px" height="100px" alt="" />
      <h1>John Doe</h1>
      <h3>Tech Lead</h3>
      <p>John Doe is a placeholder name for an unidentified or anonymous male  primarily used in U.S. legal proceedings, police investigations</p>
      <a style={{color:"black", textDecoration:"none"}} href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
      <a style={{color:"black", textDecoration:"none",marginLeft:"20px"}} href="https://github.com/Shoaib-Khan90/Landing-Page-Form-React"><FontAwesomeIcon icon={faGithub} /> </a>
      <a style={{color:"black", textDecoration:"none"}} href="https://www.linkedin.com/feed/"><FontAwesomeIcon style={{marginLeft:"20px"}} icon={faLinkedin} /></a>
      </div>
        <div className='Emma'>
      <img style={{borderRadius:"50%", marginTop:"-50px"}} src="./Images/Ashely.jpeg" width="100px" height="100px" alt="" />
      <h1>Ashley Ross</h1>
      <h3>Frontend Developer</h3>
      <p>Ashleigh Maree Ross (born 7 October 1999), also known as Ashi Ross, is an Australian actress, singer, dancer, fashion designer</p>
      <a style={{color:"black", textDecoration:"none"}} href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
      <a style={{color:"black", textDecoration:"none",marginLeft:"20px"}} href="https://github.com/Shoaib-Khan90/Landing-Page-Form-React"><FontAwesomeIcon icon={faGithub} /> </a>
      <a style={{color:"black", textDecoration:"none"}} href="https://www.linkedin.com/feed/"><FontAwesomeIcon style={{marginLeft:"20px"}} icon={faLinkedin} /></a>
      </div>
        <div className='Emma'>
      <img style={{borderRadius:"50%", marginTop:"-50px"}} src="./Images/Bruce.jpeg" width="100px" height="100px" alt="" />
      <h1>Bruce Rogers</h1>
      <h3>Backend Developer</h3>
      <p>considered one of the best of the 20th century. Famous for creating the "Centaur" typeface, he worked extensively</p>
      <a style={{color:"black", textDecoration:"none"}} href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
      <a style={{color:"black", textDecoration:"none",marginLeft:"20px"}} href="https://github.com/Shoaib-Khan90/Landing-Page-Form-React"><FontAwesomeIcon icon={faGithub} /> </a>
      <a style={{color:"black", textDecoration:"none"}} href="https://www.linkedin.com/feed/"><FontAwesomeIcon style={{marginLeft:"20px"}} icon={faLinkedin} /></a>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Testimonals
