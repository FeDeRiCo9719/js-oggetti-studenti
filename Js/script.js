/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    'nome': 'Luca',
    'cognome': 'Rossi',
    'età': '20',
}

// 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for ( var key in studente ) {
    console.log( [key] );
    document.getElementById('student').innerHTML += `${studente[key]} <br>`; 
}

// 3. Creare un array di oggetti di studenti.

// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


