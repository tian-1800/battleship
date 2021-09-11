import "./style.css";

import Player from "./js_modules/Player";
import Gameboard from "./js_modules/Gameboard";
// import Ship from "./js_modules/Ship";
import FleetTemplate from "./js_modules/FleetTemplate";
import { generateGrid10, boardAddClickDOM } from "./js_modules/dom_module";
import PlayerDeployment, {
  removePlayerDeployment,
} from "./js_modules/PlayerDeployment";

const gameHelper = () => {
  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne.opponentBoard.isFleetSunk()) return playerOne;
    if (playerTwo.opponentBoard.isFleetSunk()) return playerTwo;
    return false;
  };

  const displayWinner = (winner) => {
    document.querySelector(".button-container").classList.remove("hidden");
    document.getElementById("btn-play").textContent = "Play Again";
    document.querySelector(
      ".winner-announcement"
    ).textContent = `${winner.title} Win`;
  };

  const resetDisplayWinner = () => {
    document.querySelector(".button-container").classList.add("hidden");
  };

  const changeTurn = (playerOne, playerTwo) => {
    const winner = checkWinner(playerOne, playerTwo);
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
  const state = { gameState: "" };
  const coordinatesTwo = [
    [1, 3],
    [2, 5],
    [4, 3],
    [5, 6],
    [3, 2],
  ];

  let player;
  let computer;
  const [gridOne, gridTwo] = document.getElementsByClassName("grid-container");
  const { changeTurn, resetDisplayWinner } = gameHelper();

  const deploy = () => {
    const fleetOne = FleetTemplate();
    const fleetTwo = FleetTemplate();
    const boardOne = Gameboard();
    const boardTwo = Gameboard();
    [player, computer] = [Player(true, boardTwo), Player(false, boardOne)];
    player.title = "You";
    computer.title = "Computer";

    // boardOne.deployFleet(coordinatesOne, "vertical");
    boardTwo.deployFleet(fleetTwo, coordinatesTwo, "horizontal");

    generateGrid10(gridOne, boardOne, computer);
    generateGrid10(gridTwo, boardTwo, player, () => {
      changeTurn(player, computer);
    });

    player.setTurn(false);
    computer.setTurn(false);
    PlayerDeployment(fleetOne, fleetTwo);
  };

  const play = () => {
    player.setTurn(true);
    resetDisplayWinner();
    removePlayerDeployment();
    boardAddClickDOM(gridOne, computer, () => {
      changeTurn(player, computer);
    });
    boardAddClickDOM(gridTwo, player, () => {
      changeTurn(player, computer);
    });
  };

  const gameStart = () => {
    const button = document.getElementById("btn-play");
    button.textContent = "Start deployment";
    button.addEventListener("click", () => {
      if (state.gameState === "deployment") {
        state.gameState = "playing";
        button.textContent = "Play Again";
        play();
      } else {
        state.gameState = "deployment";
        button.textContent = "Start playing";
        deploy();
      }
    });
  };

  return { gameStart };
})();

gameLoop.gameStart();
