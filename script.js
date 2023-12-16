// Array di registri e studenti
const registers = [];
const students = [];

// ultimo id per gli elementi di Registers
const lastRegId = "0";


// Funzione per ottenere la lista dei registri
const getRegisterList = () => {
  return registers;
};

// Funzione per ottenere uno specifico registro
const getRegister = (id) => {
  for (let i = 0; i < registers.length; i++){
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
const updateRegister = () => {
  // Implementa la logica per aggiornare un registro
};

// Funzione per creare uno studente
const createStudent = () => {
  connectStudentToRegister();
  // Implementa la logica per creare uno studente
};

// Funzione per collegare uno studente a un registro
const connectStudentToRegister = () => {
  // Implementa la logica per collegare uno studente a un registro
};

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
const updateStudent = () => {
  // Implementa la logica per aggiornare uno studente
};

// Funzione per ottenere la lista degli studenti
const getStudentList = () => {
  return students;
};

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
