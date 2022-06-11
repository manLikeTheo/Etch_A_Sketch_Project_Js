const divContainer = document.querySelector(".container");

let gridSize = 16;

function createGrid(){
    for(let i = 0; i < gridSize * gridSize; i++){
        const squareDiv = document.createElement("div");
        divContainer.appendChild(squareDiv);
        squareDiv.classList.add("grid-item");
        }

        //Change background on mouse over
        //Create "hover" effect when mouse passes over each square
        const allSquareDivs = divContainer.querySelectorAll("div");
        //console.log(allSquareDivs);
        allSquareDivs.forEach(singleSquare =>{
        singleSquare.addEventListener("mouseover", (e)=>{
            e.target.style.backgroundColor = "black";
    })
})

}
//create the grid area by calling the function
createGrid();


// Reset Grid Button
const resetGrid = document.querySelector(".reset-grid");
resetGrid.addEventListener("click", newGrid)

function newGrid(){
    let gridReset = parseInt(prompt("Enter the number of squares. Numner should not exceed 100 Squares"));
    gridSize = gridReset;
    if(gridSize > 100){
        alert("Value should be less than or equal to 100")
    } else if(gridSize < 1 || gridSize === null){
        alert("Please Enter a value between 1 and/or equal to 100");
    } else{
        const styleSheet = document.styleSheets[0];
        styleSheet.cssRules[2].style.gridTemplateRow = `repeat(${gridSize}, auto)`;
        styleSheet.cssRules[2].style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
        eraseGridArea();
        createGrid();
        const gridSizeDisplay = document.createElement("p");
        document.querySelector("body").appendChild(gridSizeDisplay);
        gridSizeDisplay.textContent = gridSize;
        gridSizeDisplay.classList.add("grid-text-display");
    }
}

 //newGrid();

//Function to erase grid area
function eraseGridArea(){
    divContainer.innerHTML = "";
}
