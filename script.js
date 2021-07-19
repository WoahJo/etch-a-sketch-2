
const gridContainer = document.querySelector('#grid-container');
const coloring = document.getElementsByClassName("grid-item");
const gridItem = document.querySelector('.grid-item');
let gridSize = 5;
let custGrid;
let bgColor = "red";





function newGrid(setGrid){
    let i;
    gridContainer.style.setProperty('--grid-rows', setGrid);
    gridContainer.style.setProperty('--grid-columns', setGrid);
    for(i = 0; i < setGrid * setGrid; i++){
        let newDiv = document.createElement('div');
        gridContainer.appendChild(newDiv).className = 'grid-item';
        newDiv.addEventListener("mouseover", function(){
            newDiv.style.setProperty("background", bgColor);
        });   
    }
}

newGrid(gridSize);

function removeGrid(){
    document.querySelectorAll('.grid-item').forEach(g => g.remove());
}

//Creates grid from prompt.
function promptGrid(){
    removeGrid();
    custGrid = prompt("Enter dimensions: [Ex: 20 = 20 x 20] (Limit 100)");
    custGrid = Number(custGrid);
    console.log(custGrid);
    if(custGrid > 100 || isNaN(custGrid) || custGrid < 2){
        alert("Must be a number between 2 and 100"); 
        bgColor = "green";
    }
    else if(custGrid <= 100){
        // bgColor = "blue";
        gridSize = custGrid;
        newGrid(custGrid);
    }
}

//Attaches promptGrid() to the button.
const createGrid = document.querySelector('#create-grid');
createGrid.addEventListener("click", function(e){
    promptGrid();
});

const clear = document.querySelector('#clear');
clear.addEventListener("click", function(e){
    let itemPluck = document.querySelectorAll('.grid-item');
    itemPluck.forEach(item => item.style.setProperty("background", "transparent"));
})

// const rainbow = document.querySelector("#rainbow");
// rainbow.addEventListener("click", () => bgColor = "limegreen");

const color1 = document.querySelector('#color1');
color1.addEventListener("click", () => bgColor = '#0d3b66');

const color2 = document.querySelector('#color2');
color2.addEventListener('click', () => bgColor = '#3da5d9');

const color3 = document.querySelector('#color3');
color3.addEventListener('click', () => bgColor = '#faf0ca');

const color4 = document.querySelector('#color4');
color4.addEventListener('click', () => bgColor = '#f95738');

const color5 = document.querySelector('#color5');
color5.addEventListener('click', () => bgColor = '#ee964b');

const color6 = document.querySelector('#color6');
color6.addEventListener('click', () => bgColor = '#f4d35e');

const colorPicker = document.querySelector('#pkr-button');
colorPicker.addEventListener("change", function(e){
    bgColor = colorPicker.value;
});