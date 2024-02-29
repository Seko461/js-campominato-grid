const main = document.getElementById('grid_container');
const startBtn = document.getElementById('start');
const levelSelected = document.getElementById('levels');

let levels = [100, 81, 49]
let totalCells;


startBtn.addEventListener('click', play);


// ----- Functions ----- //

function play() {
    totalCells = levels[levelSelected.value]
    reset();
    gridGenerator();
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
        this.classList.toggle('clicked');

        console.log(markup);
    }

    return cell;
}

function reset() {
    main.innerHTML = '';
}
