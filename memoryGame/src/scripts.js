const cards = document.querySelectorAll('.memory-card');


function flipCard(){
    this.classList.toggle('flip')
}
// Listener para todas as cartas, ativado com o clique e chama a
// função flipCard
cards.forEach(card => card.addEventListener('click', flipCard))