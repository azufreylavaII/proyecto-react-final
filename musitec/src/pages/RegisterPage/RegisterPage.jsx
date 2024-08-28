import { useState, useEffect } from "react";
import "./RegisterPage.css";

function RegisterPage() {
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const form = document.getElementById("registrationForm");

    const handleSubmit = (event) => {
      event.preventDefault();

      const nombres = document.getElementById("nombres").value;
      const apellidoPaterno = document.getElementById("apellidoPaterno").value;
      const apellidoMaterno = document.getElementById("apellidoMaterno").value;
      const correo = document.getElementById("correo").value;
      const dni = document.getElementById("dni").value;
      const celular = document.getElementById("celular").value;
      const cursos = document.querySelector('select[name="cursos"]').value;
      const check = document.querySelector('input[name="check"]').checked;

      if (
        nombres &&
        apellidoPaterno &&
        apellidoMaterno &&
        correo &&
        dni &&
        celular &&
        cursos &&
        check
      ) {
        setFeedback("Formulario enviado con éxito.");
        setTimeout(() => {
          window.location.href = "./new";
        }, 1000);
      } else {
        setFeedback("Por favor, completa todos los campos requeridos.");
      }
    };

    form.addEventListener("submit", handleSubmit);

    // Manejo del clic para descargar el PDF
    const termsLink = document.getElementById("termsLink");
    termsLink.addEventListener("click", (event) => {
      event.preventDefault();
      const link = document.createElement("a");
      link.href = "/Terminos_y_Condiciones_Musitec.pdf";
      link.download = "Terminos_y_Condiciones.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    return () => {
      form.removeEventListener("submit", handleSubmit);
      termsLink.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
      <div className="body____custionario___dentro">
        <section className="body__cuestionario">
          <div className="enun1">
            <h1 id="l1">VACANTES LIMITADAS</h1>
            <h1 id="l2">Cierre de Inscripciones: 28 de agosto</h1>
          </div>
          <form id="registrationForm" className="registro">
            <input
              className="controls"
              id="nombres"
              type="text"
              name="nombres"
              placeholder="Nombres*"
              required
            />
            <div className="flex">
              <input
                className="controls"
                id="apellidoPaterno"
                type="text"
                name="apellidoPaterno"
                placeholder="Apellido Paterno*"
                required
              />
              <input
                className="controls"
                id="apellidoMaterno"
                type="text"
                name="apellidoMaterno"
                placeholder="Apellido Materno*"
                required
              />
            </div>
            <input
              className="controls"
              id="correo"
              type="email"
              name="correo"
              placeholder="E-mail*"
              required
            />
            <div className="flex">
              <input
                className="controls"
                id="dni"
                type="text"
                name="dni"
                placeholder="Nro. de DNI*"
                required
              />
              <input
                className="controls"
                id="celular"
                type="text"
                name="celular"
                placeholder="Celular*"
                required
              />
            </div>
            <select className="controls" name="cursos" required>
              <option value="">Seleccione una carrera o curso*</option>
              <option value="interpretacion">
                Carrera - Interpretación Musical
              </option>
              <option value="produccion">
                Carrera - Producción y Composición
              </option>
              <option value="pedagogia">Carrera - Pedagogía Musical</option>
              <option value="vocal_coach">Curso - Vocal Coach</option>
              <option value="tecnicas_grabacion">
                Curso - Técnicas de Grabación
              </option>
              <option value="teoria_musical">Curso - Teoría Musical</option>
            </select>
            <div className="flex">
              <input type="checkbox" name="check" id="check" required />
              <label htmlFor="check">
                Acepto los términos y condiciones que conllevan a dar mi
                información personal para fines educativos.
              </label>
            </div>
            <p id="question">
              <a href="#" id="termsLink">
                Términos y condiciones
              </a>
            </p>
            <button id="registerBtn" className="registrar" type="submit">
              Registrar
            </button>
            <div
              id="formFeedback"
              style={{ color: "black", textAlign: "center" }}
            >
              {feedback}
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default RegisterPage;
