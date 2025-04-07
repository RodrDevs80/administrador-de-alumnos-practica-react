import { useState } from "react";
import { alumnos } from "../mock/dataAlumnos";

export const useStudentList = () => {
  const [students, setStudent] = useState(alumnos);
  const addStudent = (NewStudent) => {
    setStudent([...students, NewStudent]);
  };
  const removeStudent = (id) => {
    setStudent((statePre) => statePre.filter((item) => item.id !== Number(id)));
  };
  const editStudent = (id, alumno, alumnos) => {
    const student = alumnos.find((item) => item.id === Number(id));
    if (!student) {
      return null;
    }
    const newLista = alumnos.map((item) =>
      item.id === alumno.id
        ? {
            ...item,
            nombre: alumno.nombre,
            apellido: alumno.apellido,
            dni: alumno.dni,
            fechaDeNacimiento: alumno.fechaDeNacimiento,
            domicilio: alumno.domicilio,
            cursada: alumno.cursada,
            periodo: alumno.periodo,
          }
        : item
    );
    setStudent(newLista);
    console.log("Desde HOOK:", newLista);
  };
  return { students, addStudent, removeStudent, editStudent };
};
