import React from 'react'
import logo from '../Assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import tripAdvisor from '../Assets/Tripadvisor.svg'



const Foot = () => {
  return (
    <div className='md:grid grid-cols-3  bg-slate-900 text-white px-10 py-20  '>
      <div className='mb-5'>
        <img src={logo} className='h-20 w-20 flex flex-wrap justify-center mx-auto '/>
      </div>
      <div className='flex flex-wrap justify-center mx-auto max-sm:mb-4'>
        <ul>
          <li className='text-center mb-3'> <NavLink to="/">Home</NavLink> </li>
          <li className='text-center mb-3'> <NavLink to="#">Dine-In</NavLink> </li>
          <li className='text-center mb-3'> <NavLink to="#">Book Rooms</NavLink> </li>
          <li className='text-center mb-3'> <NavLink to="/menu">Order Online</NavLink> </li>
          <li className='text-center mb-3'> <NavLink to="">About</NavLink> </li>
          
        </ul>
      </div>
      <div className='mx-auto'>
        <h1 className='text-center mb-3'>Connect Us</h1>
        <ul className='flex gap-3 justify-center text-center'>
          <li className='p-3 rounded-full bg-white h-12 w-12 text-black flex flex-wrap justify-center content-center'><FontAwesomeIcon icon={faInstagram} className='h-5 w-5' /></li>
          <li className='p-3 rounded-full bg-white h-12 w-12 text-black flex flex-wrap justify-center content-center'><FontAwesomeIcon icon={faFacebook}  className='h-5 w-5'/></li>
        </ul>
      </div>
        
      
    </div>
  )
}

export default Foot;
