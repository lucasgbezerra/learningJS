const cards = document.querySelectorAll('.memory-card');
const points = document.querySelector('span')

let hasFlippedCard = false;
let firstCard, secondCard;
let disableClick = false;
let score = 0;

function flipCard() {
    this.classList.toggle('flip');

    if (disableClick)
        return;

    console.log(disableClick)
    if (!hasFlippedCard) {
        firstCard = this;
        hasFlippedCard = true;
    } else {
        secondCard = this;
        hasFlippedCard = false;
        checkMatch();
    }


}

// Virar a carta para posição original
function turnCardBack() {
    disableClick = true;

    setTimeout(
        () => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            disableClick = false;
        }, 1000
    );
}

// Desabilita o listener de click do par de cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

// Adiciona a pontuação
function plusOne() {
    score++;
    points.textContent = score;

}

(function reset() {
    [firstCard, secondCard] = [null, null];
    hasFlippedCard = false;
    disableClick = false;
    score = 0;
    points.textContent = score;

    shuffleCards();

})();

// Baralhar as cartas ao iniciar a partida
// uso da IIFE
function shuffleCards() {
    cards.forEach(
        card => {
            let pos = Math.floor(Math.random() * 12);
            card.style.order = pos;
        }
    );
}

// Confere se as cartas são iguais
function checkMatch() {
    console.log(firstCard.getAttribute('data-name'), secondCard.getAttribute('data-name'))
    if (firstCard.getAttribute('data-name') === secondCard.getAttribute('data-name')) {
        disableCards();
        plusOne();
        return true;
    }
    turnCardBack();
    return false
}

// Listener para todas as cartas, ativado com o clique e chama a
// função flipCard
cards.forEach(card => card.addEventListener('click', flipCard));