import React from 'react'
import './About.css'
function About() {
  return (
    <div id='about'>
      <div  className='about'>
        <div>
          <h4 className='about__title'>ABOUT ME</h4>
          <div className='line'></div>
          <p className='about__text'>Here you will find more about me and my skills in terms of programming and technology</p>
        </div>
        <div className='skill'>
          <div className='skiils'>
            <h4 className='skills__title'>Hard Skills</h4>
            <div className='skill__items'>
          <p className='skills__text'>Html</p>
           <p className='skills__text'>Css</p>
          </div>
          <div className='skill__items'>
          <p className='skills__text'>Bootstrap</p>
           <p className='skills__text'>Sass</p>
          </div>
          <div className='skill__items'>
          <p className='skills__text'>JavaScript</p>
           <p className='skills__text'>Typescript</p>
          </div>
          <div className='skill__items'>
          <p className='skills__text'>Github</p>
           <p className='skills__text'>Responsive Design</p>
          </div>
          <div className='skill__items'>
          <p className='skills__text'>React</p>
           <p className='skills__text'>Next</p>
          </div>
          <div className='skill__items'>
          <p className='skills__text'>Redux</p>
           <p className='skills__text'>Redux Toolkit</p>
          </div>
          </div>
          <div className='skills'>
           <h4 className='skills__title'>Soft Skills</h4>
          <div className='skill__items'>
          <p className='skills__text'>Punctuality</p>
           <p className='skills__text'>Problem-solving</p>
          </div>
          <div className='skill__items'>
          <p className='skills__text'>Teamwork</p>
           <p className='skills__text'>Critical thinking</p>
          </div>
          <div className='skill__items'>
          <p className='skills__text'>Creativity</p>
           <p className='skills__text'>Adaptability</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
