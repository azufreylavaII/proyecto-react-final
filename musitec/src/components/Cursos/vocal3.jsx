import React from 'react';
import "./estructura.css";

function Vocal3() {
  return (
    <div className="contenido">
      <div className="box">
        <img src="imagenes/vocalcoachimagen.jpg" alt="Vocal coach" />
      </div>
      <div className="box">
        <h2>AVANZADO</h2>
        <ul>
          <li>Canto y técnica vocal 2</li>
          <li>Interpretación 2</li>
          <li>Repertorio 2</li>
          <li>Mejores cuidados de la voz</li>
          <li>Técnicas de Improvisación</li>
          <li>Prácticas</li>
        </ul>
      </div>
      <div className="box">
  <img src="/imagenesleo/vocal.jpg" alt="Vocal coach avanzado" />
</div>

    </div>
  );
}

export default Vocal3;