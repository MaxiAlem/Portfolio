import React from 'react'

const Main = () => {
  return (
    <div id='main' className='text-light bg-gradient'>
             <div className='row container-fluid py-5 mx-auto'>
        <div className='col-sm-12 col-lg-7 text-center'>
          <div className='display-2'>
            <p>HI!</p>
          <p>i'm Web Dev</p>
            </div>
          
          <div className='display-6'>
            <p>Autodidacta, curioso, something something 
            </p>
            
          </div>
          </div>
        <div className='col-sm-12 col-lg-5  text-center'>
          <img className='profilepic rounded-circle border border-white p-1'
         alt='foto de perfil' src='../assets/profile.jpg'/>
         <div className='pt-1 display-6'>
          <p className=''>Maximiliano Alem</p>
          <p><i class="bi bi-pin-map-fill"/> Rio Negro - Argentina</p>
         </div>
         </div>
         
      

        </div></div>
  )
}

export default Main