import React from 'react'
import { webs } from '../helper/api.js'

const Projects = () => {

  
  
  return (
    <div id='projects' className=' pt-1 column'>
      <div><h1 className='my-5 display-3 text-light'><strong>Some of my Projects</strong></h1></div>
      <div className='container-fluid row'>
        {webs.map(web =>{
              const { name, url, github} = web
              return (  
                <div className="card project mx-auto my-2 col-sm-8 col-md-5 border border-2 rounded-3 border-dark rounded shadow" >
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">que lo que hace</p> */}
               <div>
               <img src='../assets/about.png' alt='coding' className=' project-img'/>
               </div>
               <div>
                <a href={url} target="_blank"rel="noreferrer" className=" btn btn-primary">Demo</a>
                
                <a href={github} target="_blank"rel="noreferrer" className=" btn btn-primary">Repo</a>
                </div>
                 
                 </div>
              </div>)
            })}
      </div>
        
    

    </div>
  )
}

export default Projects

