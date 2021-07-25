// import Ship from "./ship";

const Gameboard = () => {
  const dimension = 10;
  const shootingBoard = Array.from(Array(dimension), () =>
    Array.from(Array(dimension).keys())
  );

  const shipBoard = Array.from(Array(dimension), () => new Array(dimension));
  const fleet = [];

  const deployShip = (ship, origin, orientation) => {
    const { length } = ship;
    const [x, y] = origin;
    if (orientation === "horizontal") {
      for (let i = x; i < x + length; i += 1) {
        shipBoard[i][y] = { ship, position: i - x };
      }
    } else if (orientation === "vertical") {
      for (let i = y; i < y + length; i += 1) {
        shipBoard[x][i] = { ship, position: i - y };
      }
    }
    fleet.push(ship);
  };

  const receiveAttack = (x, y) => {
    if (shootingBoard[x][y] === 999) return false;
    shootingBoard[x][y] = 999;
    if (shipBoard[x][y]) {
      const { ship, position } = shipBoard[x][y];
      ship.hit(position);
    }
    return true;
  };

  const isFleetSunk = () => {
    if (fleet.every((ship) => ship.isSunk())) return true;
    return false;
  };

  return {
    shipBoard,
    shootingBoard,
    deployShip,
    receiveAttack,
    isFleetSunk,
  };
};

export default Gameboard;
