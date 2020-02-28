
const container = document.querySelector(".container");
const items = document.getElementsByClassName("item");
const btn = document.getElementById("btn"); 

makeGrid(16);

function makeGrid(gridSize) {
   container.style.width = "550px";
   container.style.height = "550px";
   container.style.margin = "auto";
   container.style.display = "grid";
   container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
 
   let numOfItems = gridSize * gridSize;
   for(let i = 0; i < numOfItems; i++) {
      let item = document.createElement("div");
      item.className = "item";
      container.appendChild(item);
   }

   for(let i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseover", changeColor);
   }
}   

btn.addEventListener("click", promptNewGrid);

function promptNewGrid() {
   let newGrid = prompt("How many squares per side?");
   while(items.length > 0) {
      items[0].parentNode.removeChild(items[0]);
   }
   makeGrid(newGrid);
}

function changeColor() {
   this.classList.add("changeColor");
}
