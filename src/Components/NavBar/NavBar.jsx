import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ( {location } ) => {
  return (
    <>
        <ul className={`navbar-${location}`}>
        <li><NavLink to={"/"} >INICIO</NavLink></li>
        <li><NavLink to={"/movie"} >PELÍCULAS</NavLink></li>
        <li><NavLink to={"/tv"} >SERIES DE TV</NavLink></li>
        </ul>
    </>
  )
}

export default NavBar