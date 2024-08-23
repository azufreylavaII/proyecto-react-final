import  { useEffect, useState, useRef } from 'react';
import './SliderCareer.css';
import ImageSliderCareer1 from '/src/assets/images/careers/alumna-tocando-guitarra.png';
import ImageSliderCareer2 from '/src/assets/images/careers/productor5.png';
import ImageSliderCareer3 from '/src/assets/images/careers/auditorioinst.png';
import ImageSliderCareer4 from '/src/assets/images/careers/alumnos-tocando.png';
import ImageSliderCareer5 from '/src/assets/images/careers/saladeensayo.png';
import ImageSliderCareer6 from '/src/assets/images/careers/concierto4.png';

const InicioSlider = () => {
    const [indice, setIndice] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        const startSlider = () => {
            intervalRef.current = setInterval(() => {
                setIndice((prevIndice) => (prevIndice + 1) % 6);
            }, 2000); // Cambia el intervalo de tiempo aquí (2000ms = 2 segundos)
        };

        const stopSlider = () => {
            clearInterval(intervalRef.current);
        };

        const handleMouseEnter = () => {
            if (sliderRef.current) {
                stopSlider();
            }
        };

        const handleMouseLeave = () => {
            if (sliderRef.current) {
                startSlider();
            }
        };

        if (sliderRef.current) {
            sliderRef.current.addEventListener('mouseenter', handleMouseEnter);
            sliderRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        startSlider();

        return () => {
            clearInterval(intervalRef.current);
            if (sliderRef.current) {
                sliderRef.current.removeEventListener('mouseenter', handleMouseEnter);
                sliderRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    useEffect(() => {
        mostrarSlide(indice);
    }, [indice]);

    function mostrarSlide(i) {
        const slides = document.querySelector('.slidesCareer');
        const indicadores = document.querySelectorAll('.indexSliderCareer');

        const desplazamiento = -i * 100;
        slides.style.transform = `translateX(${desplazamiento}%)`;
        indicadores.forEach((indicador) => indicador.classList.remove('active'));
        indicadores[i].classList.add('active');
    }

    return (
        <div className="containerSliderCareer">
            <h2 id="titleSliderCareer">NUESTRAS CARRERAS ESTÁN ALTAMENTE CAPACITADAS</h2>
            <p id="textSliderCareer">Procuramos brindarle lo mejor a nuestros alumnos</p>

            <div className="sliderCareer" ref={sliderRef}>
                <div className="slidesCareer">
                    <img src={ImageSliderCareer1} alt="Slide 1" />
                    <img src={ImageSliderCareer2} alt="Slide 2" />
                    <img src={ImageSliderCareer3} alt="Slide 3" />
                    <img src={ImageSliderCareer4} alt="Slide 4" />
                    <img src={ImageSliderCareer5} alt="Slide 5" />
                    <img src={ImageSliderCareer6} alt="Slide 6" />
                </div>

                <div className="navigationSliderCareer">
                    <button id="prevSliderCareer" style={{ marginLeft: '10px' }}>
                        &#10094;
                    </button>
                    <button id="nextSliderCareer" style={{ marginRight: '10px' }}>
                        &#10095;
                    </button>
                </div>
            </div>

            <div className="navigationIndexSliderCareer">
                <div className="indexSliderCareer" data-index="0"></div>
                <div className="indexSliderCareer" data-index="1"></div>
                <div className="indexSliderCareer" data-index="2"></div>
                <div className="indexSliderCareer" data-index="3"></div>
                <div className="indexSliderCareer" data-index="4"></div>
                <div className="indexSliderCareer" data-index="5"></div>
            </div>
        </div>
    );
}

export default InicioSlider;
