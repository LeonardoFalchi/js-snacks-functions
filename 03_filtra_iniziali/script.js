/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByLetter(array, letter) {
    //array vuoto per parole che iniziano con la lettera filtrata
    const result = [];
    //ciclo e controllo lettera
    for (let i = 0; i < array.length; i++) {
        if (array [i][0] === letter) {
            //aggiungi parola all'array
            result.push(array[i]);
        }
    }
    //ritorna array filtrato
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
let carattere = "L";
const startA = filterByLetter(names, carattere);
console.log(carattere, ":", startA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]