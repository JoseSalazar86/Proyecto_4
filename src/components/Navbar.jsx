import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav__menu'>
        <>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/Destinos">Destinos</NavLink>
            <NavLink to="/MisPlanes">Mi plan</NavLink>
            <NavLink to="/Contactos">Contacto</NavLink>
        </>
    </nav>
  )
}

export default Navbar