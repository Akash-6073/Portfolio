import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Style/style.css"
import "../Style/utils.css"

export default function Contact() {


  return (
    <>
       <div className="hr mw3" name="contact">
      <hr />
    </div>
    <div className='mw2 contactMain'>
    <div className="mw3 contact">
        <div className="contactLeft">
              <h1 className='heading'>Contact me</h1>
              <p><span style={{color:"#ff004f"}} ><i class="fa-solid fa-envelope"></i></span>&nbsp;akashmahendrakar6073@gmail.com</p>
              <p><span style={{color:"#ff004f"}} ><i class="fa-solid fa-phone"></i></span>&nbsp;+91 8919596263</p>
              <div className="contactMedia">
              <a href="https://www.instagram.com/akash__mahendrakar/"> <i class="fa-brands fa-instagram"></i> </a>
              <a href="https://www.instagram.com/akash__mahendrakar/"><i class="fa-brands fa-facebook"></i> </a>
              <a href="https://www.instagram.com/akash__mahendrakar/"><i class="fa-brands fa-github"></i> </a>
              <a href="https://www.instagram.com/akash__mahendrakar/"><i class="fa-brands fa-linkedin"  ></i> </a>
              </div>
              <p style={{fontSize:"24px"}} className='thanks'>Thanks for  Visiting my Portfolio !</p>
              
        </div>
        <div className="contactRight">
          <form action="">
           <p className='message'>Send me a Message</p>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Your Email' />
            <textarea name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
            <button type='submit' ><i class="fa-solid fa-paper-plane"></i>&nbsp;Let's Collaborate</button>
          </form>
        </div>
    </div>
    </div>
    <div className="mw2 footer">
      Copyright &copy; Made with <i class="fa-solid fa-heart" style={{color:"#ff004f"}}></i> Akash Mahendrakar
    </div>
    </>
  )
}
