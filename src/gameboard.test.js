import Ship from "./ship";
import Gameboard from "./gameboard";

const [shipOne, shipTwo] = [Ship(3), Ship(5)];
const coordinates = [[2,3], [3,5]];
const testBoard = Gameboard();

testBoard.deployShip(shipOne, coordinates[0], "horizontal");
testBoard.deployShip(shipTwo, coordinates[1], "horizontal");

testBoard.receiveAttack(8,8);
testBoard.receiveAttack(3,5);
testBoard.receiveAttack(4,5);
testBoard.receiveAttack(5,5);
testBoard.receiveAttack(6,5);
testBoard.receiveAttack(7,5);

test("deploying ship, shipBoard[2][3] should be ship present", () => {
    expect(!!testBoard.shipBoard[2][3]).toEqual(true);
})
test("deploying ship, shipBoard[1][1] should be empty", () => {
    expect(!!testBoard.shipBoard[1][1]).toEqual(false);
})
test("shipOne should not be sinking", () => {
    expect(shipOne.isSunk()).toEqual(false);
})
test("shipTwo should be sinking", () => {
    expect(shipTwo.isSunk()).toEqual(true);
})
test("fleet should not be completely sunk", () => {
    expect(testBoard.isFleetSunk()).toEqual(false);
})