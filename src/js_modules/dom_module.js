import Ship from "./Ship";
// import FleetTemplate from "./js_modules/FleetTemplate";

const dropHandler = (element, gameBoard) => {
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.style.background = "";
    if (e.target.className === "drop-zone") {
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
      dragged.parentElement.removeChild(dragged);
    }
  });

  element.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
};

const specialClickHandler = (element, player, x, y, changeTurn) => {
  const gameBoard = player.opponentBoard;
  ["click", "mouseenter"].forEach((event) =>
    element.addEventListener(event, () => {
      console.log(element.dataset.id);
      const winnerExist = gameBoard.isFleetSunk();
      if (player.getTurn() && !winnerExist) {
        const valid = player.play(x, y);
        console.log(valid, x, y);
        if (valid) changeTurn();
        if (gameBoard.shipBoard[x][y]) {
          element.classList.remove("black");
          element.classList.add("hit");
        } else element.classList.add("empty-hit");
      }
    })
  );
};

const generateGrid10 = (container, gameBoard, player) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const gridElement = document.createElement("div");
      gridElement.dataset.id = `${i}${j}`;
      if (!player.isHuman) {
        // this means the board belongs to human and is computer's target
        gridElement.classList.add("drop-zone");
      }
      dropHandler(gridElement, gameBoard);
      container.appendChild(gridElement);
      const { gridBoard } = gameBoard;
      gridBoard[i][j] = gridElement;
    }
  }
};

const boardAddClickDOM = (container, player, changeTurn) => {
  container.childNodes.forEach((node) => {
    const dataset = node.dataset.id;
    const [x, y] = [parseInt(dataset[0], 10), parseInt(dataset[1], 10)];
    specialClickHandler(node, player, x, y, changeTurn);
  });
};

const dragListenerInit = () => {
  const shipSquares = [...document.getElementsByClassName("ship-square")];
  let grabShipIndex;
  shipSquares.forEach((shipSquare) => {
    shipSquare.addEventListener("mousedown", () => {
      grabShipIndex = parseInt(shipSquare.dataset.id, 10);
    });
  });
  document.addEventListener("drag", () => {}, false);
  document.addEventListener(
    "dragstart",
    (e) => {
      const data = { id: e.target.id, index: grabShipIndex };
      e.dataTransfer.setData("text/plain", JSON.stringify(data));
      e.target.style.opacity = 0.5;
    },
    false
  );
  document.addEventListener(
    "dragend",
    (e) => {
      e.target.style.opacity = "";
    },
    false
  );
  document.addEventListener(
    "dragenter",
    (e) => {
      // highlight potential drop target when the draggable element enters it
      if (e.target.classList.contains("drop-zone")) {
        e.target.style.background = "purple";
      }
    },
    false
  );

  document.addEventListener(
    "dragleave",
    (e) => {
      // reset background of potential drop target when the draggable element leaves it
      if (e.target.classList.contains("drop-zone")) {
        e.target.style.background = "";
      }
    },
    false
  );
};

const addButtonHandler = (element, init) => {
  element.addEventListener("click", init);
};

export { generateGrid10, boardAddClickDOM, addButtonHandler, dragListenerInit };
