/**apellido: 'Martínez',
        nombre: 'Pedro',
        dni: '43890123',
        fechaDeNacimiento: '15-01-2006',
        domicilio: 'Bv. Central 789',
        cursada: '1 año',
        periodo: '2025' */

import { Link, useParams } from "react-router-dom";

export const VistaStudent = ({ alumnos }) => {
  const id = useParams().id;
  const alumno = alumnos.find((alumno) => alumno.id === Number(id));

  return (
    <section className="vista">
      <div className="header-vista">
        <img width="100px" src="../src/assets/img/user.svg" alt="logo user" />
        <h2>Datos del Alumno</h2>
        <Link to="/">⬅️ Volver</Link>
      </div>
      <div className="main-vista">
        <h3>Nombre: {alumno.nombre}</h3>
        <h3>Apellido: {alumno.apellido}</h3>
        <h4>DNI: {alumno.dni}</h4>
        <h4>Fecha de Nacimiento: {alumno.fechaDeNacimiento}</h4>
        <h4>Domicilio: {alumno.domicilio}</h4>
        <h4>Cursada: {alumno.cursada}</h4>
        <h4>Periodo: {alumno.periodo}</h4>
      </div>
      <div className="btn-imprimir">
        <button onClick={() => window.print()}>Imprimir 🖨️</button>
      </div>
    </section>
  );
};
