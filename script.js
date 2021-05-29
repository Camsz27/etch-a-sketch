const gridContainer = document.querySelector('#gridContainer');

for (let rows = 0; rows < 16; rows++) {
    for (let cols = 0; cols < 16; cols++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', changeColor));

function changeColor(e) {
    this.style.backgroundColor = 'black'
}


