let grid = document.getElementById('grid');
let totalCells = 100;
let numbers = [];

for (let i = 1; i <= totalCells; i++) {
    //creao le celle

    let cell = document.createElement('div');
    let markup = `<div class="cell">${i}</div>`;
    cell.innerHTML += markup;
    cell.classList.add('cell');
    console.log(cell);
    grid.appendChild(cell);
};

