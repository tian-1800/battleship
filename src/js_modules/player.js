const Player = (isHumanArg, opponentBoard) => {
  const state = { turn: false };
  const isHuman = isHumanArg;

  const getTurn = () => state.turn;
  const setTurn = (val) => {
    state.turn = val;
  };
  const toggleTurn = () => {
    const newState = !state.turn;
    state.turn = newState;
  };

  const play = (x, y) => {
    const isValidHit = opponentBoard.receiveAttack(x, y);
    return isValidHit;
  };

  const computerPlay = () => {
    const random = Math.floor(Math.random() * 10);
    const row = [...opponentBoard.shootingBoard[random].keys()];
    const rowFiltered = row.filter((el) => {
      const index = row.indexOf(el);
      const shootingSquare = [...opponentBoard.shootingBoard[random]][index];
      return shootingSquare !== true;
    });
    const eligibleSquaresCount = rowFiltered.length;
    const choice = Math.floor(Math.random() * eligibleSquaresCount);
    const index = rowFiltered[choice];
    play(random, index);
    opponentBoard.gridBoard[random][index].click();
  };

  return {
    opponentBoard,
    getTurn,
    setTurn,
    toggleTurn,
    isHuman,
    play,
    computerPlay,
  };
};

export default Player;
