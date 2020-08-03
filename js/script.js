// richiesta nome
var nome = prompt("Inserisci il tuo nome");

//richiesta cognome
var cognome = prompt("Inserisci il tuo cognome");

// richiesta colore preferito
var colore = prompt("Inserisci il tuo colore preferito");

// genera password
var password = nome + cognome + colore + "19";
document.getElementById('password').innerHTML = password; 
