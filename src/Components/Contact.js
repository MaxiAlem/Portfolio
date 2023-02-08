import React from 'react'

const Contact = () => {

  const downlCV =()=>{
    
    window.open('../assets/CV_Alem_Maxi2023.pdf')
  }
  return (
    <div id='contact' className=''>
       <div className='row container-fluid'>
        <div className='col-sm-6 col-lg-7 d-flex justify-content-center  border-end border-4 border-secondary'>
        
          <button type="button" onClick={()=>{downlCV()}} className="btn btn-outline-light btn-lg mx-auto my-auto ">Download CV</button>  
          </div>
          
        <div className='col-sm-6 col-lg-5 text-light pt-3 row container-fluid'>
          <a href="https://www.linkedin.com/in/maxialem90/" target="_blank"rel="noreferrer" className="link-light py-2">
          <img className='icon'
         alt='linkedin' src='../assets/linkedin.png'></img></a>

        <a href="mailto:maerc.maxi@gmail.com" target="_blank"rel="noreferrer" className="link-light py-2">
          <img className='icon'
         alt='email' src='../assets/email.png'></img></a>

         <a href="https://github.com/MaxiAlem" target="_blank"rel="noreferrer"  className="link-light py-2">
          <img className='icon'
         alt='github' src='../assets/gh.png'></img> </a>
         </div>
        </div>
    </div>
  )
}

export default Contact