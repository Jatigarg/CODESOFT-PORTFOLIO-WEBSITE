import React from 'react'
import { Link } from 'react-scroll'
import jatin from '../../public/jatin.png'

function Navbar() {
  return (

    <div className='flex bg-transparent items-center justify-between w-full px-20 mx-auto py-3 glass fixed top-0 left-0 right-0 z-50'>

      <div className='flex items-center'>

        <img className='w-[7%] mr-4' src={jatin} alt="" />
        <h1 className='cursor-pointer text-2xl'>Jatin Garg <p className='text-sm'>Web Developer and Programer</p></h1>

      </div>


      <div className=''>

        <ul className='flex items-center '>

          <li className='mx-4  cursor-pointer hover:scale-110 hover:shadow-md hover:text-white hover:shadow-white px-2'><Link to='Home' smooth={true} duration={500} offset={-70} activeClass='active'>Home</Link></li>

          <li className='mx-4 cursor-pointer hover:scale-110 hover:shadow-md hover:text-white hover:shadow-white px-2'><Link to='About' smooth={true} duration={500} offset={-70} activeClass='active'>About</Link></li>


          <li className='mx-4 cursor-pointer hover:scale-110 hover:shadow-md hover:text-white hover:shadow-white px-2'><Link to='Certificate' smooth={true} duration={500} offset={-70} activeClass='active'>Certificate</Link></li>

          
          <li className='mx-4 cursor-pointer hover:scale-110 hover:shadow-md hover:text-white hover:shadow-white px-2'><Link to='Project' smooth={true} duration={500} offset={-70} activeClass='active'>Project</Link></li>

          <li className='mx-4 cursor-pointer hover:scale-110 hover:shadow-md hover:text-white hover:shadow-white px-2'><Link to='Contact' smooth={true} duration={500} offset={-70} activeClass='active'>Contact</Link></li>
        </ul>

      </div>

    </div>


  )
}

export default Navbar
