// File per modificare il Prensentation Layer (aka aggire sull' HTML modificando il DOM)

//DOM declarations
const materie = document.querySelectorAll('.Materia');
const addMateriaBtn = materie[materie.length - 1];
const lista = document.querySelector('.Lista');

const notImplemented = () => {
  alert("Not Implemented Yet");
}

addMateriaBtn.addEventListener('click', () => {
  const newMateria = addMateriaBtn.cloneNode(true);

  // dobbiamo entrare dentro h4 per mettere il testo
  newMateria.children[0].children[0].innerText = 'Nuova Materia';
  lista.insertBefore(newMateria, addMateriaBtn);
});

// // Export delle funzioni
// module.exports = {
//   notImplemented
// };