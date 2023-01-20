import React,{useState} from 'react';
import { skills } from '../helper/api.js';
import Skillcard from './Skillcard.js';

const About = () => {

  const [show, setShow] = useState(true);


  return (
    <div id='about'>
        <p>quien soy</p>
        <p>Mi nombre es Maximiliano Alem soy dessarrollador Web</p>
        <p>que hago</p>
        <p>skils</p>
        <p>icono con un hover que levante prpogress  bar</p>
        <div className='container row'>
          {skills.map(skill=>{
            const {name,src, lvl} = skill;
            return(
              <Skillcard src = {src}/>
           )
          })}
        </div>
        
    </div>
  )
}

export default About