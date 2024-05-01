import React from 'react'

const Footer = () => {
 let date=new Date();
  return (
    <div className='Footer'>
      <h1> Copyright &copy; {date.getFullYear()} </h1>
    </div>
  )
}

export default Footer
