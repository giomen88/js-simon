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
let min = 1;
let max = 99;
let totalNumbers = 5;

// funzioni
const randomNumbers = [];

function getRandomNumbers() {

    while (randomNumbers.length < totalNumbers) {
        let randomNumber;
        let number;
        do {
            randomNumber = Math.floor(Math.random() * max) + min;
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
const getUserNumber = (min, max) => {
    let userNumber;

    while (isNaN(userNumber) || userNumber < min || userNumber > max) {
        userNumber = parseInt(prompt(`Scegli il numero da ${min} a ${max}`));

        if (isNaN(userNumber) || userNumber < min || userNumber > max) {
            alert('Attenzione! Il numero inserito non è corretto');
        };
    };
    return userNumber;
}



//////////////////////////////////////////// SVOLGIMENTO

// invoco la funzione per i numeri casuali
getRandomNumbers();

// avvio il countdown
const countdownElement = document.getElementById('countdown');
const countdownMessageElement = document.getElementById('countdown-message');

let seconds = 5

countdownElement.innerText = seconds;

const countdown = setInterval(function () {
    countdownElement.innerText = --seconds;

    if (seconds === 0) {
        countdownMessageElement.innerText = '';
        clearInterval(countdown);
    }
}, 1000);

// avvio i prompt per l'utente e calcolo i punti
setTimeout(() => {
    const userNumberArray = [];
    const scoresMessage = document.getElementById('scores-message');

    while (userNumberArray.length < totalNumbers) {

        const userNumber = getUserNumber(min, max);

        if (!userNumberArray.includes(userNumber)) userNumberArray.push(userNumber);
    }

    let correctAnswers = [];

    for (let i = 0; i < totalNumbers; i++) {
        if (randomNumbers.includes(userNumberArray[i])) correctAnswers.push(userNumberArray[i]);
    }

    scoresMessage.innerHTML = `<strong>${correctAnswers.length}</strong> PUNTI - Hai indovinato <strong>${correctAnswers.join('  ')}</strong>`;

    console.log(userNumberArray);
}
    , 5500);