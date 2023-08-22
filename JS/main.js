/**
 * Creare un bottone che al click genera la griglia quadrata
 * Diamo al contenitore una dimensione fissa
 * Facciamo un ciclo for da 1 a 100 e creiamo una cella
 * Calcolo le dimensioni della cella (100% / 10)
 * Al click sulla cella la coloriamo di azzuro e stampo il numero nel console.log dell'indice
 */

const btnGrid = document.getElementById('btn-griglia');
const grid = document.getElementById('griglia');
const level = document.getElementById('livello');
let min = 1;
let arrayBomb = [];
const bomb = 16;

function generateGrid(sizeCell) {

    grid.innerHTML = '';
    arrayBomb = [];
    const dimension = sizeCell * sizeCell;

    for (let i = 1; i <= dimension; i++) {
        let cella = document.createElement('div');
        cella.className = "campo";

        cella.classList.add("size-" + sizeCell);

        cella.setAttribute('data-index', i);
        grid.appendChild(cella);


        cella.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            changeColor(cella, index);
            this.innerHTML = index;
        })


    }

}


function changeColor(cell, indice) {

    cell.style.backgroundColor = 'azure';
    console.log('azure' + indice);

}

function bombCell(cell, indice) {

    cell.style.backgroundColor = 'red';
    console.log('bomb' + indice);

}

btnGrid.addEventListener('click', function () {
    const selectLevel = parseInt(level.value);

    while (arrayBomb.length < bomb) {
        let randomBomb = getRandomNumber(min, selectLevel * selectLevel);

        if (!arrayBomb.includes(randomBomb)) {
            arrayBomb.push(randomBomb);
        }

    }
    console.log(arrayBomb.length + ' numeri random ' + arrayBomb);
    generateGrid(selectLevel);

})


