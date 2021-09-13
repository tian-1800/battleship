const Player = (isHumanArg, board) => {
  const state = { turn: false };
  const isHuman = isHumanArg;
  const ownBoard = board;
  const getOwnBoard = () => ownBoard;

  let opponent;
  let opponentBoard;
  const setOpponent = (arg) => {
    opponent = arg;
    opponentBoard = arg.getOwnBoard();
  };
  const getOpponent = () => opponent;
  // const opponentBoard = opponent.ownBoard;

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
    let eligibleSquaresCount;
    const randomHit = () => {
      const random = Math.floor(Math.random() * 10);
      const row = [...opponentBoard.shootingBoard[random].keys()];
      const rowFiltered = row.filter((el) => {
        const index = row.indexOf(el);
        const shootingSquare = [...opponentBoard.shootingBoard[random]][index];
        return shootingSquare !== true;
      });
      eligibleSquaresCount = rowFiltered.length;
      const choice = Math.floor(Math.random() * eligibleSquaresCount);
      // console.log(rowFiltered);
      const index = rowFiltered[choice];
      return { random, index };
    };
    let random;
    let index;
    let limit = 0;
    while (!Number.isInteger(index) && limit < 100) {
      const coordinate = randomHit();
      index = coordinate.index;
      random = coordinate.random;
      limit += 1;
      // console.log("while was called, row: ", random, ", index: ", index);
    }
    // console.log(random, index, Number.isInteger(index + 1));
    // play(random, index);
    opponentBoard.gridBoard[random][index].click();
    // index = 0;
  };

  return {
    getOwnBoard,
    setOpponent,
    getOpponent,
    getTurn,
    setTurn,
    toggleTurn,
    isHuman,
    play,
    computerPlay,
  };
};

export default Player;
