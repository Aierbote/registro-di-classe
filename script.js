// Array di registri e studenti
const registers = [];
const students = [];

// ultimo id per gli elementi di Registers
let lastRegId = "0";
// ultimo id per gli elementi di Students
let lastStudId = "0";

// Funzione per ottenere la lista dei registri
const getRegisterList = () => {
  return registers;
};

// Funzione per ottenere uno specifico registro
const getRegister = (id) => {
  for (let i = 0; i < registers.length; i++) {
    //fixare questo e metterlo come non strict comparison?
    if (registers[i].id === id) { return registers[i] };
  }
  return null;
}

// Funzione per creare un registro
const createRegister = ({ name, students, votes, attendances }) => {
  lastRegId = parseInt(lastRegId);
  lastRegId++;

  // Implementa la logica per creare un registro
  const sampleRegister = {
    id: '' + lastRegId,
    name: name,
    students: [],
    votes: [],
    attendances: []
  };

  sampleRegister.students.push(...students);
  sampleRegister.votes.push(...votes);
  sampleRegister.attendances.push(...attendances);



  registers.push(sampleRegister);
};

// Funzione per eliminare un registro
const deleteRegister = (id) => {
  for (let i = 0; i < registers.length; i++) {
    if (registers[i].id == id) {
      console.log(`register ${registers[i].id} deleted.`);
      registers.splice(i, 1);
      return;
    }
  }
  console.log(`id ${id} not found in registers`);
}

// Funzione per aggiornare un registro
const updateRegister = ({ id, name, students, votes, attendances }) => {

  const register = getRegister(id);
  if (register === null){
    console.log(`no register with id: ${id} found.`);
    return;
  }

  register.name = name || register.name;
  register.students = students || register.students;
  register.votes = votes || register.votes;
  register.attendances = attendances || register.attendances;

  console.log(`updated register with id ${id} : ${register}`);
}

// Funzione per creare uno studente
const createStudent = ({ name, lastName, email, lectures }) => {
  lastStudId = parseInt(lastStudId);
  lastStudId++;

  const sampleStudent = {
    id: '' + lastStudId,
    name: name,
    lastName: lastName,
    email: email,
    lectures: []
  }

  sampleStudent.lectures.push(...lectures);


  students.push(sampleStudent);
};

// Funzione per collegare uno studente a un registro
const connectStudentToRegister = (studentId, classId) => {
	const register = getRegister(classId);
  const student = getStudent(studentId);

  console.log(register);
  
  for (let i = 0; i < register.students.length; i++){
  	if (register.students[0].id == student.id){
    	console.log('Student is already assigned to subject.');
      return;
    }
  }
  
  register.students.push(student);
  console.log('student assigned to subject successfully.');
}

// Funzione per eliminare uno studente
const deleteStudent = (id) => {
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

  if (student_ == undefined) {
    console.log(`id ${id} not found in students`);;
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
const getStudent = (id) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      console.log(`student with id ${id} found in students.`);
      return students[i]
    };
  }
  console.log(`id ${id} not found in students`);
  return null;
}


// Export delle funzioni
module.exports = {
  getRegisterList,
  createRegister,
  deleteRegister,
  updateRegister,
  createStudent,
  connectStudentToRegister,
  deleteStudent,
  updateStudent,
  getStudentList,
};
