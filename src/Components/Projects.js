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
                <div className="card  bg-dark text-white project mx-auto my-2 col-sm-8 col-md-5 border border-2 rounded-3 border-dark rounded shadow" >
                  <img className="card-img" src="../assets/about.png" alt="Card image"/>

                  <div class="card-img-overlay">
                  <h5 class="card-title">{name}</h5>
                <div>
                                    <a href={url} target="_blank"rel="noreferrer" className=" btn btn-primary">Demo</a>
                              
                                    <a href={github} target="_blank"rel="noreferrer" className=" btn btn-primary">Repo</a>
                                  </div>
              </div>
                    
              
                    {/* <div>
                      <img src='' alt='coding' className=' project-img'/>
                    </div> */}
                    
                   </div>
                )
            })}
      </div>
        
    

    </div>
  )
}

export default Projects


