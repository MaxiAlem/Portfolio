import React from 'react'

const Nav = () => {
  return (
    // <nav className='   sticky-top display-6 justify-content-center'>
      
    // <ul class="nav ">
    // 
    // </ul>
       
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top">

  <div class="container-fluid">

    <a class="navbar-brand text-light" href="#">
      {'(☞ﾟヮﾟ)☞ '}
      </a>

    <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">

      <ul class="navbar-nav">
     
        <li class="nav-item">
          <a class="nav-link link-light" aria-current="page" href="#about">About yo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-light" href="#projects">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-light" href="#contact">Contacto</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link"  href="https://github.com/MaxiAlem" target="_blank"rel="noreferrer"  className="link-light">
            <img className='icon'
          alt='github' src='../assets/gh.png'></img> </a>
        </li>
        <li class="nav-item px-3  ">
          <a class="nav-link"  href="https://www.linkedin.com/in/maxialem90/" target="_blank"rel="noreferrer"  className="link-light">
            <img className='icon'
          alt='github' src='../assets/linkedin.png'></img> </a>
        </li>
      </ul>

    </div>
  </div>
</nav>
  )
}

export default Nav