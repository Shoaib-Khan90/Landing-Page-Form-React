import React from 'react'
import './Pricing.css'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pricing = () => {
  return (
    <div className='Price'>
      <div className='head5'>
      <h1>Get <span> Unlimited </span> Access</h1>
      <p>Get Unlimited Access to premium features, exclusive content, and powerful tools designed to enhance your experience</p>
      </div>
      <div className='Access'>
      <div style={{position:"relative", width:"350px", paddingBottom:"20px"}} className='card2'>
            <div className='flex1'>
            <h2>Free</h2>
            </div>
            <div className='flex2'>
            <h2>$0</h2>
            <p>/Month</p>
            </div>
            <div className='head'>
            <p>Perfect for beginners to explore essential features at no cost.</p>
            </div>
            <button style={{width:"300px", marginLeft:"20px", padding:"10px", borderRadius:"10px", backgroundColor:'green', color: "white", border:"none", fontSize:"20px"}}>Get Started</button>
            <div style={{width:"300px"}} className='line'></div>

            <div className='list'>
            <ul>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> 4 Team member</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> 4 GB Storage</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> Upto 6 pages</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> Community support</li>
            </ul>
            </div>
        </div>
        <div style={{position:"relative", width:"350px", paddingBottom:"20px"}} className='card2'>
            <div className='flex1'>
            <h2>Premium</h2>
            <button>Most Popular</button>
            </div>
            <div className='flex2'>
            <h2>$5</h2>
            <p>/Month</p>
            </div>
            <div className='head'>
            <p>Unlock advanced tools, premium benefits, and a smoother experience.</p>
            </div>
            <button style={{width:"300px", marginLeft:"20px", padding:"10px", borderRadius:"10px", backgroundColor:'green', color: "white", border:"none", fontSize:"20px"}}>Start Free Trial</button>
            <div style={{width:"300px"}} className='line'></div>

            <div className='list'>
            <ul>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> 4 Team member</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> 4 GB Storage</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> Upto 6 pages</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} />Priority support</li>
            </ul>
            </div>
        </div>
        <div style={{position:"relative", width:"350px", paddingBottom:"20px"}} className='card2'>
            <div className='flex1'>
            <h2>Enterprise</h2>
            </div>
            <div className='flex2'>
            <h2>$40</h2>
            <p>/Month</p>
            </div>
            <div className='head'>
            <p>Powerful custom solutions designed for teams and large businesses.</p>
            </div>
            <button style={{width:"300px", marginLeft:"20px", padding:"10px", borderRadius:"10px", backgroundColor:'green', color: "white", border:"none", fontSize:"20px"}}>Contact Us</button>
            <div style={{width:"300px"}} className='line'></div>
            <div className='list'>
            <ul>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> 4 Team member</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> 4 GB Storage</li>
              <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} /> Upto 6 pages</li>
               <li style={{color:"gray", fontFamily:"sans-serif", marginLeft:"-25px", marginTop:"10px"}}><FontAwesomeIcon style={{color:"green", marginLeft:"10px"}} icon={faCheck} />Priority support</li>
            </ul>
            </div>
        </div>
      </div>

      <div style={{marginTop:"150px", marginLeft:"50px", width:"1160px", color:"gray"}} className='line'></div>

    </div>
  )
}

export default Pricing
