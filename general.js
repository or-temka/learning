'use strict';

function textLog(...text){
  let placeForText = document.querySelector('.input-data__code');
  let doneText = '';
  text.forEach(word => {
    doneText += word;
  });
  placeForText.innerHTML = doneText;
}