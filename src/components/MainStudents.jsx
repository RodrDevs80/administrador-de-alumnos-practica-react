import { Head } from "./Head";
import { ListStudents } from "./ListStudents";
import { NewStudent } from "./NewStudent";

export const MainStudents = ({ students, addStudent, removeStudent }) => {
  return (
    <>
      <Head />
      <main>
        <NewStudent addStudent={addStudent} />
        <ListStudents listStudens={students} removeStudent={removeStudent} />
      </main>
    </>
  );
};
