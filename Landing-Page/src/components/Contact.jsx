import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    
    <div  className='contact'>
      <section id='contact'>
      <div className='head6'>
      <h1>Join Our Daily <span style={{color:"green"}}> Newsletter </span></h1>
      <p>Join Our Daily Newsletter and stay updated with the latest news, exclusive offers, expert tips, and exciting updates delivered straight to your inbox every day.</p>
      <input type="email" placeholder='shoaib123@gmail.com' />
      <button>Subscribe</button>
      </div>

     <div style={{marginTop:"150px", marginLeft:"50px", width:"1160px", color:"gray"}} className='line'></div>

    <footer>
     <div className='footer'>
    <img style={{borderRadius:"50%", marginTop:"100px", marginLeft:"-70px"}} src="./Images/image.avif" width="60px" height="70px" alt="" />
    <h3 style={{ marginTop:"120px", marginLeft:"-100px"}}>ShabbyUI/React</h3>
     <div className='footer1'>
     </div>
     <div style={{marginTop:"110px"}} className='footer2'>
     <h3>Follow US</h3>
     <p>Github</p>
     <p>Twitter</p>
     <p>Dribbble</p>
     </div>
     <div style={{marginTop:"110px"}}  className='footer2'>
     <h3>Platforms</h3>
     <p>Web</p>
     <p>Mobile</p>
     <p>Desktop</p>
     </div>
     <div style={{marginTop:"110px"}}  className='footer2'>
     <h3>About</h3>
     <p>Features</p>
     <p>Pricing</p>
     <p>Contact</p>
     </div>
     <div style={{marginTop:"110px"}}  className='footer2'>
     <h3>Community</h3>
     <p>Youtube</p>
     <p>Community</p>
     <p>Twitch</p>
     </div>
     </div>
    </footer>

    <h2 className='h2'>@ 2026 Landing Page Made By <span style={{color:"green"}}> Shoaib </span></h2>
    </section>
    </div>
  )
}

export default Contact
