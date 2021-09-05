import "./style.css";

import Player from "./js_modules/player";
import Gameboard from "./js_modules/gameboard";
import Ship from "./js_modules/ship";
import { generateGrid10 } from "./js_modules/dom_module";

const gameHelper = () => {
  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne.opponentBoard.isFleetSunk()) return playerOne;
    if (playerTwo.opponentBoard.isFleetSunk()) return playerTwo;
    return false;
  };

  const executeWinner = (winner) => {
    document.querySelector(".button-container").classList.remove("hidden");
    document.querySelector(".btn-play").textContent = "Play Again";
    document.querySelector(
      ".winner-announcement"
    ).textContent = `${winner.title} Win`;
  };

  return { checkWinner, executeWinner };
};

const gameLoop = (() => {
  const fleet = [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];
  const coordinatesOne = [
    [1, 3],
    [2, 5],
    [4, 3],
    [5, 6],
    [2, 8],
  ];
  const coordinatesTwo = [
    [1, 3],
    [2, 5],
    [4, 3],
    [5, 6],
    [2, 8],
  ];

  let boardOne;
  let boardTwo;
  let player;
  let computer;

  const changeTurn = () => {
    const { checkWinner, executeWinner } = gameHelper();
    const winner = checkWinner(player, computer);
    if (winner) {
      executeWinner(winner);
    } else {
      player.toggleTurn();
      computer.toggleTurn();
      if (computer.getTurn()) {
        computer.computerPlay();
        player.toggleTurn();
        computer.toggleTurn();
      }
    }
  };

  const init = () => {
    [boardOne, boardTwo] = [Gameboard(fleet), Gameboard(fleet)];
    [player, computer] = [Player(true, boardTwo), Player(false, boardOne)];
    player.title = "You";
    computer.title = "Computer";

    boardOne.deployFleet(coordinatesOne, "horizontal");
    boardTwo.deployFleet(coordinatesTwo, "horizontal");
    const [gridOne, gridTwo] =
      document.getElementsByClassName("grid-container");

    generateGrid10(gridOne, boardOne, computer, changeTurn);
    generateGrid10(gridTwo, boardTwo, player, changeTurn);

    player.setTurn(true);
  };

  return { init };
})();

document.querySelector(".btn-play").addEventListener("click", gameLoop.init);
