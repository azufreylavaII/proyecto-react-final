import './InicioBenefits.css'
function InicioBenefits(){
    return(<>
    <section class="benefits" id="benefits">
    <div class="section__container benefits__container">
      <div class="benefits__content">
        <p class="section__subheader">TE OFRECEMOS</p>
        <h2 class="section__header">Todo lo que necesitas.</h2>
        <ul class="benefits__list">
          <li>
            <span><i class="ri-shield-star-line"></i></span>
            Docentes calificados
          </li>
          <li>
            <span><i class="ri-24-hours-line"></i></span>
            Acceso a plataformas virtuales
          </li>
          <li>
            <span><i class="ri-headphone-line"></i></span>
            Salas de conciertos y recitales
          </li>
          <li>
            <span><i class="ri-map-2-line"></i></span>
            Asesoría y guía de carrera musical
          </li>
        </ul>
      </div>
    </div>
  </section>


    </>);
}

export default InicioBenefits;