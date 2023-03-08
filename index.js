const grid = document.querySelector(".grid-container");
const reload = document.querySelector("#reset-btn");

reload.addEventListener('click', clearColor);

document.addEventListener('DOMContentLoaded', fillGrid(16))

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

    // Add event listeners
    let pixels = document.querySelectorAll('.grid-element');
    pixels.forEach((pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.setAttribute('style', 'background-color: black');
        })
    }))
}

function clearColor() {
    let pixels = document.querySelectorAll('.grid-element');
    pixels.forEach((pixel) => {
        pixel.setAttribute('style', 'background-color: white');
    })
}