
const gridHolder = document.querySelector(".grid");

for(let i = 0; i < 256; i++){

    const grid = document.createElement("div");
    grid.classList.add("gridSquare");
    gridHolder.appendChild(grid);

}