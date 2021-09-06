import Ship from "../js_modules/ship";
import Gameboard from "../js_modules/gameboard";

const [shipOne, shipTwo, shipThree, shipFour] = [
  Ship(3),
  Ship(5),
  Ship(3),
  Ship(5),
];
const coordinates = [
  [2, 3],
  [3, 5],
];
const testBoard = Gameboard([shipOne, shipTwo]);
const moreBoard = Gameboard([shipThree, shipFour]);

testBoard.deployFleet(coordinates, "vertical");
moreBoard.deployFleet(coordinates, "horizontal");

testBoard.receiveAttack(8, 8);
testBoard.receiveAttack(3, 5);
testBoard.receiveAttack(4, 5);
testBoard.receiveAttack(5, 5);
testBoard.receiveAttack(6, 5);
testBoard.receiveAttack(7, 5);

test("deploying ship, shipBoard[2][3] should be ship present", () => {
  expect(!!testBoard.shipBoard[2][3]).toEqual(true);
});
test("deploying ship, shipBoard[1][1] should be empty", () => {
  expect(!!testBoard.shipBoard[1][1]).toEqual(false);
});
test("shipOne should not be sinking", () => {
  expect(shipOne.isSunk()).toEqual(false);
});
test("shipTwo should be sinking", () => {
  expect(shipTwo.isSunk()).toEqual(true);
});
test("fleet should not be completely sunk", () => {
  testBoard.receiveAttack(2, 3);
  testBoard.receiveAttack(3, 3);
  testBoard.receiveAttack(4, 3);
  expect(testBoard.isFleetSunk()).toEqual(true);

  expect(moreBoard.isFleetSunk()).toEqual(false);
});
