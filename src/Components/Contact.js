import React from 'react'

const Contact = () => {

  const downlCV =()=>{
    
    window.open('../assets/CV_Alem_Maxi2023.pdf')
  }
  return (
    <div id='contact' className=''>
       <div className='row container pt-5 g-3'>
        <div className='col-8 justify-content-center  '>
        
          <button type="button" onClick={()=>{downlCV()}} className="btn btn-outline-light btn-lg mx-auto my-auto ">Download CV</button>  
          </div>
          
        <div className='col-4 text-light  contact-icons row container '>
                
          <div className='col'>
            <a href="https://www.linkedin.com/in/maxialem90/" target="_blank"rel="noreferrer" className="link-light ">
            <i className="bi bi-linkedin iconos "></i> </a>
          </div>

          <div className='col'>
            <a href="https://github.com/MaxiAlem" target="_blank"rel="noreferrer"  className="link-light   ">
            <i className="bi bi-github iconos    "></i> </a>                  
          </div>

          <div className='col'>
            <a href="mailto:maerc.maxi@gmail.com" target="_blank"rel="noreferrer" className="link-light ">
            <i className="bi bi-postcard iconos  "></i> </a>      
          </div>

        </div>
    </div>
    </div>
  )
}

export default Contact