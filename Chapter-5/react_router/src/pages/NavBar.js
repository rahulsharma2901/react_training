import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function NavBar() {

    const NavLinkCSS = ({isActive}) => {
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            fontSize : isActive ? '25px' : '20px'
        }
    }

  return (
    <nav>
        <NavLink style={NavLinkCSS} to='/'>Home</NavLink>
        <NavLink style={NavLinkCSS} to='/about'>About</NavLink>
        <NavLink style={NavLinkCSS} to='/contact'>Contact</NavLink>
    </nav>
  )
}

export default NavBar;