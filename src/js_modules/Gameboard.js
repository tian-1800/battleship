/*
GAMEBOARD MODULE 

Shooting Board = to record the shooting coordinates, it's not legal to shoot the same coordinate twice 
Ship Board = to record the deployed ship coordinates
*/

const Gameboard = (dimension) => {
  const fleet = [];
  const shootingBoard = Array.from(Array(dimension), () =>
    new Array(dimension).fill(false)
  );
  const shipBoard = Array.from(Array(dimension), () => new Array(dimension));
  const gridBoard = Array.from(Array(dimension), () => new Array(dimension));

  const checkCollision = (origin, orientation, shipLength) => {
    let isCoordinateValid = true;
    const [x, y] = origin;
    // console.log("check collision");
    if (orientation === "vertical") {
      for (let i = x; i < x + shipLength; i += 1) {
        // check if another ship has occupied the square
        if (shipBoard[i][y]) {
          isCoordinateValid = false;
        }
      }
    } else if (orientation === "horizontal") {
      for (let i = y; i < y + shipLength; i += 1) {
        // check if another ship has occupied the square
        if (shipBoard[x][i]) {
          isCoordinateValid = false;
        }
      }
    }
    return isCoordinateValid;
  };

  const checkBorder = (origin, orientation, borderLength, shipLength) => {
    const [x, y] = origin;
    let withinBorder = true;
    if (orientation === "horizontal" && y + shipLength > borderLength) {
      withinBorder = false;
    } else if (orientation === "vertical" && x + shipLength > borderLength) {
      withinBorder = false;
    }

    return withinBorder;
  };

  const getRandomCoordinate = (shipLength) => {
    const orientationArr = ["horizontal", "vertical"];
    let x;
    let y;
    const randomOrientation =
      orientationArr[Math.floor(Math.random() * orientationArr.length)];
    if (randomOrientation === "horizontal") {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * (10 - shipLength));
    } else if (randomOrientation === "vertical") {
      x = Math.floor(Math.random() * (10 - shipLength));
      y = Math.floor(Math.random() * 10);
    }
    return [randomOrientation, [x, y]];
  };

  const deployShip = (ship, origin, inputOrientation) => {
    const { length } = ship;
    let x;
    let y;
    let orientation;

    if (origin === "random") {
      // Make sure ships don't overlap with each other
      let originFound = false;
      while (!originFound) {
        [orientation, [x, y]] = getRandomCoordinate(length);
        originFound = checkCollision([x, y], orientation, length);
      }
    } else {
      [x, y] = origin;
      orientation = inputOrientation;
      // console.log(x, y, shipBoard[x]);
      if (!checkCollision([x, y], orientation, length))
        throw new Error("collision with already deployed ship");
      if (!checkBorder([x, y], orientation, dimension, length))
        throw new Error("Outside boundary");
    }
    // console.log(x, y);
    if (orientation === "vertical") {
      for (let i = x; i < x + length; i += 1) {
        shipBoard[i][y] = { ship, position: i - x };
      }
    } else if (orientation === "horizontal") {
      for (let i = y; i < y + length; i += 1) {
        shipBoard[x][i] = { ship, position: i - y };
      }
    }
    fleet.push(ship);
  };

  const deployFleet = (inputFleet, coordinates, fixedOrientation) => {
    inputFleet.forEach((ship) => {
      const index = inputFleet.indexOf(ship);
      deployShip(
        ship,
        coordinates === "random" ? "random" : coordinates[index],
        fixedOrientation
      );
    });
    // return false;
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
  };
};

export default Gameboard;
