/** @format */

// Array di registri e studenti
const registers = [];
const students = [];

// ultimo id per gli elementi di Registers
let lastRegId = '0';
// ultimo id per gli elementi di Students
let lastStudId = '0';
// ultimo id per gli le attendances dentro ogni Register (univoco)
let lastAttId = '0';

// Funzione per rimuovere whitespace prima & dopo la stringa e per farne il Title Case
const normalizeName = string_ => {
  string_ = string_.trim();
  string_ = string_.charAt(0).toUpperCase() + string_.substr(1).toLowerCase();
  return string_;
};

// Funzione per ottenere la lista dei registri
const getRegisterList = () => {
  return registers;
};

// Funzione per ottenere uno specifico registro
const getRegister = id => {
  for (let i = 0; i < registers.length; i++) {
    if (registers[i].id === id) {
      return registers[i];
    }
  }
  return null;
};

// Funzione per creare un registro
const createRegister = ({ name, students, votes, attendances }) => {
  lastRegId = parseInt(lastRegId);
  lastRegId++;

  name = normalizeName(name);

  // Implementa la logica per creare un registro
  const sampleRegister = {
    id: '' + lastRegId,
    name: name,
    students: [],
    votes: [],
    attendances: [],
  };

  sampleRegister.students.push(...students);
  sampleRegister.votes.push(...votes);
  sampleRegister.attendances.push(...attendances);

  registers.push(sampleRegister);

  // Chiamata alla funzione per mostrare il registro nel DOM
  showRegisterInDOM(sampleRegister);
};

// Funzione per eliminare un registro
const deleteRegister = id => {
  for (let i = 0; i < registers.length; i++) {
    if (registers[i].id == id) {
      console.log(`register ${registers[i].id} deleted.`);
      registers.splice(i, 1);
      return;
    }
  }
  console.log(`id ${id} not found in registers`);
};

// Funzione per aggiornare un registro
const updateRegister = ({ id, name, students, votes, attendances }) => {
  const register = getRegister(id);
  if (register === null) {
    console.log(`no register with id: ${id} found.`);
    return;
  }

  name = normalizeName(name);

  register.name = name || register.name;
  register.students = students || register.students;
  register.votes = votes || register.votes;
  register.attendances = attendances || register.attendances;

  console.log(`updated register with id ${id} : ${register}`);
};

// Funzione per mostrare un registro nel DOM
const showRegisterInDOM = register => {
  // Ottieni il riferimento all'elemento del DOM in cui vuoi mostrare il registro
  const containerElement = document.getElementById('registro-container');

  // Assicurati che l'elemento esista prima di procedere
  if (!containerElement) {
    console.error('Elemento del DOM non trovato.');
    return;
  }

  // Crea un elemento div per rappresentare il registro
  const registerElement = document.createElement('div');
  registerElement.className = 'registro'; // Aggiungi eventuali classi CSS necessarie

  // Aggiungi il contenuto del registro all'elemento
  registerElement.innerHTML = `
    <h2>${register.name}</h2>
    <p>Numero di studenti: ${register.students.length}</p>
    <!-- Aggiungi altri dettagli del registro secondo le tue esigenze -->
  `;

  // Aggiungi l'elemento del registro al contenitore nel DOM
  containerElement.appendChild(registerElement);
};

// Funzione per aggiungere un registro al DOM
const addRegisterToDOM = registerId => {
  const register = getRegister(registerId);

  if (register) {
    showRegisterInDOM(register);
  } else {
    console.error(`Registro con ID ${registerId} non trovato.`);
  }
};

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
    attendants: [], //array<{nome, arrivo, uscita}>
  };

  Attendance.attendants.push(...attendants);
  getRegister(registerId).attendances.push(Attendance);
};

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
};

// Funzione per creare uno studente
const createStudent = ({ name, lastName, email, lectures }) => {
  lastStudId = parseInt(lastStudId);
  lastStudId++;

  name = normalizeName(name);
  lastName = normalizeName(lastName);

  const sampleStudent = {
    id: '' + lastStudId,
    name: name,
    lastName: lastName,
    email: email,
    lectures: [],
  };

  sampleStudent.lectures.push(...lectures);

  students.push(sampleStudent);
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
};

// Funzione per eliminare uno studente
const deleteStudent = id => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      console.log(`student ${students[i].id} deleted.`);
      students.splice(i, 1);
      return;
    }
  }
  console.log(`id ${id} not found in students`);
};

// Funzione per aggiornare uno studente
const updateStudent = ({ id, name, lastName, email, lectures }) => {
  const student_ = getStudent(id);

  name = normalizeName(name);
  lastName = normalizeName(lastName);

  if (student_ == undefined) {
    console.log(`id ${id} not found in students`);
    return;
  }

  console.log(`updating student with id ${id} : ${student_}`);

  student_.name = name || student_.name;
  student_.lastName = lastName || student_.lastName;
  student_.email = email || student_.email;
  student_.lectures = lectures || student_.lectures;

  console.log(`updated student with id ${id} : ${student_}`);
};

// Funzione per ottenere la lista degli studenti
const getStudentList = () => {
  return students;
};

// Funzione per ottenere uno specifico studente
const getStudent = id => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      console.log(`student with id ${id} found in students.`);
      return students[i];
    }
  }
  console.log(`id ${id} not found in students`);
  return null;
};

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
