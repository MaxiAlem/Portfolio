import React from 'react'
import { webs } from '../helper/api.js'

const Projects = () => {

  
  
  return (
    <div id='projects' className=' pt-1 column'>
      <div><h1 className='my-5 display-3 text-light'><strong>Some of my Projects</strong></h1></div>
      <div className='container-fluid row'>
        {webs.map(web =>{
              const { name, url, github,src} = web
              return (  
                <div className="card  bg-dark text-light project mx-auto my-2 col-sm-8 col-md-5 border border-2 rounded-3 border-dark rounded shadow position-relative " >
                  <img className="card-img" src={src} alt={name}/>

                  <div className="card-img-overlay bg-dark bg-opacity-50 ">
                  <div class="position-absolute bottom-0 start-50 translate-middle-x mb-2 ">
                    <h5 className="card-title">{name}</h5>
                    <a href={url} target="_blank"rel="noreferrer" className="mx-2 btn btn-primary">Demo</a>          
                    <a href={github} target="_blank"rel="noreferrer" className=" mx-2 btn btn-secondary">Repo</a>
                  </div>
                  </div>
                </div>
                )
            })}
      </div>
        
    

    </div>
  )
}

export default Projects


