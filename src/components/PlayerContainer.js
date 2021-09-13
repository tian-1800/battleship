import GameBoard from "./GameBoardComponent";
import PlacementBoard from "./PlacementBoard";
import FleetTemplate from "../js_modules/FleetTemplate";

const PlayerContainer = (player, className, changeTurn) => {
  const fleet = FleetTemplate();
  const container = document.createElement("div");
  container.className = className;

  // render game board
  const gameBoard = GameBoard(player, changeTurn);
  container.appendChild(gameBoard);

  // render ship placement board
  const placementBoard = PlacementBoard(fleet, player);
  container.appendChild(placementBoard);

  return container;
};

export default PlayerContainer;
