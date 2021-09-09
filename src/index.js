import "./style.css";

import Player from "./js_modules/Player";
import Gameboard from "./js_modules/Gameboard";
// import Ship from "./js_modules/Ship";
import FleetTemplate from "./js_modules/FleetTemplate";
import { generateGrid10 } from "./js_modules/dom_module";
import PlayerDeployment from "./js_modules/PlayerDeployment";

const gameHelper = () => {
  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne.opponentBoard.isFleetSunk()) return playerOne;
    if (playerTwo.opponentBoard.isFleetSunk()) return playerTwo;
    return false;
  };

  const displayWinner = (winner) => {
    document.querySelector(".button-container").classList.remove("hidden");
    document.querySelector(".btn-play").textContent = "Play Again";
    document.querySelector(
      ".winner-announcement"
    ).textContent = `${winner.title} Win`;
  };

  const resetDisplayWinner = () => {
    document.querySelector(".button-container").classList.add("hidden");
  };

  const changeTurn = (playerOne, playerTwo) => {
    const winner = checkWinner(playerOne, playerTwo);
    // console.log(winner.title);
    if (winner) {
      displayWinner(winner);
    } else {
      playerOne.toggleTurn();
      playerTwo.toggleTurn();
      if (playerTwo.getTurn()) {
        playerTwo.computerPlay();
        if (winner) {
          displayWinner(winner);
        }
      }
    }
  };

  return { checkWinner, displayWinner, changeTurn, resetDisplayWinner };
};

const gameLoop = (() => {
  // const coordinatesOne = [
  //   [3, 0],
  //   [2, 5],
  //   [4, 3],
  //   [5, 6],
  //   [3, 8],
  // ];
  const coordinatesTwo = [
    [1, 3],
    [2, 5],
    [4, 3],
    [5, 6],
    [3, 2],
  ];

  // let boardOne;
  // let boardTwo;
  let player;
  let computer;

  const init = () => {
    console.log(FleetTemplate());
    const fleetOne = FleetTemplate();
    const fleetTwo = FleetTemplate();
    const boardOne = Gameboard();
    const boardTwo = Gameboard();
    [player, computer] = [Player(true, boardTwo), Player(false, boardOne)];
    player.title = "You";
    computer.title = "Computer";

    // boardOne.deployFleet(coordinatesOne, "vertical");
    boardTwo.deployFleet(fleetTwo, coordinatesTwo, "horizontal");
    const [gridOne, gridTwo] =
      document.getElementsByClassName("grid-container");

    const { changeTurn, resetDisplayWinner } = gameHelper();
    generateGrid10(gridOne, boardOne, computer, () => {
      changeTurn(player, computer);
    });
    generateGrid10(gridTwo, boardTwo, player, () => {
      changeTurn(player, computer);
    });

    PlayerDeployment(fleetOne, fleetTwo);
    resetDisplayWinner();
    player.setTurn(true);
  };

  return { init };
})();

document.querySelector(".btn-play").addEventListener("click", gameLoop.init);
