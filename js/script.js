// Descrizione:
// Visualizzare in pagina 5 numeri casuali  diversi tra loro.Da lì parte un timer di 30 secondi.
//     Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

//     ATTENZIONE:
// prompt() e alert() vengono sempre eseguiti prima del resto del codice nel loro scope, quindi dovete trovare un escamotage per "tenerli a bada" finchè le altre operazioni siano state svolte.Siete autorizzate a "imbrogliare" un po' e chiedere all'utente i numeri un pochettino dopo: faccia_leggermente_sorridente: l'importante è far sparire i numeri allo scadere dei 30 secondi!




// recupero elementi

const countdownElement = document.getElementById('countdown');
const randomNumbersElement = document.getElementById('random-numbers');


// funzioni
function getRandomNumbers() {
    let randomNumber;

    for (i = 0; i < 5; i++) {
        randomNumber = Math.floor(Math.random() * 100) + 1;

        const number = document.createElement('div');
        number.className = 'number';
        number.innerText = randomNumber;

        randomNumbersElement.append(number);

        setTimeout(() => {
            number.style.display = 'none';
        }, 30000)
    }

    return randomNumber;
}

//
getRandomNumbers();

function createCountdown() {

}

