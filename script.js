// Array di registri e studenti
const registers = [];
const students = [];

// ultimo id per gli elementi di Registers
const lastRegId = "0";


// Funzione per ottenere la lista dei registri
const getRegisterList = () => {
  return registers;
};

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
const deleteRegister = () => {
  // Implementa la logica per eliminare un registro
};

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
const deleteStudent = () => {
  // Implementa la logica per eliminare uno studente
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