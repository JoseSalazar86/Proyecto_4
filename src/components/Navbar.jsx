import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navBar nav-dark bg-dark'>
        <div className='container'>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/Destinos">Destinos</NavLink>
            <NavLink to="/MisPlanes">Mis planes</NavLink>
            <NavLink to="/Contactos">Contactos</NavLink>
        </div>
    </nav>
  )
}

export default Navbar