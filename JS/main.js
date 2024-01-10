/**
 * Creare un bottone che al click genera la griglia quadrata
 * Diamo al contenitore una dimensione fissa
 * Facciamo un ciclo for da 1 a 100 e creiamo una cella
 * Calcolo le dimensioni della cella (100% / 10)
 * Al click sulla cella la coloriamo di azzuro e stampo il numero nel console.log dell'indice
 */

const btnGrid = document.getElementById("btn-griglia");
const grid = document.getElementById("griglia");
const level = document.getElementById("livello");

let min = 1;
let arrayBomb = [];
const bomb = 16;
let score, cellFreeTot, isGameOver;
isGameOver = false;

function generateGrid(sizeCell) {
  grid.innerHTML = "";
  score = 0;
  cellFreeTot = sizeCell * sizeCell - arrayBomb.length;
  isGameOver = false;
  const dimension = sizeCell * sizeCell;

  for (let i = 1; i <= dimension; i++) {
    let cella = document.createElement("div");
    cella.className = "campo";

    cella.classList.add("size-" + sizeCell);

    cella.setAttribute("data-index", i);
    grid.appendChild(cella);

    cella.addEventListener("click", function () {
      if (isGameOver || this.style.backgroundColor.includes("azure")) return;

      const index = this.getAttribute("data-index");
      //console.log(i, arrayBomb, index);

      if (!arrayBomb.includes(i)) {
        changeColor(cella, index);
        this.innerHTML = index;
        score++;

        if (score >= cellFreeTot) {
          endgame(
            "Fine partita. Hai totalizzato " +
              score +
              " punti. Congratulazioni! E' un punteggio perfetto"
          );
        }
      } else {
        bombCell(cella, i);
        this.innerHTML = index;
        endgame("Fine partita. Hai totalizzato " + score + " punti");
      }

      console.log("Il tuo punteggio è: " + score);
    });

    cellFreeTot = sizeCell * sizeCell - arrayBomb.length;
    console.log(cellFreeTot);
  }
}

function changeColor(cell, indice) {
  cell.style.backgroundColor = "azure";
  console.log("azure " + indice);
}

function bombCell(cell, indice) {
  cell.style.backgroundColor = "red";
  console.log("bomb " + indice);
}

btnGrid.addEventListener("click", function () {
  arrayBomb = [];
  const selectLevel = parseInt(level.value);

  while (arrayBomb.length < bomb) {
    let randomBomb = getRandomNumber(min, selectLevel * selectLevel);

    if (!arrayBomb.includes(randomBomb)) {
      arrayBomb.push(randomBomb);
    }
  }
  console.log(arrayBomb.length + " numeri random " + arrayBomb);

  generateGrid(selectLevel);
});

function endgame(msg) {
  alert(msg);
  isGameOver = true;
}
