//L’utente sceglie pari o dispari e un numero da 1 a 5.
//Generiamo un numero random (sempre da 1
//a 5) per il computer.
//Sommiamo i due numeri
//dichiariamo chi ha vinto (controlliamo se la somma da pari o dispari).

var pariDispari = prompt('pari o dispari?')
console.log(pariDispari);

var numero = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(numero);

var numeroRandom = Math.floor(Math.Random() * 5) + 1;
console.log(numeroRandom);

var numeroEstratto = estrazione(numero, numeroRandom);
if (numeroEstratto) = estrazione(numero, numeroRandom);

if (numeroEstratto == pariDispari) {
  alert('hai vinto');
} else {
  return 'dispari';
}
