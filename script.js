const gridContainer = document.querySelector('#gridContainer');
makeGrid(40,40);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetBoard);

cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', traditional));

const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', changeEraser);

const toggleButton = document.querySelector('#toggleGrid');
toggleButton.addEventListener('click', toggleGrid);

const traditionalButton = document.querySelector('#traditional');
traditionalButton.addEventListener('click', changeTraditional);
traditionalButton.classList.add('active')

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', changeRandom);

const slider = document.querySelector('#myRange');
let text = document.querySelector('h3');

slider.oninput = function() {
    text.textContent = this.value + 'x' + this.value;
    makeGrid(this.value, this.value);
    cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', traditional));
}

function changeTraditional() {
    removeListeners();
    cells.forEach(cell => cell.addEventListener('mouseover', traditional));
    traditionalButton.classList.add('active')
}

function traditional(e) {
    if (this.style.backgroundColor.match(/rgb/)) {
        let rgb = this.style.backgroundColor.match(/\d+/g);
        rgb[0] = rgb[0] - 50;
        rgb[1] = rgb[1] - 50;
        rgb[2] = rgb[2] - 50;
        this.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    } else {
        this.style.backgroundColor = 'rgb(200, 200, 200)';
    }
}

function changeRandom() {
    removeListeners();
    cells.forEach(cell => cell.addEventListener('mouseover', randomColor));
    rainbowButton.classList.add('active');
}

function randomColor(e) {
    let red = Math.random()*255;
    let green = Math.random()*255;
    let blue = Math.random()*255;
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function changeEraser() {
    removeListeners();
    cells.forEach(cell => cell.addEventListener('mouseover', eraser));
    eraserButton.classList.add('active');
}

function eraser(e) {
    this.style.backgroundColor = 'white';
}

function resetBoard() {
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}

function toggleGrid() {
    cells.forEach(cell => cell.classList.toggle('grid'));
}

function makeGrid(rows, cols) {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.remove());
    let sizeCell = 500/rows;
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    gridContainer.style.setProperty('--size-cells', sizeCell+'px');
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('grid');
            gridContainer.appendChild(cell);
        }
    }
}

function removeListeners() {
    cells.forEach(cell => cell.removeEventListener('mouseover', eraser));
    cells.forEach(cell => cell.removeEventListener('mouseover', traditional));
    cells.forEach(cell => cell.removeEventListener('mouseover', randomColor));
    eraserButton.classList.remove('active');
    rainbowButton.classList.remove('active');
    traditionalButton.classList.remove('active');
}