
const startBtn = document.getElementById('start');
const levels = document.getElementById('level');
const scoreCounter = document.querySelector('.punteggio');
const grid = document.querySelector('.grid');
const endgame = document.querySelector('.end-game-screen');
const endgamewin = document.querySelector('.end-game-screen-win');
const champion = document.querySelector('champion')
const button = document.querySelector('.play-again');


const totalCells = 100;
const totalBombs = 16;
const champCell = 1;
const maxScore = totalCells - totalBombs;
const bombsList = [];
let score = 0;



/*-------------------------
GRIGLIA E LOGICA DI GIOCO
-------------------------*/

document.querySelector('form').addEventListener('submit', function (e) {

    e.preventDefault();
    console.log(e.target.level.value);
    let totalCells = e.target.level.value;

    generateField(totalCells);


})
function generateField(totalCells) {
    grid.innerHTML = '';
    generateCells(totalCells)

}
function generateCells(totalCells) {
    for (let i = 0; i < totalCells; i++) {
        //creo un elemento e gli do la classe 'cell'
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `calc(100% / ${Math.sqrt(totalCells)})`
        let markup = `${i + 1}`
        cell.innerText += markup






        //Gestiamo il click della cella
        cell.addEventListener('click', function () {
            // controllo che la cella non sia stata già cliccata
            if (cell.classList.contains('cell-clicked')) return;


            if (bombsList.includes(i)) {
                cell.classList.add('cell-oil');
                endGame(false);

            } else {
                cell.classList.add('cell-clicked');
                updateScore();

            }
        });


        grid.appendChild(cell);

    }
}



// Funzione per aggiornare il punteggio
function updateScore() {
    //incremento lo score
    score++;
    //lo inserisco nel contatore
    scoreCounter.innerText = String(score).padStart(5, 0);
    //controlliamo se l'utente ha vinto
    if (score === maxScore) endGame(true);

}

//funzione per decretare la fine del gioco
function endGame(isVictory) {
    if (isVictory === true) {
        endgamewin.classList.remove('hidden');

    } else {

        endgame.classList.remove('hidden');

    }
    revealAll();



}


// Genenerare TOT bombe casuali
while (bombsList.length < totalBombs) {
    const number = Math.floor(Math.random() * totalCells) + 1;
    if (!bombsList.includes(number)) {
        bombsList.push(number);
    }
}
//console.log(bombsList);

function revealAll() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 1; i <= cells.length; i++) {
        //controllo se la cella è una bomba
        if (bombsList.includes(i)) {
            const cellToReveal = cells[i - 1];
            cellToReveal.classList.add('cell-oil');
        }
    }

}

button.addEventListener('click', function () {
    location.reload();
}
)








