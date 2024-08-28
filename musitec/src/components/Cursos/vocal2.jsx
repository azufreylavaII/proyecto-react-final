import React from 'react';
import "./estructura.css";

function Vocal2() {
  return (
    <div className="contenido">
      <div className="box">
        <h2>BÁSICO</h2>
        <ul>
          <li>Introducción a la Audioperceptiva</li>
          <li>Ejercicio de tracto vocal</li>
          <li>Introducción a la interpretación</li>
          <li>Foniatría (cuidados de la Voz)</li>
        </ul>
      </div>
      <div className="box">
        <img src="imagenes/sala2.jpg" alt="Sala de vocalización" />
      </div>
      <div className="box">
        <h2>INTERMEDIO</h2>
        <ul>
          <li>Canto y técnica vocal 1</li>
          <li>Audioperceptiva 1</li>
          <li>Interpretación 1</li>
          <li>Repertorio 1</li>
          <li>Prácticas</li>
        </ul>
      </div>
    </div>
  );
}

export default Vocal2;
