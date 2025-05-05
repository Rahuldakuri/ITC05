const gridSize = 5;
const grid = document.getElementById('grid');
let cells = [];

// Create grid cells
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

// Toggle on/off class
function toggle(index) {
    if (index >= 0 && index < gridSize * gridSize) {
        cells[index].classList.toggle('is-off');
    }
}

// When clicked, toggle itself + adjacent cells
function handleClick(index) {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    toggle(index);
    toggle((row - 1) * gridSize + col); // top
    toggle((row + 1) * gridSize + col); // bottom
    toggle(row * gridSize + (col - 1)); // left
    toggle(row * gridSize + (col + 1)); // right
    checkWin();
}

// Check win condition
function checkWin() {
    const allOn = cells.every(cell => !cell.classList.contains('is-off'));
    if (allOn) {
        alert("You win!");
    }
}

// Create a solvable random board
function randomizeBoard(moves = 15) {
    for (let i = 0; i < moves; i++) {
        const randIndex = Math.floor(Math.random() * (gridSize * gridSize));
        handleClick(randIndex);
    }
}

// Set timestamp in footer
function setTimestamp() {
    document.getElementById('lastModified').textContent = document.lastModified;
}

// Init
createGrid();
randomizeBoard();
setTimestamp();
