import { dragListenerInit } from "./dom_module";

const deploymentPreparation = (fleet, isHuman) => {
  const userBoard = document.createElement("div");
  userBoard.className = "user-board";
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

const PlayerDeployment = (fleetOne, fleetTwo) => {
  const preparationBoard = document.createElement("section");
  preparationBoard.className = "preparation-board";

  preparationBoard.appendChild(deploymentPreparation(fleetOne, true));
  preparationBoard.appendChild(deploymentPreparation(fleetTwo));

  const [app] = document.getElementsByClassName("app");
  app.appendChild(preparationBoard);

  dragListenerInit();
};

const removePlayerDeployment = () => {
  const deploymentBoards = [
    ...document.getElementsByClassName("preparation-board"),
  ];
  const [app] = document.getElementsByClassName("app");
  deploymentBoards.forEach((board) => {
    app.removeChild(board);
  });
};

export default PlayerDeployment;
export { removePlayerDeployment };
