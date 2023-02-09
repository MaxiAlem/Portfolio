import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skillcard = ({src,lvl}) => {
    const [show,setShow] = useState(true)
    
  return (
    
    <div className=" m-3 skill col-sm-6 col-md-3">
    <div><button className='btn btn-light rounded-circle '
     onMouseEnter={() => setShow(false)}
     onMouseLeave={() => setShow(true)}
    ><img src={src}className="" alt="..."/>
     </button> 
     </div> 
     <div className="" hidden={show}>
     <ProgressBar now={lvl}  />
     </div>
   </div>
  )
}

export default Skillcard    