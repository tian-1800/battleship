import Ship from "../js_modules/Ship";

const GameBoardComponent = (player, changeTurn, getHover) => {
  const opponent = player.getOpponent();
  const gameBoard = player.getOwnBoard();
  const { length } = gameBoard.shootingBoard;

  const board = document.createElement("div");
  board.className = "game-board";
  board.style.display = "grid";
  board.style.gridTemplateColumns = `repeat(${length}, 20px)`;
  board.style.gridTemplateRows = `repeat(${length}, 20px)`;

  const specialClickHandler = (element, x, y) => {
    ["click", "mouseenter"].forEach((event) => {
      element.addEventListener(event, () => {
        if (event === "mouseenter" && !getHover()) return;
        const winnerExist = gameBoard.isFleetSunk();
        if (opponent.getTurn() && !winnerExist) {
          const valid = opponent.play(x, y);
          if (valid) changeTurn();
          if (gameBoard.shipBoard[x][y]) {
            element.classList.remove("--visible");
            element.classList.add("--hit");
          } else element.classList.add("ship-present--false");
        }
      });
    });
  };

  const onDropHandler = (element) => {
    element.addEventListener("drop", (e) => {
      e.preventDefault();
      e.target.style.background = "";

      if (
        e.target.classList.contains("game-board__drop-zone") &&
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
          gameBoard.gridBoard[row][i].classList.add("--visible");
        }

        const container = dragged.parentElement;
        container.removeChild(dragged);
        if (container.getElementsByTagName("button").length > 0)
          container.removeChild(container.getElementsByTagName("button")[0]);
        if (container.childNodes.length === 0) {
          document.getElementsByClassName("button__play")[0].disabled = false;
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
        gridElement.classList.add("game-board__drop-zone", `${player.name}`);

        const { gridBoard } = gameBoard;
        gridBoard[i][j] = gridElement;
        specialClickHandler(gridElement, i, j);
        onDropHandler(gridElement);
        board.appendChild(gridElement);
      }
    }
  };

  renderGameBoard();

  return board;
};

export default GameBoardComponent;
