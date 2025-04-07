import { Link, useNavigate, useParams } from "react-router-dom";
import { getAlumnoById } from "../utils/funciones";
import { useState } from "react";

export const EditStudent = ({ alumnos, editStudent }) => {
  const navigate = useNavigate();
  const id = useParams().id;
  const [alumno, setAlumno] = useState(getAlumnoById(id, alumnos) || {});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleEditAlumno = (e) => {
    e.preventDefault();
    editStudent(id, alumno, alumnos);
    navigate("/");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "15px",
        }}
      >
        <Link to="/">⬅️ Volver</Link>
        <h2>Modifica los datos del alumno</h2>
        <img width="80px" src="../src/assets/img/edit.svg" alt="logo edit" />
      </div>
      <form>
        <div className="div-1">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={alumno.nombre}
            onChange={handleChange}
          />
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={alumno.apellido}
            onChange={handleChange}
          />
          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={alumno.dni}
            onChange={handleChange}
          />
          <label htmlFor="nacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            id="nacimiento"
            name="nacimiento"
            value={alumno.fechaDeNacimiento.split("-").reverse().join("-")}
            onChange={handleChange}
          />
        </div>
        <div className="div-2">
          <label htmlFor="domicilio">Domicilio</label>
          <input
            type="text"
            id="domicilio"
            name="domicilio"
            value={alumno.domicilio}
            onChange={handleChange}
          />
          <label htmlFor="cursada">Cursada</label>
          <select
            name="cursada"
            id="cursada"
            value={alumno.cursada}
            onChange={handleChange}
          >
            <option value="1 Año">1 año</option>
            <option value="2 Año">2 año</option>
            <option value="3 Año">3 año</option>
            <option value="4 Año">4 año</option>
            <option value="5 Año">5 año</option>
          </select>
          <label htmlFor="periodo">Periodo</label>
          <select
            name="periodo"
            id="periodo"
            value={alumno.periodo}
            onChange={handleChange}
          >
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
          </select>
        </div>
        <div className="div-btn">
          <button type="submit" onClick={handleEditAlumno}>
            Guardar Alumno
          </button>
        </div>
      </form>
    </>
  );
};
