import React from "react";
import imgFrontisInstituto from "../../../assets/images/inicio/frontis-instituto.jpg";

function InicioUs(){
return(<>
  <section class="section__container us__container" id="us">
    <div class="us__image">
      <img src={imgFrontisInstituto} alt="Frontis del instituto Musitec" />
    </div>
    <div class="us__content">
      <p class="section__subheader">DESDE HOY,</p>
      <h2 class="section__header">¡Tu viaje musical comienza aquí!</h2>
      <p class="section__description">
        Con un compromiso hacia la excelencia educativa, experiencias personalizadas y un ambiente inspirador, nuestro
        instituto está dedicado a asegurar que cada estudiante explore su pasión por la música con confianza y
        entusiasmo.
      </p>
      <div class="us__btn">
        <a href="page_nosotros/nosotros.html"><button class="btn">Leer más</button></a>
      </div>
    </div>
  </section>
</>);

}

export default InicioUs;