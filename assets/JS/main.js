let grid = document.getElementById('grid_1');
let totalCells = 100;
let numbers = [];
let startBtn = document.getElementById('start');
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');






function easyLevel() {
    for (let i = 1; i <= totalCells; i++) {
        //creao le celle

        let cell = document.createElement('div');
        let markup = `${i}`;
        cell.innerHTML += markup;
        cell.classList.add('cell');
        // console.log(cell);
        grid.appendChild(cell);

        //Gestiamo il click della cella e diamo colore
        cell.addEventListener('click', function () {
            console.log('click');

            cell.classList.add('cell-clicked');
            console.log(cell);

        });

    };
}

function mediumLevel() {
    let totalCells = 81;
    let grid = document.getElementById('grid_2');
    for (let i = 1; i <= totalCells; i++) {
        //creao le celle

        let cell = document.createElement('div');
        let markup = `${i}`;
        cell.innerHTML += markup;
        cell.classList.add('cell');
        // console.log(cell);
        grid.appendChild(cell);

        //Gestiamo il click della cella e diamo colore
        cell.addEventListener('click', function () {
            console.log('click');

            cell.classList.add('cell-clicked');
            console.log(cell);

        });

    };
}