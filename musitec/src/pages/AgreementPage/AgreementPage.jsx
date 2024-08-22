import React, { useEffect } from "react";
import "./AgreementPage.css";

function AgreementPage() {
  useEffect(() => {
    let numero = document.querySelectorAll(".numero");

    numero.forEach((contador) => {
      let numeroInicio = 0;
      let numeroFin = parseInt(contador.getAttribute("data-val"));
      let intervalo = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;

      let duracion = Math.floor(intervalo / numeroFin);
      let contador1 = setInterval(function () {
        numeroInicio += 1;
        contador.textContent = numeroInicio;

        if (numeroInicio === numeroFin) {
          clearInterval(contador1);
        }
      }, duracion);
    });

    const titleQuestions = [...document.querySelectorAll(".questions__title")];

    titleQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle("questions__padding--add");
        question.children[0].classList.toggle("questions__arrow--rotate");

        if (answer.clientHeight === 0) {
          height = answer.scrollHeight;
        }

        answer.style.height = `${height}px`;
      });
    });
  }, []);

  return (
    <>
      <main>
        <section className="container about">
          <h2 className="subtitle">Nuestros tipos de convenios</h2>
          <p className="about__parrafo">
            Innovación en colaboraciones educativas y musicales.
          </p>
          <div className="about__main">
            <article className="about__icons">
              <img
                src="./assets/img/viaje.svg"
                className="about__icon"
                alt="Académicos"
              />
              <h3 className="about__title">Académicos</h3>
              <p className="about__parrafo">
                Intercambio estudiantil y programas conjuntos de investigación
                musical global.
              </p>
            </article>
            <article className="about__icons">
              <img
                src="./assets/img/musica.svg"
                className="about__icon"
                alt="Industria musical"
              />
              <h3 className="about__title">Industria musical</h3>
              <p className="about__parrafo">
                Prácticas, alianzas con sellos discográficos, producción y
                promoción musical profesional.
              </p>
            </article>
            <article className="about__icons">
              <img
                src="./assets/img/casa.svg"
                className="about__icon"
                alt="Cultural y Comunitarios"
              />
              <h3 className="about__title">Cultural y Comunitarios</h3>
              <p className="about__parrafo">
                Conciertos educativos y colaboraciones orquestales para promover
                la música comunitaria.
              </p>
            </article>
          </div>
        </section>

        <section className="conocimiento">
          <div className="conocimiento__container container">
            <div className="conocimiento__texts">
              <h2 className="subtitle">¡Aplica ya con estos requisitos!</h2>
              <p className="conocimiento__parrafo">
                Para aplicar a nuestro programa de intercambio, es necesario ser
                un estudiante matriculado con un buen rendimiento académico,
                cumplir con los requisitos de idioma del país de destino, y
                presentar una solicitud completa que incluya cartas de
                recomendación, un ensayo personal, y pruebas de suficiencia
                financiera. Te invitamos a revisar los detalles específicos y
                los plazos en nuestra sección de requisitos para garantizar una
                postulación exitosa.
              </p>
              <a href="../inscribirse/index.html" className="cta">
                Inscríbete
              </a>
            </div>
            <figure className="conocimiento__picture">
              <img src="#" className="conocimiento__img" alt="Aplica ya" />
            </figure>
          </div>
        </section>

        <section className="price container">
          <h2 className="subtitle">Cubrimos tus gastos</h2>
          <div className="price__table">
            <div className="price__element">
              <p className="price__name">España</p>
              <h3 className="price__price">Universidad de España</h3>
              <div className="price__items">
                <p className="price__features">Hospedaje</p>
                <p className="price__features">Comida</p>
                <p className="price__features">Prácticas</p>
              </div>
              <a href="../inscribirse/index.html" className="price__cta">
                Aplica ahora
              </a>
            </div>

            <div className="price__element price__element--best">
              <p className="price__name">Italia</p>
              <h3 className="price__price">Universidad de Italia</h3>
              <div className="price__items">
                <p className="price__features">Cubrimos el 50% de la pensión</p>
                <p className="price__features">Centro de idiomas gratuito</p>
                <p className="price__features">Talleres gratuitos</p>
              </div>
              <a href="../inscribirse/index.html" className="price__cta">
                Aplica ahora
              </a>
            </div>

            <div className="price__element">
              <p className="price__name">Hawai</p>
              <h3 className="price__price">Universidad Nacional de Hawai</h3>
              <div className="price__items">
                <p className="price__features">Hospedaje</p>
                <p className="price__features">30% de la matrícula cubierta</p>
                <p className="price__features">Prácticas</p>
              </div>
              <a href="../inscribirse/index.html" className="price__cta">
                Aplica ahora
              </a>
            </div>
          </div>
        </section>

        <div className="cuadro">
          <div className="contenedor1">
            <span className="numero" data-val="35" data-interval="2000">
              000
            </span>
            <span className="texto">
              Estudiantes en Programas de Doble Grado
            </span>
          </div>
          <div className="contenedor2">
            <span className="numero" data-val="150" data-interval="2000">
              000
            </span>
            <span className="texto">
              Estudiantes en Programas de Doble Grado
            </span>
          </div>
          <div className="contenedor3">
            <span className="numero" data-val="800" data-interval="3000">
              000
            </span>
            <span className="texto">
              Estudiantes en Programas de Doble Grado
            </span>
          </div>
        </div>

        <section className="questions container">
          <h2 className="subtitle">Preguntas frecuentes</h2>
          <p className="questions__paragraph">
            Resuelve todas tus dudas en nuestra sección de preguntas y
            respuestas
          </p>
          <section className="questions__container">
            <article className="questions__padding">
              <div className="questions__answer">
                <h3 className="questions__title">
                  ¿Necesito estar en el tercio superior para acceder a los
                  beneficios de los convenios de Musitec?
                  <span className="questions__arrow">
                    <img
                      src="./assets/img/flecha.svg"
                      className="questions__img"
                      alt="Arrow"
                    />
                  </span>
                </h3>
                <p className="questions__show">
                  Los requisitos pueden variar según el convenio específico.
                  Algunos convenios pueden exigir que los estudiantes estén en
                  el tercio superior de su clase, mientras que otros están
                  abiertos a todos los estudiantes independientemente de su
                  posición académica. Te recomendamos revisar los requisitos
                  específicos de cada convenio.
                </p>
              </div>
            </article>

            <article className="questions__padding">
              <div className="questions__answer">
                <h3 className="questions__title">
                  ¿Los convenios incluyen oportunidades de prácticas
                  profesionales?
                  <span className="questions__arrow">
                    <img
                      src="./assets/img/flecha.svg"
                      className="questions__img"
                      alt="Arrow"
                    />
                  </span>
                </h3>
                <p className="questions__show">
                  Sí, muchos de nuestros convenios incluyen la posibilidad de
                  realizar prácticas profesionales en empresas y organizaciones
                  colaboradoras. Las plazas suelen ser limitadas y pueden
                  requerir cumplir con ciertos requisitos académicos y de
                  habilidades.
                </p>
              </div>
            </article>

            <article className="questions__padding">
              <div className="questions__answer">
                <h3 className="questions__title">
                  ¿Puedo participar en más de un convenio a la vez?
                  <span className="questions__arrow">
                    <img
                      src="./assets/img/flecha.svg"
                      className="questions__img"
                      alt="Arrow"
                    />
                  </span>
                </h3>
                <p className="questions__show">
                  Depende de las políticas específicas de cada convenio. Algunos
                  convenios permiten la participación simultánea en otros
                  programas, mientras que otros pueden requerir un compromiso
                  exclusivo. Revisa los términos y condiciones de cada convenio
                  para más detalles.
                </p>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default AgreementPage;
