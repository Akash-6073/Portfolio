import React from 'react';
import "../Style/style.css"
import "../Style/utils.css"

export default function About() {
  return (
    <>
   
    <div className="info mw3">
      <div className="infoLeft">
       <h1 className='heading'>👨‍🎓About Me</h1>
       <p> Hello I am Akash Mahendrakar , currently a 3rd year student in Vellore Institute of Technology, Chennai.I have been interested in technology and computers.Hence , I am currently pursuing this interest as a Computer Science Student</p>
       <p style={{marginTop:"20px"}}>
        I am good at Frontend Development, DSA and Experienced in Web development
       </p>
      </div>
      <div className="infoRight">
        <button>Download CV</button>
      </div>
    </div>
    <div className="hr mw3">
      <hr />
    </div>
    <div className="mw3 myskills">
      <div className="myskillsLeft">
        <h1 className='heading'>My Skills</h1>
      </div>
      <div className="myskillsRight">
      <p><span>Languages:</span>C++, C, Java , Python , Also familiar with: SQL</p>
      <p> <span>Web Technologies:</span>  HTML, CSS ,Java Script ,React</p> 
<p><span>Skills:</span> Data Structures, Algorithms</p>
<p><span>Core Subjects:</span> Operating System, Data Structures and Algorithms, DBMS, OOP</p>
      </div>
    </div>
    <div className="hr mw3">
      <hr />
    </div>
    <div className="projects mw3">
    <h1 className='heading'>💻Projects</h1>
    <p>
  <b> BLOG - TEMPLATE (Fully RESPONSIVE Blog Using HTML & CSS) </b> <br />
 The project involved the development of a website using HTML and CSS, which incorporated 
advanced CSS features such as hovers, transitions . It is a fully Responsive Website. The 
project demonstrated a strong command of web development technologies and an ability to 
create engaging user experiences.</p>
<p>
<b>Tic Tac Toe (FULLY RESPONSIVE Using HTML , CSS & JavaScript) </b> <br />
 The project involved the development of a website using HTML , CSS & JS, which incorporated 
advanced CSS features such as hovers , transitions and animations. The website also included
several essential features, included animations using JavaScript and making it a fully functional & 
fully Responsive presence. The project demonstrated a strong command of web development 
technologies and an ability to create engaging user experiences.
    </p>
    <p><a href="">View All</a></p>
    </div>
    <div className="hr mw3">
      <hr />
    </div>
    </>
  )
}
