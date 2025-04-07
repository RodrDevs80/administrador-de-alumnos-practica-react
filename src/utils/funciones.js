export const cleanInput = (e) => {
    e.target.apellido.value = "";
    e.target.nombre.value = "";
    e.target.dni.value = "";
    e.target.nacimiento.value = "";
    e.target.domicilio.value = "";
}

export const getAlumnoById = (id, arreglo) => {
    const alumno = arreglo.find(item => item.id === Number(id));
    if (alumno) {
        return alumno;
    }
    return null;
}