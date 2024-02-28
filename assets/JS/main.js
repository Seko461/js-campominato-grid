

// let numbers = [];
let startBtn = document.getElementById('start');

let levels = document.getElementById('levels');
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');


// console.log(easy, medium);




levels.addEventListener('change', function () {

    console.log(this.value);

    if (levels.value === easy.value) {
        console.log('questo è easy');
        startBtn.addEventListener('click', easyLevel());


    } else if (levels.value === medium.value) {
        console.log('questo è medium');
        startBtn.addEventListener('click', mediumLevel());
    }
    if (levels.value === hard.value) {
        console.log('questo è hard');
        startBtn.addEventListener('click', hardLevel());

    }
});



function easyLevel() {
    let totalCells = 100;
    let grid = document.getElementById('grid_1');
    startBtn.addEventListener('click', function () {

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
    })
};

function mediumLevel() {
    let totalCells = 81;
    let grid = document.getElementById('grid_2');
    startBtn.addEventListener('click', function () {
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
    })
};

function hardLevel() {
    let totalCells = 49;
    let grid = document.getElementById('grid_3');
    startBtn.addEventListener('click', function () {
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
    })
};