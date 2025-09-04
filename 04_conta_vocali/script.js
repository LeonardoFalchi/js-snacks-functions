/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numeroVocali(word) {
    const vocali = ["a", "e", "i", "o", "u"];
    let trovate = [];
    let conto = 0
    //ciclo per scorrere parola
    for (let i = 0; i < parola.length; i++) {
        let lettera = parola[i];
        //ciclo per scorrere vocali
        for (let i = 0; i < vocali.length; i++); {
            if (lettera === vocali[i]) {
                count++
                trovate.push(lettera);
            }
        }
    }
    return `${conto} (${trovate})`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(numeroVocali());


//Risultato atteso se si passa 'javascript': 3 (a, a, i)