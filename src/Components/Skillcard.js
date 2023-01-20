import React, { useState } from 'react'

const Skillcard = ({src,lvl}) => {
    const [show,setShow] = useState(true)
  return (
    <div className="card mb-3 skill">
    <div><button className='btn btn-outline-secondary'
     onMouseEnter={() => setShow(false)}
     onMouseLeave={() => setShow(true)}
    ><img src={src}className="card-img-top" alt="..."/>
     </button> 
     </div> 
     <div className="card-body" hidden={show}>
     <div className="progress">
     <div className="progress-bar " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
     </div>
   </div>
  )
}

export default Skillcard    