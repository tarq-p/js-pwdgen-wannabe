var nome = prompt('Il tuo Nome?');
document.getElementById('nome').innerHTML = nome
// console.log(nome);
var cognome = prompt('Il tuo Cognome?');
document.getElementById('cognome').innerHTML = cognome
// console.log(cognome);
var colore = prompt('Il tuo colore preferito?');
document.getElementById('colore').innerHTML = colore
// console.log(colore);
document.getElementById('fine').innerHTML = nome + cognome + colore + '20';
