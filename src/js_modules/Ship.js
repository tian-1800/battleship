const Ship = (inputLength, inputName) => {
  const state = {
    name: inputName,
    length: inputLength,
  };
  const { name, length } = state;
  const bodyHit = Array(length).fill(false);

  const hit = (position) => {
    bodyHit[position] = true;
  };

  const isSunk = () => bodyHit.every((position) => position === true);

  return { length, hit, isSunk, name };
};

export default Ship;
