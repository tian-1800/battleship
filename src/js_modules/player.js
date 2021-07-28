const Player = (isHumanArg, opponentBoard) => {
  let turn;
    const isHuman = isHumanArg;
  const play = (x, y) => {
    const validHit = opponentBoard.receiveAttack(x, y);
    if (validHit) return true;
    return false;
  };

  const computerPlay = () => {
    const random = Math.floor(Math.random() * 10);
    const row = opponentBoard.shootingBoard[random];
    const rowFiltered = row.filter((el) => el !== 999);
    const eligibleSquaresCount = rowFiltered.length;
    const choice = Math.floor(Math.random() * eligibleSquaresCount);
    const index = rowFiltered[choice];
    play(random, index);
    opponentBoard.gridBoard[random][index].click();
  };

  return {
    turn,
    isHuman,
    play,
    computerPlay,
  };
};

export default Player;
