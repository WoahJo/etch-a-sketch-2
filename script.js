
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

newGrid(gridSize, gridSize);