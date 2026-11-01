let container = document.querySelector(".container");


let createGrid = () => {
    for (let i = 0; i < 256; i++) {
        let tile = document.createElement('div');
        tile.style.border = "1px solid black";
        tile.style.flexBasis = "6.25%";
        tile.style.boxSizing = "border-box";

        tile.addEventListener("mouseover", () => {
            tile.style.backgroundColor = "black";
        });


        container.appendChild(tile);
    }
    
    
    
}

createGrid();


