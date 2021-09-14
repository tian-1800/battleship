import "./css/style.css";

import Player from "./js_modules/Player";
import Gameboard from "./js_modules/Gameboard";
import PlayerContainer from "./components/PlayerContainer";
import ButtonContainer from "./components/ButtonContainer";

const gameHelper = () => {
  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne.getOwnBoard().isFleetSunk()) return playerTwo;
    if (playerTwo.getOwnBoard().isFleetSunk()) return playerOne;
    return false;
  };

  const displayWinner = (winner) => {
    document.querySelector(".button__play").classList.remove("hidden");
    const announcement = document.querySelector(".container__announcement");
    announcement.textContent = `${winner.name} Win`;
    announcement.classList.remove("hidden");
  };

  const resetDisplayWinner = () => {
    document.querySelector(".container__announcement").classList.add("hidden");
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

  const state = { isPlaying: "", hover: false };
  const setState = (arg) => {
    state.isPlaying = arg;
  };
  const getState = () => state.isPlaying;
  const setHover = (arg) => {
    state.hover = arg;
  };
  const getHover = () => state.hover;
  let playerOne;
  let playerTwo;

  const [mainFrame] = document.getElementsByClassName("container");
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
      "container__player one",
      () => {
        changeTurn(playerOne, playerTwo);
      },
      getHover
    );
    const containerTwo = PlayerContainer(
      playerTwo,
      "container__player two",
      () => {
        changeTurn(playerOne, playerTwo);
      },
      getHover
    );
    mainFrame.append(containerOne, containerTwo);
  };

  const play = () => {
    playerOne.setTurn(true);
    resetDisplayWinner();
  };

  const gameStart = () => {
    const buttonContainer = ButtonContainer(
      { getState, setState },
      { getHover, setHover },
      deploy,
      play
    );
    mainFrame.appendChild(buttonContainer);
  };

  return { gameStart };
})();

gameLoop.gameStart();
