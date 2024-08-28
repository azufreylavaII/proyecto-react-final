import React from 'react';
import "./estructura.css";

function Teoria3() {
  return (
    <div className="contenido3">
      <div className="box">
        <img src="imagenes/teoriabasica11.jpg" alt="Teoría musical intermedia" />
      </div>
      <div className="box">
        <h2>AVANZADO</h2>
        <ul>
          <li>Elementos que forman un acorde</li>
          <li>Conceptos para escribir una melodía</li>
          <li>Acordes de una canción</li>
          <li>Escribir una escala musical</li>
          <li>Improvisación I</li>
        </ul>
      </div>
      <div className="box">
        <img src="imagenes/teoriamusical2.jpg" alt="Teoría musical avanzada" />
      </div>
    </div>
  );
}

export default Teoria3;