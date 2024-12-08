import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <>
      <header className="encabezado">
        <img src={Logo} alt="Logo de Vacay Time" className="logo" />
        <h1 className="cabecera__tituloh1">Vacay Time</h1>
        <h2 className="cabecera__tituloh2">Tu plan de vacaciones</h2>

        {/* Menú de navegación */}
        <nav className='nav__menu'>
          <NavLink to="/" className="nav__link">Inicio</NavLink>
          <NavLink to="/Destinos" className="nav__link">Destinos</NavLink>
          <NavLink to="/MisPlanes" className="nav__link">Mi plan</NavLink>
          <NavLink to="/Contactos" className="nav__link">Contacto</NavLink>
        </nav>

        {/* Modo oscuro */}
        <label className="darkMode-label">
          <input type="checkbox" className="darkMode" />
        </label>

        {/* Botones de navegación */}
        <button className="btn btn__login" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        <button className="btn btn__register" onClick={handleRegister}>
          Registrarse
        </button>
      </header>
    </>
  );
}

export default Header;

