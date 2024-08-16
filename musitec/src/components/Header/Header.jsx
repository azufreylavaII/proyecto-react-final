import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">MueblesFAST</div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
          <li><Link to="/careers">Carreras</Link></li>
          <li><Link to="/courses">Cursos</Link></li>
          <li><Link to="/agreements">Convenios</Link></li>
          <li><Link to="/news">Noticias</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



