// JavaScript equivalent for TRegister interface
let TRegister = {
  id: '',
  name: '',
  students: [],
  votes: [],
  attendances: []
};

// JavaScript equivalent for TStudent interface
let TStudent = {
  id: '',
  name: '',
  lastName: '',
  email: '',
  lectures: []
};

// JavaScript equivalent for TAttendance interface
let TAttendance = {
  id: '',
  Date:new Date(),
  argoument: '',
  students: []//array<{nome, arrivo, uscita}>
};
