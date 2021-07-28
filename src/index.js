import Player from "./js_modules/player";
import Gameboard from "./js_modules/gameboard";
import Ship from "./js_modules/ship";
import generateGrid10 from "./js_modules/dom_module";

const fleet = [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];
const coordinatesOne = [[1,3], [2,5], [4,3], [5,6], [2,8]];
const coordinatesTwo = [[1,3], [2,5], [4,3], [5,6], [2,8]];

const [boardOne, boardTwo] = [Gameboard(fleet), Gameboard(fleet)];
const [player, computer] = [Player(true, boardTwo), Player(false, boardOne)];

boardOne.deployFleet(coordinatesOne, "horizontal");
boardTwo.deployFleet(coordinatesTwo, "horizontal");
const [gridOne, gridTwo] = document.getElementsByClassName("grid-container");



const changeTurn = () => {
    player.turn = !player.turn;
    computer.turn = !computer.turn;
    if (computer.turn) {
        computer.computerPlay();
        player.turn = !player.turn;
        computer.turn = !computer.turn;
    }
}

function init() {
    generateGrid10(gridOne, boardOne, computer, changeTurn);
    generateGrid10(gridTwo, boardTwo, player, changeTurn);
    }
init();
player.turn = true;