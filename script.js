const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('column');
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}
createGrid(16);