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



const randomNumbersElement = document.getElementById('random-numbers');

// funzioni
function getRandomNumbers() {

    const randomNumbers = [];

    while (randomNumbers.length < 5) {
        let randomNumber;
        let number;
        do {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            number = document.createElement('div');
            number.className = 'number';
            number.innerText = randomNumber;
        } while (randomNumbers.includes(randomNumber));

        randomNumbersElement.append(number);

        randomNumbers.push(randomNumber);

        setTimeout(() => {
            number.style.display = 'none';
        }, 5000)
    }

    console.log(randomNumbers);
    return randomNumbers;
}

//
const userNumbersArray = [];

setTimeout(function getUserNumbers() {
    let userNumbers;

    for (let i = 0; i < 5; i++) {
        userNumbers = parseInt(prompt('Scegli il numero da 1 a 100'));
        userNumbersArray.push(userNumbers);
    }

    console.log(userNumbersArray);

    return userNumbers;
}
    , 5500);

//
const countdownElement = document.getElementById('countdown');

let seconds = 5

countdownElement.innerText = seconds;

const countdown = setInterval(function () {
    countdownElement.innerText = --seconds;

    if (seconds === 0) {
        countdownElement.innerText = '';
        clearInterval(countdown);
    }
}, 1000);

//
function isValidNumber() {

    let isValid = true;

    if ()
}

// svolgimento
getRandomNumbers();

