import { register, students } from "./script.js";

// File per modificare il Prensentation Layer (aka aggire sull' HTML modificando il DOM)
// Necessario importare i file da script.js!


const notImplemented = () => {
  alert("Not Implemented Yet");
}

const createStudentList = ({registerID}) => {
  const register = getRegister(registerId);
  const students = register.students;

  const main = document.querySelector('.VisualeLezione');

  let template = 
  `
  <table id="registro-classe">
  <tr>
    <th>
      nome
    </th>
    <th>
      cognome
    </th>
    <th>
      mail
    </th>
    <th>
      telefono
    </th>
  </tr>
</table>
  `

  for (let i = 0; i < students.length; i++){
    template += 
    `
  <tr>
    <td>${student.name}</td>
    <td>${student.lastName}</td>
    <td>${student.mail}</td>
    <td>${student.telefono}</td>
  </tr>
  `
  }

  main.innerHTML += template;

}

// // Export delle funzioni
// module.exports = {
//   notImplemented
// };