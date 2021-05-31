const gridContainer = document.querySelector('#gridContainer');
makeGrid(60,60)

const reset = document.querySelector('#reset')
reset.addEventListener('click', resetBoard);

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', darkerColor));

function darkerColor(e) {
    if (this.style.backgroundColor.match(/rgb/)) {
        console.log('This happens');
        let rgb = this.style.backgroundColor.match(/\d+/g);
        rgb[0] = rgb[0]/4;
        rgb[1] = rgb[1]/4;
        rgb[2] = rgb[2]/4;
        this.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    } else {
        this.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    //this.style.backgroundColor = 'rgb(255, 255, 255)';
    //console.log(rgb);
}

function randomColor(e) {
    let red = Math.random()*255;
    let green = Math.random()*255;
    let blue = Math.random()*255;
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function resetBoard() {
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}

function makeGrid(rows, cols) {
    if (rows > 100) {
        rows = 100;
        alert('Max number of rows is 100, input rows changed to 100');
    } else if (cols > 100) {
        alert('Max number of columns is 100, input columns changed to 100');
        cols = 100;
    }
    let sizeCell = 400/rows;
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    gridContainer.style.setProperty('--size-cells', sizeCell+'px');
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
        }
    }
}