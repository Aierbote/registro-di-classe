// File per modificare il Prensentation Layer (aka aggire sull' HTML modificando il DOM)
import { registers } from "./script.js";

const notImplemented = () => {
  alert("Not Implemented Yet");
}

// inserire le manipolazioni del dom qui dentro
document.addEventListener('DOMContentLoaded', function () {
  var goToStudentsList = document.querySelector('.ElencoStudenti');
  var goToLectures = document.querySelector('.BottoneMostraLezioni');
  var deleteRegister = document.querySelector('.EliminaRegistro');

  // FIXME : Attenzione a questi, le classi sono un bel po' confuse
  var goToSubject = document.querySelectorAll('.TitoloMateria');
  // var goToSubject2 = document.querySelector('.TitoloMateria .Chimica'); // NOTE : ne serve uno per ciascun bottone quando creato nel DOM


  // NOTE : questo funzionava solo sul testo, ora sul div arrotondato. MAYBE deve essere rifinito
  if (goToStudentsList) {
    goToStudentsList.parentNode.parentNode.addEventListener('click', notImplemented);
  }

  if (goToLectures) {
    goToLectures.addEventListener('click', notImplemented);
  }

  // NOTE : questo funzionava solo sul testo, ora sul div arrotondato. MAYBE deve essere rifinito
  if (deleteRegister) {
    deleteRegister.parentNode.addEventListener('click', notImplemented);
  }

  if (goToSubject) {
    // FIXME : put a separated event listener to the button AddRegister
    goToSubject.forEach(elem =>
      elem.addEventListener('click', notImplemented)
    );
  }




});


// // Export delle funzioni
// module.exports = {
//   notImplemented
// };