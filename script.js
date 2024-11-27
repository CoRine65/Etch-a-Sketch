
const gridHolder = document.querySelector(".grid");

for(let i = 0; i < 256; i++){

    const grid = document.createElement("div");
    grid.classList.add("gridSquare");
    gridHolder.appendChild(grid);

}

/*
const gridSquares = document.querySelectorAll('.gridSquare');

gridSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = selectedColor; // Change to desired color
    });
}); */

const colorPickerButton = document.querySelector(".colorPicker");
const colorInput = document.querySelector("#colorInput");
let selectedColor = "#000000";

// Toggle the visibility of the color picker
colorPickerButton.addEventListener("click", () => {
    colorInput.style.display =
        colorInput.style.display === "none" ? "inline-block" : "none";
});

// Update the selected color on input change
colorInput.addEventListener("input", (e) => {
    selectedColor = e.target.value;
});

// Apply hover functionality to the grid squares
const gridSquares = document.querySelectorAll(".gridSquare");
gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = selectedColor;
    });
});
