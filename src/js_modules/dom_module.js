const specialClickHandler = (element, player, x, y, gameBoard, changeTurn) => {
  element.addEventListener("click", () => {
    console.log(player.title);
    if (player.getTurn()) {
      const valid = player.play(x, y);
      // console.log(gameBoard.shootingBoard[x][y]);
      if (valid) changeTurn();
      if (gameBoard.shipBoard[x][y]) {
        element.classList.remove("black");
        element.classList.add("hit");
      } else element.classList.add("empty-hit");
    }
  });
};

const generateGrid10 = (parent, gameBoard, player, changeTurn) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const gridElement = document.createElement("div");
      if (gameBoard.shipBoard[i][j]) gridElement.classList.add("black");
      specialClickHandler(gridElement, player, i, j, gameBoard, changeTurn);
      parent.appendChild(gridElement);
      const { gridBoard } = gameBoard;
      gridBoard[i][j] = gridElement;
    }
  }
};

const addButtonHandler = (element, init) => {
  element.addEventListener("click", init);
};

export { generateGrid10, addButtonHandler };
