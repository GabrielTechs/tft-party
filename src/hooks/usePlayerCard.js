import { useState } from "react";

const playerSetupInitialState = {
  commanders: [],
  origins: [],
  player: "",
  playerName: "",
  teamSide: "",
};

const usePlayerCard = (props) => {
  const [playerSetup, setPlayerSetup] = useState(playerSetupInitialState);

  return { playerSetup };
};

export default usePlayerCard;
