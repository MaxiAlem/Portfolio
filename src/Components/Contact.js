import React from 'react'

const Contact = () => {

  const downlCV =()=>{
    
    window.open('../assets/CV_Alem_Maxi2023.pdf')
  }
  return (
    <div id='contact' className=''>
       <div className='row container g-3 position-relative '>
        <div className='col-8 justify-content-center position-absolute top-50 start-0 pt-5'>
        
          <button type="button" onClick={()=>{downlCV()}} className="btn btn-outline-light btn-lg mx-auto my-auto ">Download CV</button>  
          <p className='text-light'>(es gratis)</p>
          </div>
          
        <div className='col-4 text-light  contact-icons row container position-absolute top-0 start-50 pt-5 '>
                
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