import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skillcard = ({src,lvl,name}) => {
    const [show,setShow] = useState(true)
    
  return (

              <div className="card rounded rounded-5 skillcard m-2 p-1 bg-light bg-opacity-50" >
                  <img className="card-img mx-auto" src={src} alt={name}
                  onMouseEnter={() => setShow(false)}
                  onMouseLeave={() => setShow(true)}/>

                  <div  hidden={show}>
                  <ProgressBar className='progressbar'  now={lvl} label={` ${lvl/10}/10`} animated />
        
                  </div>
                </div>
   
  )
}

export default Skillcard    