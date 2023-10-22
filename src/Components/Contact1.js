import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
export default function Contact1() {
  return (
    <>
     <div className="contact mw3">

        <div className="contactLeft">
        Thanks for visiting my portfolio! 
        </div>

        <div className="contactRight">
           <h1 className='heading'><FontAwesomeIcon icon={faEnvelope} />&nbsp;Contact me</h1> 
           <div className="media">
           <p>&nbsp;akashmahendrakar@gmail.com &nbsp; <i class="fa-regular fa-envelope"></i> </p>
            <p >&nbsp;8919596263 &nbsp; <i class="fa-solid fa-phone"></i> </p>
            <p>&nbsp;akash_mahendrakar &nbsp; <i class="fa-brands fa-instagram"></i> </p>
            <p>&nbsp;Akash_6073 &nbsp; <i class="fa-brands fa-github"></i> </p>
            <p>&nbsp;akash_mahendrakar &nbsp; <i class="fa-brands fa-facebook"></i> </p>
           </div>
        </div>
          
     </div>

     <div className="hr mw3">
      <hr />
    </div>
    <div className="foot">
        Copyright &copy; All Rights Reserved - Akash 21BCE5812
    </div>
    </>
  )
}
