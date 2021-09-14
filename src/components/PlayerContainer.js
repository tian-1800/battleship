import GameBoard from "./GameBoardComponent";
import PlacementBoard from "./PlacementBoard";
import FleetTemplate from "../js_modules/FleetTemplate";

const PlayerContainer = (player, className, changeTurn, getHover) => {
  const fleet = FleetTemplate();
  const container = document.createElement("div");
  container.className = className;

  const header = document.createElement("h3");
  header.textContent = player.name;
  container.appendChild(header);

  // render game board
  const gameBoard = GameBoard(player, changeTurn, getHover);
  container.appendChild(gameBoard);

  // render ship placement board
  const placementBoard = PlacementBoard(fleet, player);
  container.appendChild(placementBoard);

  return container;
};

export default PlayerContainer;
