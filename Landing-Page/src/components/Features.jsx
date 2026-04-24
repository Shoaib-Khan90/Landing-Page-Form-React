import React from 'react'
import "./Features.css"

const Features = () => {
  return (
    <div className='Main'>
      <div className='Features'>
      <h1>Many <span style={{color:'green'}}>Great Features</span></h1>
      <div className='Button'>
      <button>Dark/Light theme</button>
      <button>Reviews</button>
      <button>Features</button>
      <button>Pricing</button>
      <button>Contact form</button>
      <button>Our team</button>
      <button>Responsive design</button>
      <button>Newsletter</button>
      <button>Minimalist</button>
      </div>
      </div>

      <div className='arrow'>
      <div className='card5'>
      <h1>Responsive Design</h1>
      <p>That was the so beautiful and responsive design for my every website</p>
      <img src="./Images/looking-ahead.png" width="400px" alt="" />
      </div>
      <div className='card6'>
      <h1>Intuitive user interface</h1>
      <p> Reduce cognitive load by removing clutter and focusing on essential elements.</p>
      <img src="./Images/reflecting.png" width="400px" alt="" />
      </div>
      <div className='card7'>
      <h1>AI-Powered insights</h1>
      <p>These systems move beyond describing the past (descriptive) to predicting future outcomes (predictive) and suggesting actions (prescriptive).</p>
      <img src="./Images/growth.png" width="400px" alt="" />
      </div>
      </div>

      <div className='Services'>
      <div className='text3'>
      <h1> <span style={{color:"green"}}>Client-Centric </span> Services</h1>
      <p>Analyzing client data and industry trends to tailor solutions that meet specific goals.</p>
      <div className='service1'>
      <img style={{marginTop:"40px", borderRadius:"20px"}} src="./Images/Code Collaboration.png" width="70px" height="60px" alt="" />
      <div className='service2'>
      <h1>Code Collaboration</h1>
      <p>Code collaboration enables multiple developers to work together on the same codebase in real-time</p>
      </div>
      </div>
       <div style={{marginTop:"50px"}} className='service1'>
      <img style={{marginTop:"35px", borderRadius:"20px"}} src="./Images/Project Management.png" width="70px" height="60px" alt="" />
      <div className='service2'>
      <h1>Project Management</h1>
      <p> Success is measured by balancing time, cost, and scope (quality).</p>
      </div>
      </div>
       <div style={{marginTop:"50px"}} className='service1'>
      <img style={{marginTop:"40px", borderRadius:"20px"}} src="./Images/Task Automation.png" width="70px" height="60px" alt="" />
      <div className='service2'>
      <h1>Task Automation</h1>
      <p>Data entry, sending follow-up emails, creating invoices, backing up files, and updating CRM systems.</p>
      </div>
      </div>
      </div>
      <div className='img1'>
      <img src="./Images/cube-leg.png" width="650px"  alt="" />
      </div>
      </div>

      <div className='Ideas'>
        <div className='text4'>
        <h1>All Your <span style={{color:'green'}}> Ideas & Concepts </span> In One Interface</h1>
        <p>Generates interactive UI prototypes from text prompts and helps automate design system maintenance.</p>
        </div>
        <div className='btn1'>
        <button>Request a Demo</button>
        <button style={{marginLeft:"20px", backgroundColor:"white", color:"black"}}>View all features</button>
        </div>
      </div>
    </div>
  )
}

export default Features
