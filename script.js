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
    if(e.buttons === 1) e.target.style.backgroundColor = generateRandomColor();
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
    } else if (id === 'size-94') {
        return 94;
    }
}

// Global Variables
const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;
const container = document.querySelector('.container');
const btns = document.querySelectorAll('.size-btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => createNewGrid(currentSize, getSize(btn.id)));
});

createGrid(currentSize);