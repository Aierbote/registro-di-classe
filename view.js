// File per modificare il Prensentation Layer (aka aggire sull' HTML modificando il DOM)

//DOM declarations
const btn = document.querySelectorAll('.Materia')[1];
const materia = document.querySelectorAll('.Materia')[0];
const lista = document.querySelector('.Lista');

const notImplemented = () => {
  alert("Not Implemented Yet");
}

btn.addEventListener('click', () => {
  const newMateria = materia.cloneNode(true);

  // li > button > h4 > "nuova materia" (innerText)
  newMateria.children[0].children[0].innerText = 'Nuova Materia';
  lista.insertBefore(newMateria, btn);
});

// // Export delle funzioni
// module.exports = {
//   notImplemented
// };