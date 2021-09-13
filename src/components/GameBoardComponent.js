import Ship from "../js_modules/Ship";
// import Gameboard from "../js_modules/Gameboard";

const GameBoardComponent = (player, changeTurn) => {
  const opponent = player.getOpponent();
  const gameBoard = player.getOwnBoard();
  const { length } = gameBoard.shootingBoard;

  const board = document.createElement("div");
  board.className = "game-board";
  board.style.display = "grid";
  board.style.gridTemplateColumns = `repeat(${length}, 20px)`;
  board.style.gridTemplateRows = `repeat(${length}, 20px)`;

  const specialClickHandler = (element, x, y) => {
    ["click", "mouseenter"].forEach((event) =>
      element.addEventListener(event, () => {
        const winnerExist = gameBoard.isFleetSunk();
        // console.log("hover", winnerExist);
        if (opponent.getTurn() && !winnerExist) {
          const valid = opponent.play(x, y);
          if (valid) changeTurn();
          if (gameBoard.shipBoard[x][y]) {
            element.classList.remove("black");
            element.classList.add("hit");
          } else element.classList.add("empty-hit");
        }
      })
    );
  };

  const onDropHandler = (element) => {
    element.addEventListener("drop", (e) => {
      e.preventDefault();
      e.target.style.background = "";

      if (
        e.target.classList.contains("drop-zone") &&
        e.target.classList.contains(`${player.name}`)
      ) {
        const { id, index } = JSON.parse(e.dataTransfer.getData("text/plain"));
        const dragged = document.getElementById(id);
        const shipName = id.split("-").pop();
        const shipLength = dragged.childNodes.length;
        const ship = Ship(shipLength, shipName);

        const row = parseInt(e.target.dataset.id.substring(0, 1), 10);
        const col = parseInt(e.target.dataset.id.substring(1, 2), 10) - index;
        gameBoard.deployShip(ship, [row, col], "horizontal");
        for (let i = col; i < ship.length + col; i += 1) {
          gameBoard.gridBoard[row][i].classList.add("black");
        }

        const container = dragged.parentElement;
        container.removeChild(dragged);
        try {
          container.removeChild(container.getElementsByTagName("button")[0]);
        } finally {
          if (container.childNodes.length === 0) {
            document.getElementById("btn-play").disabled = false;
          }
        }
      }
    });

    element.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  };

  const renderGameBoard = () => {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
    for (let i = 0; i < length; i += 1) {
      for (let j = 0; j < length; j += 1) {
        const gridElement = document.createElement("div");
        gridElement.dataset.id = `${i}${j}`;
        gridElement.classList.add("drop-zone", `${player.name}`);

        specialClickHandler(gridElement, i, j);
        onDropHandler(gridElement);
        board.appendChild(gridElement);
        const { gridBoard } = gameBoard;
        gridBoard[i][j] = gridElement;
      }
    }
  };

  renderGameBoard();

  return board;
};

export default GameBoardComponent;
