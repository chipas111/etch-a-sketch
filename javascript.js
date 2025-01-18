const container = document.querySelector("#container")

function createGrid(rows, cols) {
    container.style.gridTemplateRows = 'repeat(${rows}, 1fr)';
    container.style.gridTemplateColumns = 'repeat(${cols}, 1fr)';

    for (let i = 0; i < rows * cols; i++ ) {
        const gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")
        container.appendChild(gridItem)
    }
}

createGrid(16, 16)
