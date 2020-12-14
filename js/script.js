alert('Buongiorno risponda alle seguenti domande per sapere il costo del suo biglietto del treno');

var kiloM = prompt('Quanti Km deve percorrere?(Inserire solamente la cifra)')

if(isNaN(kiloM)){
  alert('INSERIRE SOLAMENTE LA CIFRA')
}else {
  var age = prompt('Qual\'è la sua età?(Inserire solamente la cifra)');

  if (isNaN(age)) {
    alert('INSERIRE SOLAMENTE LA CIFRA')
  }else {
    var kiloM = parseInt(kiloM);

    var age = parseInt(age);

    var ticketCost = kiloM * 0.21;

    if (age < 18) {
      var ticketCost = ticketCost * 0.8;
    }

    if (age >= 65) {
      var ticketCost = ticketCost * 0.6;
    }

    alert('Il suo biglietto costa ' + ticketCost + ' €');
  }
}
