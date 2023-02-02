import React, { useState } from 'react'

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
     <div className="progress">
     <div className="progress-bar " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
     </div>
   </div>
  )
}

export default Skillcard    