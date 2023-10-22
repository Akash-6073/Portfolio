import React ,{useState} from 'react'
import img2 from '../Images/me.png'

import "../Style/style.css"
import "../Style/utils.css"
export default function Navbar() {
   
  return (
    <div className="mw2 intro">
    <div className='mw1 m-auto'>
      <nav className='navbar'>
        <ul className='navleft'>
            <li className='a'>A</li>
            <li>K</li>
            <li>A</li>
            <li>S</li>
            <li className='h'>H</li>
        </ul>
        <ul className='navright'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Portfolio</a></li>
        </ul>
      </nav>
      <div className="mw1  about">
      <div className="aboutLeft">
        <p>Student | Learner | Developer</p>
        <h1>Hi <span className='hi'>🖐️</span> , I am <span> Akash</span> <br /> Web developer</h1>
      </div>
      <div className="aboutRight">
        <img  src={img2} alt="" />
      </div>
    </div>
    </div>
    </div>
  )
}
