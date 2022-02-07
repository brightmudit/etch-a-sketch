function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
    changeGridColor();
}

function changeGridColor() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'black';
    }));
}


function removeOldGrid() {
    const rows = document.querySelectorAll('.row');
    const size = rows.length;
    for (let i = 0; i < size; i++) {
        const row = document.querySelector('.row');
        for (let j = 0; j < size; j++) {
            const grid = document.querySelector('.grid');
            row.removeChild(grid);
        }
        container.removeChild(row);
    }
}

function askUserSize() {
    const size = parseInt(prompt('Please enter number of squares per side for the new grid', '16'));
    return size;
}

function createNewGrid() {
    removeOldGrid();
    createGrid(askUserSize());
    
}


const container = document.querySelector('.container');
const btn = document.querySelector('.grid-changer');

btn.addEventListener('click', createNewGrid);

createGrid(16);