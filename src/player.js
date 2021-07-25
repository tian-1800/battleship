const Player = (isHuman, opponentBoard) => {
  let turn = false;
  //   const isHuman = (type === 'human');
  const play = (x, y) => {
    const validHit = opponentBoard.receiveAttack(x, y);
    if (validHit) turn = false;
    else turn = true;
  };

  const computerPlay = () => {
    const random = Math.floor(Math.random() * 10);
    const row = opponentBoard.shootingBoard[random];
    const rowFiltered = row.filter((el) => el === 999);
    const eligibleSquaresCount = rowFiltered.length;
    const choice = Math.floor(Math.random() * eligibleSquaresCount);
    const index = rowFiltered[choice];
    play(random, index);
  };

  return {
    turn,
    play,
    computerPlay,
  };
};

export default Player;
