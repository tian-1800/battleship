const Ship = (inputLength) => {
  const length = inputLength;
  const bodyHit = Array(length).fill(false);

  const hit = (position) => {
    bodyHit[position] = true;
  };

  const isSunk = () => bodyHit.every((position) => position === true);

  return {length, hit, isSunk}
};

export default Ship;
// module.exports = Ship;


