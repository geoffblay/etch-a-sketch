const grid = document.querySelector(".grid-container");

const reload = document.querySelector("#reset-btn");
reload.addEventListener('click', () => location.reload());

function fillGrid(rows) {
    // Clear grid
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }

    // Resize grid
    grid.setAttribute('style', `grid-template-columns: repeat(${rows}, 1fr);`)

    // Populate grid
    for (let i = 0; i < rows * rows; i++) {
        let grid_element = document.createElement('div');
        grid_element.setAttribute('class', 'grid-element');
        grid.appendChild(grid_element);
    }
}

fillGrid(16);
