import Ship from "../js_modules/Ship";
import Gameboard from "../js_modules/Gameboard";
import Player from "../js_modules/Player";

const [shipOne, shipTwo, shipThree, shipFour] = [
  Ship(3),
  Ship(5),
  Ship(2),
  Ship(3),
];
const coordinates = [
  [3, 5],
  [2, 3],
];
const BoardOne = Gameboard(10);
const BoardTwo = Gameboard(10);
const playerOne = Player(true, BoardOne);
const playerTwo = Player(true, BoardTwo);
playerOne.setOpponent(playerTwo);
playerTwo.setOpponent(playerOne);

BoardOne.deployFleet([shipOne, shipTwo], coordinates, "vertical");
BoardTwo.deployFleet([shipThree, shipFour], coordinates, "vertical");

test("hit boardOne by playerTwo(2,3), shooting board-1 [2][3] should have value of true", () => {
  playerTwo.play(2, 3);
  expect(BoardOne.shootingBoard[2][3]).toEqual(true);
  expect(BoardTwo.shootingBoard[2][3]).toEqual(false);
});

test("hit boardOne by playerTwo(6,6), shooting board-1 [2][2] should have value of false", () => {
  playerTwo.play(6, 6);
  expect(BoardOne.shootingBoard[3][3]).toEqual(false);
});

test("hit boardTwo by playerOne(2,4), shooting board-1 [2][3] should have value of true", () => {
  playerOne.play(2, 4);
  expect(BoardTwo.shootingBoard[2][4]).toEqual(true);
  expect(BoardOne.shootingBoard[2][4]).toEqual(false);
});

test("toggle turn", () => {
  playerOne.setTurn(true);
  playerOne.toggleTurn();
  expect(playerOne.getTurn()).toEqual(false);
});

test("hitting all ship on board two by player one, player two should be losing", () => {
  playerOne.play(3, 5);
  playerOne.play(4, 5);
  playerOne.play(2, 3);
  playerOne.play(3, 3);
  playerOne.play(4, 3);
  expect(shipThree.isSunk()).toEqual(true);
  expect(shipFour.isSunk()).toEqual(true);
  expect(playerOne.getOwnBoard().isFleetSunk()).toEqual(false);
  expect(playerTwo.getOwnBoard().isFleetSunk()).toEqual(true);
});
