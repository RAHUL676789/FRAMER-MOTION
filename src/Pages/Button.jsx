import React from 'react'
import { Link } from 'react-router-dom'


const Button = () => {
  return (
    <div className='py-5'>
        <Link  className="bg-blue-50 py-3 px-5  mx-5  rounded-lg" to={"/contact"}>contact</Link>
        <Link  className="bg-blue-50 py-3 px-5  mx-5  rounded-lg" to={"/about"}>about</Link>
      
    </div>
  )
}

export default Button
