import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import { UserContext } from '../context/UserContext'; // Asegúrate de tener el contexto de usuario
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Importa el ícono de perfil

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [submenuVisible, setSubmenuVisible] = useState(false); // Estado para el submenú
  const navigate = useNavigate();
  const { user, logOut } = useContext(UserContext); // Obtener el usuario y la función de logout del contexto

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    // Cambiar el atributo data-theme en el body
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleSubmenu = () => {
    setSubmenuVisible(prev => !prev);
  };

  const handleLogout = () => {
    logOut(); // Llama a la función de logout
    setSubmenuVisible(false); // Oculta el submenu después de hacer logout
  };

  return (
    <header className="encabezado">
      <img src={Logo} alt="Logo de Vacay Time" className="logo" />
      <h1 className="cabecera__tituloh1">Vacay Time</h1>
      <h2 className="cabecera__tituloh2">Tu plan de vacaciones</h2>

      {/* Menú de navegación */}
      <nav className="nav__menu">
        <NavLink to="/" className="nav__link">Inicio</NavLink>
        <NavLink to="/Destinos" className="nav__link">Destinos</NavLink>
        <NavLink to="/MisPlanes" className="nav__link">Mi plan</NavLink>
        <NavLink to="/Contactos" className="nav__link">Contacto</NavLink>
      </nav>

      {/* Modo oscuro */}
      <label className="darkMode-label">
        <input 
          type="checkbox" 
          className="darkMode theme-checkbox" 
          checked={isDarkMode} 
          onChange={toggleDarkMode} 
        />
        <span className="darkMode-slider"></span>
      </label>

      {/* Botones de navegación o ícono de perfil */}
      <div className="header-right">
        {user ? (
          <div className="user-info">
            <AccountCircleIcon className="profile-icon" style={{ fontSize: 70 }} onClick={toggleSubmenu} />
            {submenuVisible && (
              <div className="submenu">
                <NavLink to="/perfil" className="submenu-link" onClick={() => setSubmenuVisible(false)}>
                  Perfil
                </NavLink>
                <NavLink className="submenu-link" onClick={handleLogout}>
                  Logout
                </NavLink>
              </div>
            )}
            <span>{user.username}</span>
          </div>
        ) : (
          <div>
            <button className="btn btn__login" onClick={() => navigate('/login')}>
              Iniciar Sesión
            </button>
            <button className="btn btn__register" onClick={() => navigate('/register')}>
              Registrarse
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;