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


function generateGrid(sizeCell) {

    grid.innerHTML = '';

    const dimension = sizeCell * sizeCell;


    for (let i = 1; i <= dimension; i++) {
        let cella = document.createElement('div');
        cella.className = "campo";

        if (sizeCell == 10) {
            cella.classList.add("size-10");
        } else if (sizeCell == 9) {
            cella.classList.add("size-9");
        } else if (sizeCell == 7) {
            cella.classList.add("size-7");
        }

        cella.setAttribute('data-index', i);
        grid.appendChild(cella);


        cella.addEventListener('click', function () {
            changeColor(cella, i);
            const index = this.getAttribute('data-index');
            this.innerHTML = index;
        })


    }

}


function changeColor(cell, indice) {
    cell.style.backgroundColor = 'azure';
    console.log(indice);
}

btnGrid.addEventListener('click', function () {
    const selectLevel = parseInt(level.value);
    generateGrid(selectLevel);
})


let min = 1;
let max = 16;
let arrayBomb = [];
const bomb = 16;

/*function getRandomNumber(min, max) {

    const random = Math.floor(Math.random() * (max) + min);
    return random;

}*/


// non funziona

while (arrayBomb.length < bomb) {
    let random = getRandomNumber(min, max);

    if (random == arrayBomb[random]) {
        getRandomNumber(min, max);
    }
    arrayBomb.push(random);
    arrayBomb.lenght++;

} console.log(arrayBomb.length + ' numeri random ' + arrayBomb);
