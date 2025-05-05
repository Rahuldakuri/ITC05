const gridSize = 5;
const grid = document.getElementById('grid');
let cells = [];

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', () => handleClick(i));
        grid.appendChild(cell);
        cells.push(cell);
    }
}

function toggle(index) {
    if (index >= 0 && index < gridSize * gridSize) {
        cells[index].classList.toggle('is-off');
    }
}

function handleClick(index) {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    toggle(index);
    toggle((row - 1) * gridSize + col);
    toggle((row + 1) * gridSize + col);
    toggle(row * gridSize + (col - 1));
    toggle(row * gridSize + (col + 1));
    checkWin();
}

function checkWin() {
    const allOn = cells.every(cell => !cell.classList.contains('is-off'));
    if (allOn) {
        window.alert("You win!");
    }
}

function randomizeBoard(moves = 15) {
    for (let i = 0; i < moves; i++) {
        const randIndex = Math.floor(Math.random() * (gridSize * gridSize));
        handleClick(randIndex);
    }
}

createGrid();
randomizeBoard();

document.getElementById('lastModified').textContent = document.lastModified;
