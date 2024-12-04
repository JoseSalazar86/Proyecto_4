import React from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import Logo from "../assets/Logo.png";
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
        <input type="checkbox" class="darkMode"/>
        <button className="btn btn-login" onClick={handleLoginClick}>Iniciar Sesión</button>
        <button className="btn btn-register" onClick={handleRegisterClick}>Registrarse</button>
      </header>
    </>
  )
}

export default Header