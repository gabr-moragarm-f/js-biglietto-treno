var characteristic = prompt('Ciao dammi il valore della tua caratteristica e io ti dirò il tuo modificatore (Inserire solamente la cifra)')

if(isNaN(characteristic)){
  alert('INSERIRE SOLAMENTE LA CIFRA')
}else {
  if (characteristic >= 10) {
    var mod = Math.floor((characteristic - 10) / 2);
  } else {
    var mod = Math.floor(((characteristic - 10) / 2) - 0.5);
  }

  console.log(mod);

  alert('Il tuo mod caratteristica è ' + mod);
}
