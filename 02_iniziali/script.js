/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(arrayNames) {
    //arrey vuoto per iniziali
    const initials = [];
    //ciclo per prendere iniziali di ogni nome
    for (let i = 0; i < arrayNames.length; i++) {
        initials.push(arrayNames [i][0]);
    }
    //restitusci arrey iniziali
    return initials
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]