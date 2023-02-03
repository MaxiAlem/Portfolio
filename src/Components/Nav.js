import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar bg-dark sticky-top display-6 justify-content-center'>
      
    <ul class="nav ">
      <li class="nav-item text-light">
              {'(☞ﾟヮﾟ)☞ '}
      </li>
      <li class="nav-item">
        <a class="nav-link link-light" aria-current="page" href="#about">About yo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-light" href="#projects">Proyectos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-light" href="#contact">Contacto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href="https://github.com/MaxiAlem" target="_blank"rel="noreferrer"  className="link-light">
          <img className='icon'
         alt='github' src='../assets/gh.png'></img> </a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href="https://www.linkedin.com/in/maxialem90/" target="_blank"rel="noreferrer"  className="link-light">
          <img className='icon'
         alt='github' src='../assets/linkedin.png'></img> </a>
      </li>
    </ul>
       
    </nav>
  )
}

export default Nav