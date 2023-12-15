// Import delle dichiarazioni
// Assicurati che il percorso sia corretto
// Dal tuo esempio sembra che le dichiarazioni siano in "./declarations"
const { TRegister, TStudent } = require("./declarations");

// Array di registri e studenti
const registers = [];
const students = [];


const lastStudId = "0";

// Funzione per ottenere la lista dei registri
const getRegisterList = () => {
  return registers;
};

// Funzione per creare un registro
const createRegister = (name) => {
  // Implementa la logica per creare un registro
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