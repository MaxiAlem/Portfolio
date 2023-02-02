import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar bg-dark sticky-top'>
        <div className='container text-white fs-3'>
        <div className='col-8 container row'>
          <p className='col text-start'> (☞ﾟヮﾟ)☞</p>
          <p className='col mx-2'> <a href="#about"  className="link-light">
           {'>'}About yo</a></p> 
        <p className='col mx-2'> <a href="#projects"  className="link-light">
           {'>'}Proyectos</a></p>  
        <p className='col mx-2'><a href="#contact"  className="link-light">
        {'>'}Contacto</a></p>
           </div>
        <div className='col-1'><p><a href="https://github.com/MaxiAlem" target="_blank"rel="noreferrer"  className="link-light">
          <img className='icon'
         alt='github' src='../assets/gh.png'></img> </a></p></div>
        <div className='col-1'> <p><a href="https://www.linkedin.com/in/maxialem90/" target="_blank"rel="noreferrer" className="link-light">
          <img className='icon'
         alt='linkedin' src='../assets/linkedin.png'></img></a></p></div>

        </div>
    </nav>
  )
}

export default Nav