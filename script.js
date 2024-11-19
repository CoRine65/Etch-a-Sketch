
const container = document.querySelector(".container");
const gridItem = document.createElement("div");
gridItem.classList.add("gridItem");
container.appendChild(gridItem);

//iteration to create 256 squares for the 16x16
for(let i = 0; i < 256; i++){
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridItem.appendChild(gridSquare);
}