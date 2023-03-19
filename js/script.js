/*
Visualizzare a schermo una password generata con i dati forniti dall'utente (nome, cognome e colore preferito) seguiti dall'anno in corso

  1. Salvare in una variabile il nome fornito dall'utente
  2. Salvare in una variabile il cognome fornito dall'utente
  3. Salvare in una variabile il colore preferito dell'utente
  4. Creare una variabile composta dai dati forniti
  5. Visualizzare a schermo il risultato ottenuto

*/

const currentYear = '23';
const name = prompt('Inserisci il tuo nome');
const surname = prompt('Inserisci il tuo cognome');
const favColor = prompt('Inserisci il tuo colore preferito');

console.log('nome: ', name, ' cognome: ', surname, ' colore: ', favColor);

const pwdGen = name + surname + favColor + currentYear;

console.log('pwdGen: ', pwdGen);

const output = `
  <p class="fs-3">La tua password è:</p>
  <span class="text-danger"> ${pwdGen} </span>
  `;

document.getElementById('pwdGen').innerHTML = output;
