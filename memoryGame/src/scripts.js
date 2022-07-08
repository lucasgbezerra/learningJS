const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        firstCard = this;
        hasFlippedCard = true;
        console.log("firstCard " + { hasFlippedCard, firstCard });
    } else {
        secondCard = this;
        hasFlippedCard = false;
        console.log("Second:" + { hasFlippedCard, secondCard })
        checkMatch();
    }
}

// Virar a carta para posição original
function turnCardBack() {
    setTimeout(
        () => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip')
        }, 1000
    );
}

// Desabilita o listener de click do par de cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}


// Confere se as cartas são iguais
function checkMatch() {
    if (firstCard.getAttribute('data-name') === secondCard.getAttribute('data-name')) {
        disableCards();
        return true;
    }
    turnCardBack();
    return false;

}



// Listener para todas as cartas, ativado com o clique e chama a
// função flipCard
cards.forEach(card => card.addEventListener('click', flipCard))