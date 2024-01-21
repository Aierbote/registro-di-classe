// ultimo id per gli le attendances dentro ogni Register (univoco)
let lastAttId = "0";

// Funzione per rimuovere whitespace prima & dopo la stringa e per farne il Title Case
const normalizeName = (string_) => {
  string_ = string_.trim();
  string_ = string_.charAt(0).toUpperCase() + string_.substr(1).toLowerCase();
  return string_;
}

const getRegisterList = () => {
  return JSON.parse(localStorage.getItem("registers"));
};

const getRegister = (id) => {
  const registers = getRegisterList();
  const registerFound = registers.find((register) => register.id === "" + id);

  return registerFound;
}

// Funzione per creare un registro
const createRegister = ({ name, students, votes, attendances }) => {
  const prevRegisters = getRegisterList() || [];

  const lastRegId = JSON.parse(localStorage.getItem("lastRegId")) || "0";
  const newRegId = parseInt(lastRegId) + 1;

  const newRegisters = [...prevRegisters, {
    id: '' + newRegId,
    name,
    students: students || [],
    votes: votes || [],
    attendances: attendances || []
  }];

  console.log(`register ${JSON.stringify(newRegisters.slice(-1)[0])} created successfully.`);

  localStorage.setItem("registers", JSON.stringify(newRegisters));
  localStorage.setItem("lastRegId", JSON.stringify(newRegId));
};

// Funzione per eliminare un registro
const deleteRegister = (id) => {
  const foundRegister = getRegister(id);

  if (!!foundRegister) {
    const prevRegisters = getRegisterList();
    const newRegisters = prevRegisters.filter(({ id: idRegister }) =>
      idRegister !== "" + id
    );

    console.log(`register ${JSON.stringify(foundRegister)} deleted.`);
    localStorage.setItem("registers", JSON.stringify(newRegisters));
    return;
  }
  console.log(`id ${id} not found in registers`);
}

// Funzione per aggiornare un registro
const updateRegister = ({ id, name, students, votes, attendances }) => {
  const oldRegister = getRegister(id);

  if (!!oldRegister) {
    const prevRegisters = getRegisterList();

    console.log(`updating register with id ${id} : ${JSON.stringify(oldRegister)}`);

    const newRegisters = prevRegisters.map((register) => {
      return (register.id === "" + id)
        ? {
          id: "" + id,
          name: name || register.name,
          students: students || register.students,
          votes: votes || register.votes,
          attendances: attendances || register.attendances
        }
        : { ...register };
    });

    const updatedRegister = newRegisters.find((stud) => stud.id === "" + id)
    console.log(`updated register with id ${id} : ${JSON.stringify(updatedRegister)}`);
    localStorage.setItem("registers", JSON.stringify(newRegisters));
    return;
  }

  console.log(`id ${id} not found in registers`);
}

// Controllare se l'arrivo non deve superare un certo valore
// che sarebbe l'orario di uscita?
// poi si dovrebbe anche controllare che non ci siano due lezioni con lo stesso timestamp
const createAttendance = ({ registerId, date, argument, attendants }) => {
  lastAttId = parseInt(lastAttId);
  lastAttId++;

  //attendance dovrebbe avere anche un id, cosi possiamo avere anche presenze sdoppiate
  const Attendance = {
    date: new Date(date), //"yyyy-MM-ddTh:m:s" This is standardized and will work reliably
    id: '' + lastAttId,
    argument: argument,
    attendants: [] //array<{nome, arrivo, uscita}>
  };

  Attendance.attendants.push(...attendants);
  getRegister(registerId).attendances.push(Attendance);
}

const deleteAttendance = ({ registerId, attendanceId }) => {
  const lessons = getRegister(registerId).attendances;
  for (let index = 0; index < lessons.length; index++) {
    if (lessons[index].id === attendanceId) {
      lessons.splice(index, 1);
      console.log(`lesson with id: ${attendanceId} removed successfully.`);
      return;
    }
  }
  console.log(`lesson with id: ${attendanceId} not found.`);
}

// Funzione per ottenere la lista degli studenti
const getStudentList = () => {
  return JSON.parse(localStorage.getItem("students"));
};

// Funzione per ottenere uno specifico studente
const getStudent = (id) => {
  const students = getStudentList();
  const studentFound = students.find((student) => student.id === "" + id);

  return studentFound;
}

// Funzione per creare uno studente
const createStudent = ({ name, lastName, email, lectures }) => {
  const prevStudents = getStudentList() || [];

  const lastStudId = JSON.parse(localStorage.getItem("lastStudId")) || "0";
  const newStudId = parseInt(lastStudId) + 1;

  const newStudents = [...prevStudents, {
    id: '' + newStudId,
    name: normalizeName(name),
    lastName: normalizeName(lastName),
    email,
    lectures,
  }];

  console.log(`student ${JSON.stringify(newStudents.slice(-1)[0])} created successfully.`);

  localStorage.setItem("students", JSON.stringify(newStudents));
  localStorage.setItem("lastStudId", JSON.stringify(newStudId));
};

// Funzione per eliminare uno studente
const deleteStudent = (id) => {
  const foundStudent = getStudent(id);

  if (!!foundStudent) {
    const prevStudents = getStudentList();
    const newStudents = prevStudents.filter(({ id: idStudent }) =>
      idStudent !== "" + id
    );

    console.log(`student ${JSON.stringify(foundStudent)} deleted.`);
    localStorage.setItem("students", JSON.stringify(newStudents));
    return;
  }
  console.log(`id ${id} not found in students`);
};

// Funzione per aggiornare uno studente
const updateStudent = ({ id, name: newName, lastName: newLastName, email: newEmail, lectures: newLectures }) => {
  const oldStudent = getStudent(id);

  if (!!oldStudent) {
    const prevStudents = getStudentList();

    console.log(`updating student with id ${id} : ${JSON.stringify(oldStudent)}`);

    const newStudents = prevStudents.map((stud) => {
      return (stud.id === "" + id)
        ? {
          id: "" + id,
          name: normalizeName(newName) || stud.name,
          lastName: normalizeName(newLastName) || stud.lastName,
          email: newEmail || stud.email,
          lectures: newLectures || stud.lectures
        }
        : { ...stud };
    });

    const updatedStudent = newStudents.find((stud) => stud.id === "" + id)
    console.log(`updated student with id ${id} : ${JSON.stringify(updatedStudent)}`);
    localStorage.setItem("students", JSON.stringify(newStudents));
    return;
  }

  console.log(`id ${id} not found in students`);
};

// Funzione per collegare uno studente a un registro
const connectStudentToRegister = (studentId, classId) => {
  const register = getRegister(classId);
  const student = getStudent(studentId);

  console.log(register);

  for (let i = 0; i < register.students.length; i++) {
    if (register.students[i].id == student.id) {
      console.log('Student is already assigned to subject.');
      return;
    }
  }

  register.students.push(student);
  console.log(`student assigned to ${register.name} successfully.`);
}






// // Export delle funzioni
// module.exports = {
//   getRegisterList,
//   createRegister,
//   deleteRegister,
//   updateRegister,
//   createStudent,
//   connectStudentToRegister,
//   deleteStudent,
//   updateStudent,
//   getStudentList,
//   normalizeName,
//   getRegister,
//   getStudent
// };

export { registers };