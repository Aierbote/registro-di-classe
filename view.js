// File per modificare il Prensentation Layer (aka aggire sull' HTML modificando il DOM)

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

  // TODO: questo funziona solo sul testo, non sul div arrotondato
  if (goToStudentsList) {
    goToStudentsList.addEventListener('click', notImplemented);
  }

  if (goToLectures) {
    goToLectures.addEventListener('click', notImplemented);
  }

  // TODO: questo funziona solo sul testo, non sul div arrotondato
  if (deleteRegister) {
    deleteRegister.addEventListener('click', notImplemented);
  }

  if (goToSubject) {
    goToSubject.forEach(elem =>
      elem.addEventListener('click', notImplemented)
    );
  }




});


// // Export delle funzioni
// module.exports = {
//   notImplemented
// };