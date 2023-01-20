import React from 'react'
import { webs } from '../helper/api.js'

const Projects = () => {

  
  
  return (
    <div className='projects row'>
        
      {webs.map(web =>{
        const { name, url, github} = web
        return (  
           <div className="card project mx-5 my-2 border  border-2 border-dark  rounded shadow" >
          <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">que lo que hace</p> */}
          <a href={url} target="_blank"rel="noreferrer" className="card-link btn btn-primary">Demo</a>
          
          <a href={github} target="_blank"rel="noreferrer" className="card-link btn btn-primary">Repo</a>
          </div>
        </div>)
      })}

    </div>
  )
}

export default Projects