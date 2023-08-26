import React from 'react'
import logo from '../../assets/logo.png'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'

const Header = (  { location }  ) => {
  return (
    <div className={"header-container-" + location}><Link to={`/`}><img className={"image-logo-" + location} src={logo} alt="Logo de Punto Cine"/></Link>
    <NavBar location={ location } /></div>
  )
}

export default Header