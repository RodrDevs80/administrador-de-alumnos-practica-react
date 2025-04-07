import { alumnos } from "../mock/dataAlumnos";
import { cleanInput } from "../utils/funciones";
import Swal from "sweetalert2";

export const NewStudent = ({ addStudent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlumno = {
      id: Number(
        (Math.random() * (1000 - alumnos.length) + alumnos.length).toFixed()
      ),
      apellido: e.target.apellido.value,
      nombre: e.target.nombre.value,
      dni: e.target.dni.value,
      fechaDeNacimiento: e.target.nacimiento.value
        .split("-")
        .reverse()
        .join("-"),
      domicilio: e.target.domicilio.value,
      cursada: e.target.cursada.value,
      periodo: e.target.periodo.value,
    };
    if (!Object.values(newAlumno).some((item) => item === "")) {
      addStudent(newAlumno);
      cleanInput(e);
    } else {
      Swal.fire({
        title: "Error!",
        text: '"Debe completar todos los campos ❌',
        icon: "error",
        confirmButtonText: "Salir",
      });
    }
  };

  return (
    <>
      <h2>Ingresa los datos del alumno</h2>
      <form onSubmit={handleSubmit}>
        <div className="div-1">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" />
          <label htmlFor="dni">DNI</label>
          <input type="text" id="dni" name="dni" />
          <label htmlFor="nacimiento">Fecha de Nacimiento</label>
          <input type="date" id="nacimiento" name="nacimiento" />
        </div>
        <div className="div-2">
          <label htmlFor="domicilio">Domicilio</label>
          <input type="text" id="domicilio" name="domicilio" />
          <label htmlFor="cursada">Cursada</label>
          <select name="cursada" id="cursada">
            <option value="1 Año">1 año</option>
            <option value="2 Año">2 año</option>
            <option value="3 Año">3 año</option>
            <option value="4 Año">4 año</option>
            <option value="5 Año">5 año</option>
          </select>
          <label htmlFor="periodo">Periodo</label>
          <select name="periodo" id="periodo">
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
          </select>
        </div>
        <div className="div-btn">
          <button type="submit">Guardar Alumno</button>
        </div>
      </form>
    </>
  );
};
