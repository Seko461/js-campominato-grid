let grid = document.getElementById('grid');
let totalCells = 100;
let numbers = [];

for (let i = 1; i <= totalCells; i++) {
    //creao le celle

    let cell = document.createElement('div');

    cell.classList.add('cell');
    console.log(cell);
    grid.appendChild(cell);
}
