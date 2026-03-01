const container = document.querySelector(".container");

const gridSizeBtn = document.querySelector("#gridSizeBtn");

let size = 16;

function handleInput(){
    let input = Number(prompt("Enter a size for the size*size grid:"));

    if(input === null){
        alert("Invalid input");
        return null;
    }
    return input;
}

function drawGrid() {
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${960 / size}px`;
    square.style.height = `${960 / size}px`;
    container.appendChild(square);

    square.addEventListener("mouseenter", () => {
      square.classList.add("colored");
    });
  }
}

drawGrid();

gridSizeBtn.addEventListener("click", () => {
  container.replaceChildren();
  size = handleInput();

  if (size > 100) {
    size = 100;
  }

  drawGrid();
});
