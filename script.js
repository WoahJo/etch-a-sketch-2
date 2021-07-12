
const gridContainer = document.querySelector('#grid-container');
const gridItem = document.querySelector('.grid-item');
let gridSize = 8;


function newGrid(rows, cols){
    let i;
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-columns', cols);
    for(i = 0; i < (rows * cols); i++){
        let newDiv = document.createElement('div');
        gridContainer.appendChild(newDiv).className = 'grid-item';
    } 
}

function promptGid(){
    let attempts;
    for(attempts = 0; attempts < 3; attempts++){
        gridSize = prompt("Enter dimensions: [Ex: 20 = 20 x 20] (Limit 100)");
        if(gridSize > 100 || gridSize != Number){
            alert("Must be a number below or equal to 100!")
            attempts++
        }
        else{ break;}
    }
    newGrid(gridSize, gridSize);
}

const createGrid = document.querySelector('');

newGrid(gridSize, gridSize);