const main = document.getElementById('grid_container');
const startBtn = document.getElementById('start');
const levelSelected = document.getElementById('levels');


const mushrooms = 16;
const mushroomsList = [];
const scoreCounter = document.querySelector('.punteggio');
const endgame = document.querySelector('.end-game-screen');
const endgamewin = document.querySelector('.end-game-screen-win');
const button = document.querySelector('.play-again');
let score = 0;

let levels = [100, 81, 49]
let totalCells;
let maxScore = totalCells - mushrooms;



startBtn.addEventListener('click', play);


// ----- Functions ----- //

function play() {
    totalCells = levels[levelSelected.value]
    reset();
    gridGenerator();
    randomListMushrooms(totalCells);
    endGame(isVictory);
}

function gridGenerator() {
    const grid = document.createElement('div');
    grid.classList.add('grid')

    for (let i = 0; i < totalCells; i++) {
        const cell = createCell(i);
        grid.append(cell)
    }

    main.append(grid)
}

function createCell(i) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.classList.add('cell' + totalCells);
    let markup = `${i + 1}`
    cell.innerHTML += markup

    cell.addEventListener('click', handlerClickCell)

    function handlerClickCell() {

        if (mushroomsList.includes(i + 1)) {
            cell.classList.add('mushrooms');
            endGame(false);


        } else {
            cell.classList.add('clicked');
            updateScore();


        }

        console.log(mushroomsList);
        console.log(markup);

    }


    return cell;
}

function reset() {
    main.innerHTML = '';
}

function randomListMushrooms() {
    while (mushroomsList.length < mushrooms) {
        const number = Math.floor(Math.random() * totalCells) + 1;
        if (!mushroomsList.includes(number)) {
            mushroomsList.push(number);
        }
    }
    console.log(mushroomsList);
}

function updateScore() {
    score++;
    scoreCounter.innerText = String(score).padStart(5, 0);
    if (score === maxScore) endGame(true);

}
function endGame(isVictory) {
    if (isVictory === true) {
        endgamewin.classList.remove('hidden');

    } else {

        endgame.classList.remove('hidden');

    }

}

button.addEventListener('click', function () {
    location.reload();
})
