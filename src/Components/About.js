import React from 'react';
import { skills } from '../helper/api.js';
import Skillcard from './Skillcard.js';

const About = () => {


  return (
    <div id='about' className=' pt-5 container-fluid d-flex flex-md-row-reverse text-light bg-gradient'>
      
        <div className='aboutme my-5 col-sm-12 col-md-6 display-6'>
                
                <p>Mi nombre es Maximiliano Alem soy desarrollador Web 
                  familiarizado con React en Frontend y Node en back,
                  de formacion autodidcta.
                </p>
                <img src='../assets/about.png' alt='coding' className='about-img'/>
    </div>
            
        <div className='col-sm-12 col-md-6 '>
          <h1 className='mt-5 display-3'><strong>SKILLS</strong></h1>
          <div className='container-fluid row'>
              {skills.map(skill=>{
                const {src,lvl} = skill;
                return(
                <Skillcard src = {src} lvl = {lvl} />
                )
              })}
          </div>
        </div>

      
      
    </div>
  )
}

export default About