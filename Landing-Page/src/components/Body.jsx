import React from 'react'
import './Body.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
            <div className='line'></div>

            <div className='list'>
            <ul>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> 4 Team member</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> 4 GB Storage</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> Upto 6 pages</li>
            </ul>
            </div>
        </div>
        <div className='card3'>
        <div className='flex3'>
        <img style={{marginLeft:"38%", marginTop:"20px", borderRadius:"50%"}} src="./Images/image.avif" width="70px" height="60px" alt="" />
        </div>
        <div className='head1'>
        <h2>Leo Miranda</h2>
        <h3>Frontend Developer</h3>
        </div>
        <div className='head2'>
        <p>I really enjoy transforming ideas into functional software that exceeds expectations</p>
        </div>
        <div className='link'>
        <a style={{color:"black", textDecoration:"none"}} href="https://github.com/Shoaib-Khan90"><FontAwesomeIcon  icon={faGithub} /> </a> 
        <a style={{color:"black", textDecoration:"none"}} href="https://www.linkedin.com/feed/"><FontAwesomeIcon style={{marginLeft:"20px"}} icon={faLinkedin} /></a>
        </div>
        </div>
        <div className='card4'>
        <div className='flex4'>
        <img style={{borderRadius:"40%"}} src="./Images/light.avif" width="70px" height="60px" alt="" />
        </div>
        <div className='head3'>
        <h2>Light & dark mode</h2>
        <p>That is the goof dark and light mode</p>
        </div>
        </div>
        </div>
        </div>

        <div className='investors'>
        <h1>Investors and founders</h1>
        </div>
        <div className='circle'>
          <div className='circle1'>
        <img src="./Images/circle.avif" width="50px" alt="" />
        <p>Sponsor 1</p>
        </div>
        <div className='circle1'>
        <img src="./Images/circle.avif" width="50px" alt="" />
        <p>Sponsor 2</p>
        </div>
        <div className='circle1'>
        <img src="./Images/circle.avif" width="50px" alt="" />
        <p>Sponsor 3</p>
        </div>
        <div className='circle1'>
        <img src="./Images/circle.avif" width="50px" alt="" />
        <p>Sponsor 4</p>
        </div>
        <div className='circle1'>
        <img src="./Images/circle.avif" width="50px" alt="" />
        <p>Sponsor 5</p>
        </div>
        <div className='circle1'>
        <img src="./Images/circle.avif" width="50px" alt="" />
        <p>Sponsor 6</p>
        </div>
        </div>

        <div className='aboutcompany'>
        <div className='image1'>
        <img src="./Images/pilot.png" width="300px" alt="" />
        </div>
        <div className='text'>
        <h2>About <span style={{color:"green"}}>Comapany</span></h2>
        <p>That company was so good for anywhere side and there product was so good and effective for everyone</p>
        <div className='User'>
        <div className='user'> 
        <h2> 2.7K+ </h2>
        <p style={{marginLeft:"10px"}}>Users</p>
        </div>
        <div className='user'> 
        <h2 style={{marginLeft:'25px'}}> 1.8K+ </h2>
        <p>Subscribers</p>
        </div>
        <div className='user'> 
        <h2 style={{marginLeft:'35px'}}> 112 </h2>
        <p>Downloads</p>
        </div>
        <div className='user'> 
        <h2 style={{marginLeft:'45px'}}> 4 </h2>
        <p>Products</p>
        </div>
        </div>
        </div>
        </div>

        <div className='Works'>
        <div className='text1'>
        <h1>How It <span style={{color:"green"}}> Works </span> Step-by-Step Guide</h1>
        <p>That was so good for any product work</p>
        </div>
        <div className='Container'>
        <div className='Accesbility'>
        <img src="./Images/Accessibilty.png" width="60px" alt="" />
        <h2>Accessibility</h2>
        <p>Eliminating physical (ramps, wide doors), digital (screen reader support), and communication obstacles.</p>
        </div>
        <div className='Community'>
          <img src="./Images/Community.png" width="60px" alt="" />
          <h2>Community</h2>
          <p> Dense social ties and direct, frequent interaction among members.</p>
        </div>
        <div className='Scalability'>
          <img src="./Images/Scalibilty.png" width="60px" alt="" />
          <h2>Scalability</h2>
          <p> The ability to grow without slowing down or degrading service quality.</p>
        </div>
        <div className='Gamification'>
        <img src="./Images/Gamification.png" width="60px" alt="" />
        <h2>Gamification</h2>
        <p>To make mundane or routine tasks more enjoyable and engaging.</p>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Body
