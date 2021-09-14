const ButtonContainer = (
  { getState, setState },
  { getHover, setHover },
  deploy,
  play
) => {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "container__button";

  //   Initialize buttons
  const btnPlay = document.createElement("button");
  btnPlay.className = "button button__play";
  const btnCheat = document.createElement("button");
  btnCheat.className = "button button__cheat";
  const btnHover = document.createElement("button");
  btnHover.className = "button button__hover";
  btnCheat.classList.add("hidden");
  btnHover.classList.add("hidden");
  buttonContainer.append(btnCheat, btnHover, btnPlay);

  btnPlay.textContent = "Start deployment";
  const playHandler = () => {
    if (getState() === "deployment") {
      setState("playing");
      btnPlay.textContent = "Play Again";
      play();
      btnCheat.classList.remove("hidden");
      btnHover.classList.remove("hidden");
      btnPlay.classList.add("hidden");
    } else {
      setState("deployment");
      btnPlay.textContent = "Start playing";
      btnPlay.disabled = "true";
      document.querySelector(".container__announcement").textContent = "";
      deploy();
      btnCheat.classList.add("hidden");
      btnHover.classList.add("hidden");
    }
  };
  btnPlay.addEventListener("click", playHandler);

  btnHover.textContent = `Hover mode: ${getHover()}`;
  const hoverModeHandler = () => {
    setHover(!getHover());
    btnHover.textContent = `Hover mode: ${getHover()}`;
  };
  btnHover.addEventListener("click", hoverModeHandler);

  let cheatState = false;
  btnCheat.textContent = `Cheat mode: ${cheatState}`;
  const cheatStateHandler = () => {
    cheatState = !cheatState;
    btnCheat.textContent = `Cheat mode: ${cheatState}`;
    const shipLocations = [...document.getElementsByClassName("ship-present")];
    shipLocations.forEach((location) => {
      if (!location.classList.contains("--visible"))
        location.classList.add("--visible", "cheat");
      else if (location.classList.contains("cheat"))
        location.classList.remove("--visible", "cheat");
    });
  };
  btnCheat.addEventListener("click", cheatStateHandler);

  return buttonContainer;
};

export default ButtonContainer;
