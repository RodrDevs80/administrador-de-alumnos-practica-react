import { Link } from "react-router-dom";

export const ListStudents = ({ listStudens, removeStudent }) => {
  const handleBorrar = (id) => {
    removeStudent(id);
  };

  return (
    <>
      <hr />
      <h2>Listado de Alumnos</h2>
      <table>
        <thead>
          <tr>
            <td>Acciones</td>
            <td>Apellido</td>
            <td>Nombre</td>
            <td>DNI</td>
            <td>Fecha de Nacimiento</td>
            <td>Domicilio</td>
            <td>Cursada</td>
            <td>Periodo</td>
          </tr>
        </thead>
        <tbody>
          {listStudens &&
            listStudens.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link to={`/edit-student/${item.id}`}>
                    <img
                      width="25px"
                      src="./src/assets/img/edit.svg"
                      alt="logo editar"
                    />
                  </Link>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleBorrar(item.id)}
                  >
                    <img
                      width="20px"
                      src="./src/assets/img/borrar.svg"
                      alt="logo borrar"
                    />
                  </a>
                  <Link to={`/vista-student/${item.id}`}>
                    <img
                      width="20px"
                      src="./src/assets/img/ver.svg"
                      alt="logo ver"
                    />
                  </Link>
                </td>
                <td>{item.apellido}</td>
                <td>{item.nombre}</td>
                <td>{item.dni}</td>
                <td>{item.fechaDeNacimiento}</td>
                <td>{item.domicilio}</td>
                <td>{item.cursada}</td>
                <td>{item.periodo}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
