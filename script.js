// Import delle dichiarazioni
// Assicurati che il percorso sia corretto
// Dal tuo esempio sembra che le dichiarazioni siano in "./declarations"
const { TRegister, TStudent } = require("./declarations");

// Array di registri e studenti
const registers = [];
const students = [];

// Funzione per ottenere la lista dei registri
const getRegisterList = () => {
  return registers;
};

// Funzione per creare un registro
const createRegister = (name) => {
  // Implementa la logica per creare un registro
};

// Funzione per eliminare un registro
const deleteRegister = (id) => {
  for (let i = 0; i < registers.length; i++) {
    if (registers[i].id == id) {
      console.log(`register ${registers[i].id} deleted.`);
      registers.splice(i, 1);
    }
  }

  console.log(`id ${id} not found in registers`);
  return null;
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
