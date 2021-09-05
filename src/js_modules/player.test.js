import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";

const [shipOne, shipTwo, shipThree] = [Ship(3), Ship(5), Ship(2)];
const coordinates = [
  [3, 5],
  [2, 3],
];
const BoardOne = Gameboard([shipOne, shipTwo]);
const BoardTwo = Gameboard([shipOne, shipTwo]);
const playerOne = Player(true, BoardTwo);
const playerTwo = Player(true, BoardOne);

BoardOne.deployShip(shipOne, coordinates[0], "horizontal");
BoardOne.deployShip(shipTwo, coordinates[1], "horizontal");

BoardTwo.deployShip(shipOne, coordinates[0], "horizontal");
BoardTwo.deployShip(shipTwo, coordinates[1], "horizontal");

// beforeEach(() => {
//   BoardOne.reset();
//   BoardTwo.reset();
// });
test("hit boardOne by playerTwo(2,3), shooting board-1 [2][3] should have value of true", () => {
  playerTwo.play(2, 3);
  expect(BoardOne.shootingBoard[2][3]).toEqual(true);
  expect(BoardTwo.shootingBoard[2][3]).toEqual(false);
});

test("hit boardOne by playerTwo(6,6), shooting board-1 [2][2] should have value of false", () => {
  playerTwo.play(6, 6);
  expect(BoardOne.shootingBoard[3][3]).toEqual(false);
});

test("hit boardTwo by playerOne(2,3), shooting board-1 [2][3] should have value of true", () => {
  playerOne.play(2, 3);
  expect(BoardTwo.shootingBoard[2][3]).toEqual(true);
  expect(BoardOne.shootingBoard[2][3]).toEqual(false);
});

test("toggle turn", () => {
  playerOne.setTurn(true);
  playerOne.toggleTurn();
  expect(playerOne.getTurn()).toEqual(false);
});
