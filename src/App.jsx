import "./App.css";
import { MainStudents } from "./components/MainStudents";
import { VistaStudent } from "./components/VistaStudent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStudentList } from "./hook/useStudentList";
import { EditStudent } from "./components/EditStudent";

function App() {
  const { students, addStudent, removeStudent, editStudent } = useStudentList();
  console.log(students);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainStudents
              students={students}
              addStudent={addStudent}
              removeStudent={removeStudent}
            />
          }
        />
        <Route
          path="/vista-student/:id"
          element={<VistaStudent alumnos={students} />}
        />
        <Route
          path="/edit-student/:id"
          element={<EditStudent alumnos={students} editStudent={editStudent} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
