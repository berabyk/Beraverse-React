import React from 'react'
import { NavLink } from 'react-router-dom';

function NavItem(props) {
  return (
    <NavLink to={props.url} className='pr-4 md:hover:text-blue-700 aria-[current=page]:text-blue-700'>{props.children}</NavLink>
  )
}

export default NavItem;