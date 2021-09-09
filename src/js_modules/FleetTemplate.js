import Ship from "./Ship";

const FleetTemplate = () => {
  const frigate = Ship(2, "frigate");
  const cruiser = Ship(3, "cruiser");
  const destroyer = Ship(3, "destroyer");
  const battleship = Ship(4, "battleship");
  const carrier = Ship(5, "carrier");

  const getFleet = (() => [frigate, cruiser, destroyer, battleship, carrier])();
  return getFleet;
};

export default FleetTemplate;
