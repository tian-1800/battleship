/*
GAMEBOARD MODULE 

Shooting Board = to record the shooting coordinates, it's not legal to shoot the same coordinate twice 
Ship Board = to record the deployed ship coordinates
*/

// import Ship from "./ship";

const Gameboard = (fleet) => {
  // const fleet = [];
  const dimension = 10;
  let shootingBoard = Array.from(Array(dimension), () =>
    new Array(dimension).fill(false)
  );
  let shipBoard = Array.from(Array(dimension), () => new Array(dimension));
  const gridBoard = Array.from(Array(dimension), () => new Array(dimension));

  // Reset board function, assigned empty board
  const reset = () => {
    shootingBoard = Array.from(Array(dimension), () =>
      new Array(dimension).fill(false)
    );
    shipBoard = Array.from(Array(dimension), () => new Array(dimension));
  };

  const deployShip = (ship, origin, orientation) => {
    const { length } = ship;
    const [x, y] = origin;
    if (orientation === "vertical") {
      for (let i = x; i < x + length; i += 1) {
        shipBoard[i][y] = { ship, position: i - x };
      }
    } else if (orientation === "horizontal") {
      for (let i = y; i < y + length; i += 1) {
        shipBoard[x][i] = { ship, position: i - y };
      }
    }
    // fleet.push(ship);
  };

  const deployFleet = (coordinates, orientation) => {
    fleet.forEach((ship) => {
      const index = fleet.indexOf(ship);
      deployShip(ship, coordinates[index], orientation);
    });
  };

  // Board-receive-attack validator. Mark coordinate as true and then return true if shooting coordinate is valid
  const receiveAttack = (x, y) => {
    if (shootingBoard[x][y] === true) return false;
    shootingBoard[x][y] = true;
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
    gridBoard,
    deployShip,
    deployFleet,
    receiveAttack,
    isFleetSunk,
    reset,
  };
};

export default Gameboard;
