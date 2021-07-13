
const gridContainer = document.querySelector('#grid-container');
const gridItem = document.querySelector('.grid-item');
let gridSize = 5;
let custGrid;


function newGrid(setGrid){
    let i;
    gridContainer.style.setProperty('--grid-rows', setGrid);
    gridContainer.style.setProperty('--grid-columns', setGrid);
    for(i = 0; i < setGrid * setGrid; i++){
        let newDiv = document.createElement('div');
        gridContainer.appendChild(newDiv).className = 'grid-item';
        
    } 
}

function removeGrid(){
    gridContainer.querySelectorAll('.grid-item');
    gridContainer.forEach(g => g.remove());
}

function promptGrid(){
    removeGrid();
    custGrid = prompt("Enter dimensions: [Ex: 20 = 20 x 20] (Limit 100)");
    custGrid = Number(custGrid);
    console.log(custGrid);
    if(custGrid > 100 || isNaN(custGrid) || custGrid < 2){
        // custGrid = prompt("Enter dimensions: [Ex: 20 = 20 x 20] (Limit 100)");
        alert("Must be a number between 2 and 100"); 
    }
    
    else if(custGrid <= 100){
        gridSize = custGrid;
        newGrid(custGrid);
    }
}


const createGrid = document.querySelector('#create-grid');
createGrid.addEventListener("click", function(e){
    promptGrid();
});

newGrid(gridSize);