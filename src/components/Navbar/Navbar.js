import React from 'react'
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';

function Navbar() {
  return (
    <div className='h-14 bg-gray-900 text-white flex justify-between sticky top-0 items-center px-6 z-10'>
      <NavLink className='flex items-center' to='/'>
        <span className='text-4xl font-semibold whitespace-nowrap text-sky-600 -scale-x-1'>B</span>
        <span className=" text-2xl font-semibold whitespace-nowrap text-white">Beraverse</span>
      </NavLink>
      <ul className='flex flex-row'>
        <li>
          <NavItem url='/login'>Login</NavItem>
        </li>
        <li>
          <NavItem url='/register'>Register</NavItem>
        </li>
        <li>
          <NavItem url='/'>Home</NavItem>
        </li>
        <li>
          <NavLink to='/createpost' className='pr-4 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center aria-[current=page]:bg-blue-900'>Create A Post</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;