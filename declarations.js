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
  //"yyyy-MM-ddTh:m:s" This is standardized and will work reliably
  Date:new Date('yyyy-mm-dd'),
  argument: '',
  attendants: [
    {
      //id studente? potrebbe bastare e poi semplicemente prendere
      //nome e cognome dell'id inserito? o sarebbe troppo complicato?
      // name: '',
      // lastName: '',
      studentId: '',
      arrivo: 'hh:mm', 
      uscita: 'hh:mm'
    }
  ]
};
