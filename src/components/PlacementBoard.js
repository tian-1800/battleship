const domHelper = () => {
  const dragListenerInit = (board) => {
    const shipSquares = [
      ...board.getElementsByClassName("dragged-ship__square"),
    ];
    let grabShipIndex;
    shipSquares.forEach((shipSquare) => {
      shipSquare.addEventListener("mousedown", () => {
        grabShipIndex = parseInt(shipSquare.dataset.id, 10);
      });
    });
    board.addEventListener("drag", () => {}, false);
    board.addEventListener(
      "dragstart",
      (e) => {
        e.stopImmediatePropagation();
        const data = { id: e.target.id, index: grabShipIndex };
        e.dataTransfer.setData("text/plain", JSON.stringify(data));
        e.target.style.opacity = 0.2;
        e.target.style.background = "rgba(0,0,0,0.3)";
      },
      false
    );
    board.addEventListener(
      "dragend",
      (e) => {
        e.target.style.opacity = "";
      },
      false
    );
    board.addEventListener(
      "dragenter",
      (e) => {
        // highlight potential drop target when the draggable element enters it
        if (e.target.classList.contains("drop-zone")) {
          e.target.style.background = "purple";
        }
      },
      false
    );

    board.addEventListener(
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

  const rndButtonHandler = (element, callback) => {
    const handler = () => {
      element.parentElement.parentElement.removeChild(element.parentElement);
      callback();
      const [playButton] = document.getElementsByClassName("button__play");
      playButton.disabled = false;
    };
    element.addEventListener("click", handler);
  };

  return { dragListenerInit, rndButtonHandler };
};

const PlacementBoard = (fleet, player) => {
  const { dragListenerInit, rndButtonHandler } = domHelper();

  const placementPreparation = () => {
    const userBoard = document.createElement("div");
    userBoard.className = "user-board";
    if (!player.isHuman) {
      player.getOwnBoard().deployFleet(fleet, "random");
      return userBoard;
    }

    const renderShip = (ship, id) => {
      const renderedShip = document.createElement("div");
      renderedShip.className = "dragged-ship";
      renderedShip.id = id;
      renderedShip.draggable = "true";

      for (let i = 0; i < ship.length; i += 1) {
        const subShip = document.createElement("div");
        subShip.dataset.id = i;
        subShip.className = "dragged-ship__square";
        renderedShip.appendChild(subShip);
      }
      userBoard.appendChild(renderedShip);
    };

    const idTemplate = player.isHuman ? "human" : "computer";
    fleet.forEach((ship) => renderShip(ship, `${idTemplate}-${ship.name}`));

    const rndButton = document.createElement("button");
    rndButton.textContent = "Random Placement";
    rndButtonHandler(rndButton, () => {
      player.getOwnBoard().deployFleet(fleet, "random");
      player.toggleShipsVisibility();
    });
    userBoard.appendChild(rndButton);
    return userBoard;
  };

  const placementBoard = document.createElement("div");
  placementBoard.className = "preparation-board";
  placementBoard.appendChild(placementPreparation());
  dragListenerInit(placementBoard);

  return placementBoard;
};

export default PlacementBoard;
