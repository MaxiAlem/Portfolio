import React from 'react'

const Contact = () => {

  const downlCV =()=>{
    
    window.open('../assets/CV_Alem_Maxi2023.pdf')
  }
  return (
    <div className='contact'>
       <div className='row container-fluid'>
        <div className='col-sm-6 col-lg-7 d-flex justify-content-center  '>
        
          <button type="button" onClick={()=>{downlCV()}} className="btn btn-outline-light btn-lg mx-auto my-auto ">Download CV</button>  
          </div>
        <div className='col-6 col-lg-5 text-light pt-3'>
          <p><a href="https://www.linkedin.com/in/maxialem90/" target="_blank"rel="noreferrer" className="link-light">
          <img className='icon'
         alt='linkedin' src='/linkedin.png'></img></a></p>

          <p><a href="mailto:maerc.maxi@gmail.com" target="_blank"rel="noreferrer" className="link-light">
          <img className='icon'
         alt='email' src='../assets/email.png'></img></a></p>

          <p><a href="https://github.com/MaxiAlem" target="_blank"rel="noreferrer"  className="link-light">
          <img className='icon'
         alt='github' src='../assets/gh.png'></img> </a></p>
         </div>
        </div>
    </div>
  )
}

export default Contact