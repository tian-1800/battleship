import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";

const [shipOne, shipTwo] = [Ship(3), Ship(5)];
const coordinates = [[2,3], [3,5]];
const testBoard = Gameboard();
const playerOne = Player(true, testBoard);

testBoard.deployShip(shipOne, coordinates[0], "horizontal");
testBoard.deployShip(shipTwo, coordinates[1], "horizontal");

test("hit (2,3), shooting board [2][3] should have value of 999", () => {
    playerOne.play(2,4);
    expect(testBoard.shootingBoard[2][4]).toEqual(999);
})
test("hit (6,6), shooting board [2][2] should not have value of 999", () => {
    testBoard.receiveAttack(6,6);
    expect(testBoard.shootingBoard[2][3]).not.toEqual(999);
})