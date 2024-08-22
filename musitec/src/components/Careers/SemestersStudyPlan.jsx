import { Fragment } from "react";
import { useEffect } from "react";
import './SemestersStudyPlan.css';

function SemestersStudyPlan() {

    /* Para que al pasar el mouse sobre un cuadro de ciclo se visualicen
    los cursos del ciclo correspondiente y el cuadro se agrande un poco, 
    y al dejar de pasar el mouse se vuelva a ver solo el ciclo y el tamaño
    del cuadro regrese a su tamaño original*/

    useEffect(() => {
        const cajas = document.querySelectorAll(".boxSemesterStudyPlan");

        cajas.forEach(caja => {
            const ciclo = caja.querySelector(".SemesterStudyPlan");
            const cursos = caja.querySelector(".coursesStudyPlan");

            caja.addEventListener("mouseover", function () {
                caja.style.transform = 'scale(1.08)';
                ciclo.style.display = "none"; //para ocultar el ciclo al pasar el mouse
                cursos.style.display = "block"; //para mostrar la lista de cursos
            });

            caja.addEventListener("mouseout", function () {
                caja.style.transform = 'none';
                ciclo.style.display = "block"; //para mostrar el ciclo al dejar de pasar el mouse
                cursos.style.display = "none"; //para ocultar la lista de cursos
            });
        });


        /* Para que el botón cambie de color al pasar el mouse*/
        const boton = document.querySelector('.buttonDownloadSemesterStudyPlan');

        boton.addEventListener('mouseover', () => {
            boton.style.backgroundColor = '#bd283e';
        });

        boton.addEventListener('mouseout', () => {
            boton.style.backgroundColor = '#e62f4a';
        });
    }, []);


    /* Para que al hacer click en el botón "descargar malla aquí" se descargue
    el pdf de la malla curricular correspondiente de la carrera*/
    const descargarPDF = (pdfUrl, fileName) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.download = fileName;

        // Añadir el enlace al documento y activarlo
        document.body.appendChild(link);
        link.click();

        // Eliminar el enlace del documento
        document.body.removeChild(link);
    }


    return (
        <>
            <div className="containerSemestersStudyPlan">
                <div className="boxSemesterStudyPlan">
                    <h2 className="SemesterStudyPlan">CICLO 01</h2>
                    <ul className="coursesStudyPlan">
                        <li>Teoría Musical I</li>
                        <li>Historia de la Música I</li>
                        <li>Técnica Instrumental I</li>
                        <li>Entrenamiento Auditivo I</li>
                        <li>Armonía I</li>
                        <li>Lenguaje Musical I</li>
                    </ul>
                </div>
                <div className="boxSemesterStudyPlan">
                    <h2 className="SemesterStudyPlan">CICLO 02</h2>
                    <ul className="coursesStudyPlan">
                        <li>Teoría Musical II</li>
                        <li>Historia de la Música II</li>
                        <li>Técnica Instrumental II</li>
                        <li>Entrenamiento Auditivo II</li>
                        <li>Armonía II</li>
                        <li>Lenguaje Musical II</li>
                    </ul>
                </div>
                <div className="boxSemesterStudyPlan">
                    <h2 className="SemesterStudyPlan">CICLO 03</h2>
                    <ul className="coursesStudyPlan">
                        <li>Teoría Musical III</li>
                        <li>Historia de la Música III</li>
                        <li>Técnica Instrumental III</li>
                        <li>Entrenamiento Auditivo III</li>
                        <li>Armonía III</li>
                        <li>Lenguaje Musical III</li>
                    </ul>
                </div>
            </div>

            <div className="containerSemestersStudyPlan">
                <div className="boxSemesterStudyPlan">
                    <h2 className="SemesterStudyPlan">CICLO 04</h2>
                    <ul className="coursesStudyPlan">
                        <li>Análisis Musical I</li>
                        <li>Historia de la Música IV</li>
                        <li>Técnica Instrumental IV</li>
                        <li>Entrenamiento Auditivo IV</li>
                        <li>Armonía IV</li>
                        <li>Lenguaje Musical IV</li>
                    </ul>
                </div>
                <div className="boxSemesterStudyPlan">
                    <h2 className="SemesterStudyPlan">CICLO 05</h2>
                    <ul className="coursesStudyPlan">
                        <li>Análisis Musical II</li>
                        <li>Historia de la Música V</li>
                        <li>Técnica Instrumental V</li>
                        <li>Música de Cámara I</li>
                        <li>Improvisación I</li>
                        <li>Pedagogía Musical I</li>
                    </ul>
                </div>
                <div className="boxSemesterStudyPlan">
                    <h2 className="SemesterStudyPlan">CICLO 06</h2>
                    <ul className="coursesStudyPlan">
                        <li>Análisis Musical III</li>
                        <li>Historia de la Música VI</li>
                        <li>Técnica Instrumental VI</li>
                        <li>Música de Cámara II</li>
                        <li>Improvisación II</li>
                        <li>Pedagogía Musical II</li>
                    </ul>
                </div>
            </div>

            <div className="containerButtonSemesterStudyPlan">
                <button className="buttonDownloadSemesterStudyPlan" onClick={() => { descargarPDF('files/mallaInterpretacionMusical.pdf', 'mallaInterpretacionMusical.pdf') }}>
                    DESCARGAR MALLA AQUÍ
                </button>
            </div>
        </>
    );
}

export default SemestersStudyPlan;