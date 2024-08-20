import React from 'react';
import './Footer.css';
import facebookIcon from "../../image/icon/social/facebook.png";
import instagramIcon from "../../image/icon/social/instagram.png";
import youtubeIcon from "../../image/icon/social/youtube.png";
import twitterIcon from "../../image/icon/social/twitter.png";
import logoIcon from "../../image/icon/logo/logo.png";






function Footer() {
  return (<>
<footer class="footer" id="contact">
    <div class="footer__container">
      <div class="footer__col">
        <div class="footer__logo">
          <a href="#"><img src={logoIcon} alt="logo de Instituto Musitec" /></a>
        </div>
        <p class="footer__section__description">
          Descubre nuestra malla exclusiva de carreras, cursos y programas que enriquecen cada experiencia con
          creatividad,
          innovación y pasión.
        </p>
        <a href="page_inscribirse/inscripcion.html"><button class="btn">Inscribirse</button></a>
      </div>
      <div class="footer__col">
        <h4>ENLACES RÁPIDOS</h4>
        <ul class="footer__links">
          <li><a href="page_convenios/convenios.html">Convenios especiales</a></li>
          <li><a href="#">Conciertos y eventos</a></li>
          <li><a href="#">Consejos musicales</a></li>
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Libro de reclamaciones virtual</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>TRÁMITES</h4>
        <ul class="footer__links">
          <li><a href="#">Convalidación</a></li>
          <li><a href="#">Duplicado de título</a></li>
          <li><a href="#">Becas académicas</a></li>
          <li><a href="#">Otros trámites administrativos</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>CONTACTO</h4>
        <ul class="footer__links">
          <li><a href="#">musitec@info.com</a></li>
        </ul>
        <div class="footer__socials">
          <a href="#"><img src={facebookIcon} alt="facebook" /></a>
          <a href="#"><img src={instagramIcon} alt="instagram" /></a>
          <a href="#"><img src={youtubeIcon} alt="youtube" /></a>
          <a href="#"><img src={twitterIcon} alt="twitter" /></a>
        </div>
      </div>
    </div>
    <div class="footer__bar">
      Copyright © 2024 Todos los derechos reservados | PAG. PRINCIPAL.
    </div>
  </footer>

  </>
  );
}

export default Footer;
