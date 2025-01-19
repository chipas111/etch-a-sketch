const container = document.querySelector("#container")

function createGrid(rows, cols) {
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < rows * cols; i++ ) {
        const gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")
        gridItem.style.opacity = "0.1"

        gridItem.addEventListener('mouseover',() => {
            let currentOpacity  = parseFloat(gridItem.style.opacity)
            if (currentOpacity < 1) {
                gridItem.style.opacity = (currentOpacity + 0.1).toString()
            }
            gridItem.style.backgroundColor = "#310086";
        })
        container.appendChild(gridItem)
    }
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    container.innerHTML = ""
    let userChoice = prompt("Choose grid rows and cols number", "16")
    if (userChoice === null || isNaN(userChoice) || userChoice.trim() === "") {
        alert("Input correct number, please")
        return
    } 
    let userNum = Number(userChoice)
    if (userNum <= 0) {
        alert("Input number higher then 0")
        return
    }
    else if (userNum >= 100) {
        alert("It's too much! enter less then 100")
        return
    }

    createGrid(userNum, userNum)
})

