const container = document.querySelector('.container');

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
}

function changeGridColor() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', () => {
       grid.style.backgroundColor = 'black';
    }));
}
createGrid(16);
changeGridColor();