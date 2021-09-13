import { dragListenerInit, rndButtonHandler } from "./dom_module";

const PlacementBoard = () => {
  const deploymentPreparation = (fleet, isHuman, randomDeployment) => {
    const userBoard = document.createElement("div");
    userBoard.className = "user-board";
    if (!isHuman) return userBoard;

    console.log(randomDeployment);
    const rndButton = document.createElement("button");
    rndButton.textContent = "Random Placement";
    rndButtonHandler(rndButton, randomDeployment);
    userBoard.appendChild(rndButton);

    const renderShip = (ship, id) => {
      const renderedShip = document.createElement("div");
      renderedShip.className = "dragged-ship";
      renderedShip.id = id;
      if (isHuman) {
        renderedShip.draggable = "true";
      }

      for (let i = 0; i < ship.length; i += 1) {
        const subShip = document.createElement("div");
        subShip.dataset.id = i;
        subShip.className = "ship-square";
        renderedShip.appendChild(subShip);
      }
      userBoard.appendChild(renderedShip);
    };
    const idTemplate = isHuman ? "human" : "computer";
    fleet.forEach((ship) => renderShip(ship, `${idTemplate}-${ship.name}`));
    return userBoard;
  };

  const removePlayerDeployment = () => {
    const deploymentBoards = [
      ...document.getElementsByClassName("preparation-board"),
    ];
    const [mainFrame] = document.getElementsByClassName("main-frame");
    deploymentBoards.forEach((board) => {
      mainFrame.removeChild(board);
    });
  };

  const PlayerDeployment = (fleetOne, fleetTwo, randomDeployment) => {
    const preparationBoard = document.createElement("section");
    preparationBoard.className = "preparation-board";

    preparationBoard.appendChild(
      deploymentPreparation(fleetOne, true, randomDeployment)
    );
    preparationBoard.appendChild(deploymentPreparation(fleetTwo, false));

    const [mainFrame] = document.getElementsByClassName("main-frame");
    mainFrame.appendChild(preparationBoard);

    dragListenerInit();
  };
};
export default PlacementBoard;
// export { removePlayerDeployment };
