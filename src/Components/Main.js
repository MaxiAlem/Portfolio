import React from 'react'

const Main = () => {
  return (
    <div className='main'>
             <div className='row container-fluid py-5'>
        <div className='col-sm-6 col-lg-7 display-1 text-center'>
          <p>HI!</p>
          <p>i'm Web Dev</p>
          <p className='blockquote-footer display-5'>or i try</p>
          <div className='display-6'>
            <p>lId laboris irure exercitation consectetur proident.
               Enim esse ea irure excepteur fugiat laboris pariatur aliqua
                fugiat cillum dolore irure esse anim.
            </p>
          </div>
          </div>
        <div className='col-6 col-lg-5'>
          <img className='profilepic rounded-circle border border-white p-1'
         alt='foto de perfil' src='../assets/profilepic.jpg'></img>
         </div>
      

        </div></div>
  )
}

export default Main