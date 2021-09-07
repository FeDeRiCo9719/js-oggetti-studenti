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
    console.log( studente[key] );
    document.getElementById('student').innerHTML += `${key}: ${studente[key]} <br>`; 
}

// 3. Creare un array di oggetti di studenti.
var studenti = [
    {
        'nome': 'Mario',
        'cognome': 'Verdi',
        'età': '23',
    },

    {
        'nome': 'Alex',
        'cognome': 'Gialli',
        'età': '24',
    },

    {
        'nome': 'Sandro',
        'cognome': 'Neri',
        'età': '26',
    }
]

// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < studenti.length; i++) {

    document.getElementById('students').innerHTML += `${studenti[i]["nome"]}  ${studenti[i]["cognome"]}  ${studenti[i]["età"]} <br>`;

}


// 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


