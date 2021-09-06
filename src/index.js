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

  const displayWinner = (winner) => {
    document.querySelector(".button-container").classList.remove("hidden");
    document.querySelector(".btn-play").textContent = "Play Again";
    document.querySelector(
      ".winner-announcement"
    ).textContent = `${winner.title} Win`;
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
        playerOne.toggleTurn();
        playerTwo.toggleTurn();
      }
    }
  };

  return { checkWinner, displayWinner, changeTurn };
};

const gameLoop = (() => {
  const coordinatesOne = [
    [3, 0],
    [2, 5],
    [4, 3],
    [5, 6],
    [3, 8],
  ];
  const coordinatesTwo = [
    [1, 3],
    [2, 5],
    [4, 3],
    [5, 6],
    [3, 2],
  ];

  let boardOne;
  let boardTwo;
  let player;
  let computer;

  const init = () => {
    const fleetOne = [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];
    const fleetTwo = [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];
    boardOne = Gameboard(fleetOne);
    boardTwo = Gameboard(fleetTwo);
    [player, computer] = [Player(true, boardTwo), Player(false, boardOne)];
    player.title = "You";
    computer.title = "Computer";

    boardOne.deployFleet(coordinatesOne, "vertical");
    boardTwo.deployFleet(coordinatesTwo, "horizontal");
    const [gridOne, gridTwo] =
      document.getElementsByClassName("grid-container");
    // const gridOne = document.getElementById("one");
    // const gridTwo = document.getElementById("two");

    const { changeTurn } = gameHelper();
    generateGrid10(gridOne, boardOne, computer, () => {
      changeTurn(player, computer);
    });
    generateGrid10(gridTwo, boardTwo, player, () => {
      changeTurn(player, computer);
    });

    player.setTurn(true);
  };

  return { init };
})();

document.querySelector(".btn-play").addEventListener("click", gameLoop.init);
