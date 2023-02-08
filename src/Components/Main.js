import React from 'react'

const Main = () => {
  return (
    <div id='main' className=''>
             <div className='row container-fluid py-5 mx-auto'>
        <div className='col-sm-12 col-lg-7 display-1 text-center'>
          <p>HI!</p>
          <p>i'm Web Dev</p>
          <p className='blockquote-footer display-5'>or i try</p>
          <div className='display-6'>
            <p>Soy un mugroso dev web mas que no sabe hacer otra cosa que frontend y
              tan pete que no sale de react. deme dinero porfavor
            </p>
          </div>
          </div>
        <div className='col-sm-12 col-lg-5  text-center'>
          <img className='profilepic rounded-circle border border-white p-1'
         alt='foto de perfil' src='../assets/profile.jpg'/>
         <div className='pt-1 display-6'>
          <p className=''>Maximiliano Alem</p>
          <p><img src='../assets/location.svg' alt='location' className='locationsvg'/> Rio Negro - Argentina</p>
         </div>
         </div>
         
      

        </div></div>
  )
}

export default Main