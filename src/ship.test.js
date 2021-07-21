const Ship = require("./ship");
// Kapal penjelajah panjangnya 3, kapal induk panjangnya 6
const cruiser = Ship(3);
const aircraftCarrier = Ship(6);

test("cuiser hit in location [0] should not sink", () => {
  cruiser.hit(0);
  expect(cruiser.isSunk()).toEqual(false);
});

test("cruiser hit in location [0,1,2] should sink", () => {
  cruiser.hit(0);
  cruiser.hit(1);
  cruiser.hit(2);
  expect(cruiser.isSunk()).toEqual(true);
});

test("Aircraft Carrier hit in location [0,1,2] should not sink", () => {
  aircraftCarrier.hit(0);
  aircraftCarrier.hit(1);
  aircraftCarrier.hit(2);
  expect(aircraftCarrier.isSunk()).toEqual(false);
});

test("Aircraft Carrier hit in location [0,1,2,3,4,5] should sink", () => {
  aircraftCarrier.hit(0);
  aircraftCarrier.hit(1);
  aircraftCarrier.hit(2);
  aircraftCarrier.hit(3);
  aircraftCarrier.hit(4);
  aircraftCarrier.hit(5);
  expect(aircraftCarrier.isSunk()).toEqual(true);
});
