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
        <h1>Vacay Time</h1>
        <h2>Tu plan de vacaciones</h2>
        <Navbar/>
        <button>Claro Oscuro</button>
        <button className="Login" onClick={handleLoginClick}>Iniciar Sesión</button>
        <button className="Register" onClick={handleRegisterClick}>Registrarse</button>
      </header>
    </>
  )
}

export default Header