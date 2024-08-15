import React from 'react';
//import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">MueblesFAST</div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
          <li><Link to="/store">Tienda</Link></li>
          <li><Link to="/services">Servicios</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
