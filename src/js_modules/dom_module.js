const specialClickHandler = (element, player, x, y, reference, callback) => {
  element.addEventListener("click", () => {
    if (player.turn) {
      const valid = player.play(x, y);
      if (valid) callback();
      if (reference.shipBoard[x][y]) {
        element.classList.remove("black");
        element.classList.add("hit");
      }
      else element.classList.add("empty-hit")
    }
  });
};

const generateGrid10 = (parent, reference, player, callback) => {
  while (parent.firstChild) { parent.removeChild(parent.firstChild); }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const gridElement = document.createElement("div");
      if (reference.shipBoard[i][j]) gridElement.classList.add("black");
      specialClickHandler(gridElement, player, i, j, reference, callback);
      parent.appendChild(gridElement);
      const {gridBoard} = reference;
      gridBoard[i][j] = gridElement;
    }
  }
};

export default generateGrid10;
