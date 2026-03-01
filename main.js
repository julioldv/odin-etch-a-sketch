const container = document.querySelector(".container");

const gridSizeBtn = document.querySelector("#gridSizeBtn");

let size = 16;

function handleInput() {
  let input = prompt("Enter a size for the size*size grid:");
  if (input === null) {
    return null;
  }

  let gridSize = Number(input);
  if (isNaN(gridSize) || gridSize < 1) {
    alert("Invalid input");
    return null;
  } else if (gridSize > 100) {
    alert("Input can't be greater than 100");
    return 100;
  }
  return gridSize;
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
  const newSize = handleInput();
  if (newSize === null) return;

  size = newSize;
  container.replaceChildren();
  size = handleInput();
  drawGrid();
});
