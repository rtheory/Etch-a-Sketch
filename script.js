const gridContainer = document.getElementById("gridContainer");
let gridSize = 16;

function generateGrid(){
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // Generate array of gridSizexgridSize square divs
    for (let row = 0; row < gridSize; row++){
        for (let col = 0; col < gridSize; col++){
            let div = document.createElement("div");
            div.className = "square";
            div.style.backgroundColor = "black";
            div.style.opacity = "0.0";
            gridContainer.appendChild(div);
        }
    }

    // Add event listener for hover
    let squares = document.querySelectorAll("div.square");
    squares.forEach(square => {
        square.addEventListener('mouseover', function(e){
            console.log(e);
            e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.2;
        })
    });
}

function clearGrid(){
    let gridContainerChild = gridContainer.lastElementChild;
    while (gridContainerChild){
        gridContainer.removeChild(gridContainerChild);
        gridContainerChild = gridContainer.lastElementChild;
    }
}

// Add event listener for reset button
let btnReset = document.querySelector("button#reset");
btnReset.addEventListener('click', function(e){
    gridSize = prompt('How large would you like the grid (number of squares)?');
    clearGrid();
    generateGrid();
})

generateGrid();