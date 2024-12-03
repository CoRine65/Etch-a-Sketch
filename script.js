
const gridHolder = document.querySelector(".grid");

for(let i = 0; i < 256; i++){

    const grid = document.createElement("div");
    grid.classList.add("gridSquare");
    gridHolder.appendChild(grid);

}



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
        if (isRainbowMode) {
            square.style.backgroundColor = generateRanColor();
            
        } else {
            square.style.backgroundColor = selectedColor;
        }
    });
});

const eraseButton = document.querySelector(".erase"); // Ensure it's targeting the correct button
eraseButton.addEventListener("click", () => {
    const gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach(square => {
        square.style.backgroundColor = "rgb(247, 247, 247)"; // Reset to original background color
    });
});

const rainbowButton = document.querySelector(".rainbowMode");

let isRainbowMode = false; // Starts as false
rainbowButton.addEventListener("click", () => {
    isRainbowMode = !isRainbowMode; // Toggles between true and false
    console.log("Rainbow mode is now:", isRainbowMode); // Debugging feedback
    if (isRainbowMode) {
        rainbowButton.textContent = "Rainbow Mode: On";  // Show "On" when rainbow mode is active
    } else {
        rainbowButton.textContent = "Rainbow Mode: Off"; // Show "Off" when rainbow mode is inactive
    }

});

function generateRanColor() {
    let red = Math.floor(Math.random() * 256);   // Random number between 0 and 255
    let green = Math.floor(Math.random() * 256); // Random number between 0 and 255
    let blue = Math.floor(Math.random() * 256);  // Random number between 0 and 255

    // Return the color in rgb format
    return `rgb(${red}, ${green}, ${blue})`;
}
