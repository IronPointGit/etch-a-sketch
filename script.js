let container = document.querySelector(".container");

let size = 20;

let createGrid = (size) => {
    for (let i = 0; i < (size * size); i++) {
        let basisSize = 100/size;
        let tile = document.createElement('div');
        tile.style.border = "1px solid black";
        tile.style.flexBasis = `${basisSize}%`
        tile.style.boxSizing = "border-box";
        tile.style.backgroundColor = "white";

        tile.addEventListener("mouseover", () => {
            tile.style.backgroundColor = "black";
        });


        container.appendChild(tile);
    }
    
    
    
}

createGrid(16);

let btn = document.querySelector("button");

btn.addEventListener('click', () => {
   let input = prompt("Choose size of Grid X by X with a number from 2 - 100");
   let size = parseInt(input);
   createGrid(parseInt(size));
})

let newGrid = (newSize) => {
    createGrid(newSize)
}

