function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.addEventListener('mouseover', changeGridColor);
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

function changeGridColor(e) {
    if(e.buttons === 1) {
        if (currentColor === 'rainbow') e.target.style.backgroundColor = generateRandomColor();
        else  e.target.style.backgroundColor = currentColor;
    }
}

function generateRandomColor() {
    const LETTERS = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += LETTERS[Math.floor((Math.random() * LETTERS.length))];
    }
    return color;
}

function removeOldGrid(currentSize) {
    for (let i = 0; i < currentSize; i++) {
        container.removeChild(document.querySelector('.row'));
    }
}

function askUserSize() {
    currentSize = parseInt(prompt('Please enter number of squares per side for the new grid', '16'));
    return currentSize;
}

function createNewGrid(oldSize, newSize) {
    removeOldGrid(oldSize);
    currentSize = newSize;
    createGrid(currentSize);
    
}

function getSize(id) {
    if (id === 'size-16') {
        return 16;
    } else if (id === 'size-32') {
        return 32;
    } else if (id === 'size-64') {
        return 64;
    } else if (id === 'size-84') {
        return 84;
    }
}

function changeCurrentColor(value) {
    currentColor = value;
}

function clearGrid() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.style.backgroundColor = 'white';
    });
}
// Global Variables
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';
let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
const container = document.querySelector('.container');
const sizeBtns = document.querySelectorAll('.size-btn');
const colorPicker = document.querySelector('.color-chooser');
const blackChooserBtn = document.querySelector('.black');
const rainbowChooserBtn = document.querySelector('.rainbow');
const eraserBtn = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear');

sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => createNewGrid(currentSize, getSize(btn.id)));
});

blackChooserBtn.addEventListener('click', () => changeCurrentColor('black'));
rainbowChooserBtn.addEventListener('click', () => changeCurrentColor('rainbow'));

colorPicker.addEventListener('input', (e)=> changeCurrentColor(e.target.value));
eraserBtn.addEventListener('click', () => changeCurrentColor('white'));
clearBtn.addEventListener('click', clearGrid);
createGrid(currentSize);