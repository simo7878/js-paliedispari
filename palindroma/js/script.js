//Scrivi una funzione per capire se la parola è palindroma

var parolaUtente = prompt('inserisci una parola');

function rigiraParola(parola) {
  var parolaReverse = '';
  for (var i = parola.lenght -1; i >= 0; i--); {
    parolaReverse += parola[i];
  }
  return parolaReverse;
}

var parolaGirata = rigiraParola(parolaUtente);
if (parolaGirata == parolaUtente) {
  console.log('palindroma');
} else {
  console.log('non è palindroma');
}
