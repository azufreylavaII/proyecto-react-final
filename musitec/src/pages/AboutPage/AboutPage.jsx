import React from 'react';
import AboutContenido from '../../components/About/AboutContenido/AboutContenido';
import './AboutPage.css'
import InicioSlider from '../../components/inicio/InicioSlider/InicioSlider';
//se  agrego el slider en about.
function AboutPage() {
  return (
<>
<AboutContenido/>
<InicioSlider/>

</>
  );
}

export default AboutPage;
