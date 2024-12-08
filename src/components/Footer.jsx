import React from 'react';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitterX.svg';
import instagram from '../assets/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="redes__sociales">
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </ul>
      <p>© 2024 Vacay Time. Todos los derechos reservados.</p>
      <ul className="footer__links">
        <li><a href="#">Política de privacidad</a></li>
        <li><a href="#">Términos y condiciones</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
