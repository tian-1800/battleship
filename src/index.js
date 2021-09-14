import "./css/style.css";

import Player from "./js_modules/Player";
import Gameboard from "./js_modules/Gameboard";
import PlayerContainer from "./components/PlayerContainer";

const gameHelper = () => {
  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne.getOwnBoard().isFleetSunk()) return playerTwo;
    if (playerTwo.getOwnBoard().isFleetSunk()) return playerOne;
    return false;
  };

  const displayWinner = (winner) => {
    document.querySelector(".button-container").classList.remove("hidden");
    document.getElementById("btn-play").textContent = "Play Again";
    document.querySelector(
      ".winner-announcement"
    ).textContent = `${winner.name} Win`;
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
  const BOARD_DIMENSION = 10;

  const state = { gameState: "" };
  let playerOne;
  let playerTwo;

  const [mainFrame] = document.getElementsByClassName("main-frame");
  const { changeTurn, resetDisplayWinner } = gameHelper();

  const deploy = () => {
    // reset player-container
    const existingPlayerContainer =
      document.getElementsByClassName("player-container");
    while (existingPlayerContainer.length > 0)
      mainFrame.removeChild(existingPlayerContainer[0]);

    const boardOne = Gameboard(BOARD_DIMENSION);
    const boardTwo = Gameboard(BOARD_DIMENSION);
    [playerOne, playerTwo] = [Player(true, boardOne), Player(false, boardTwo)];
    playerOne.name = "You";
    playerOne.setOpponent(playerTwo);
    playerTwo.name = "Computer";
    playerTwo.setOpponent(playerOne);

    const containerOne = PlayerContainer(
      playerOne,
      "player-container one",
      () => {
        changeTurn(playerOne, playerTwo);
      }
    );
    const containerTwo = PlayerContainer(
      playerTwo,
      "player-container two",
      () => {
        changeTurn(playerOne, playerTwo);
      }
    );
    mainFrame.append(containerOne, containerTwo);
  };

  const play = () => {
    playerOne.setTurn(true);
    resetDisplayWinner();
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
        button.disabled = "true";
        document.querySelector(".winner-announcement").textContent = "";
        deploy();
      }
    });
  };

  return { gameStart };
})();

gameLoop.gameStart();
