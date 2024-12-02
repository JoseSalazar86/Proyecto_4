import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import Navbar from './Navbar';
const Header = () => {
    const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate("/login"); 
  }
  const handleRegisterClick = () => {
    navigate("/register"); 
  };

  return (
    <>
        <header className="encabezado">
        <img src={Logo} alt="Logo de vacay Time" className='logo' />
        <h1 className="cabecera__tituloh1">Vacay Time</h1>
        <h2 className="cabecera__tituloh2">Tu plan de vacaciones</h2>
        <Navbar/>
        <button className="darkMode">Claro Oscuro</button>
        <button className="btn btn-login" onClick={handleLoginClick}>Iniciar Sesión</button>
        <button className="btn btn-register" onClick={handleRegisterClick}>Registrarse</button>
      </header>
    </>
  )
}

export default Header