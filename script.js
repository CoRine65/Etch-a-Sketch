
const container = document.querySelector(".container");
const gridItem = document.createElement("div");
gridItem.classList.add("gridItem");
container.appendChild(gridItem);

//iteration to create 256 squares for the 16x16
for(let i = 0; i < 256; i++){
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridItem.appendChild(gridSquare);

    gridSquare.interactionCount = 0;

    gridSquare.addEventListener("mouseover", () =>{
        gridSquare.style.backgroundColor = "lightblue";

        gridSquare.interactionCount++;
        let opacity = gridSquare.interactionCount * 0.1;
        if (gridSquare.interactionCount >= 10) {
            opacity = 1; // Fully dark after 10 interactions
        }

        // Apply the new opacity to the square
        gridSquare.style.opacity = opacity;


    })


}


