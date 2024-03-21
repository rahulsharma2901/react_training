import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    const NavLinkCSS = ({isActive}) => {
        return {
            fontWeight : isActive ? 'bolder' : 'bold',
            fontSize : isActive ? '26px' : '20px'
        }
    }
  return (
    <>
        <NavLink style={NavLinkCSS} to='/'>Home</NavLink>
        <NavLink style={NavLinkCSS} to='/profile'>Profile</NavLink>
        <NavLink style={NavLinkCSS} to='/cart'>Cart</NavLink>
        <NavLink style={NavLinkCSS} to='/about'>About</NavLink>
    </>
  )
}

export default Footer