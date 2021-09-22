import { useState } from "react";

import useRerollPlayers from "../hooks/useRerollPlayers";

const playerSetupInitialState = {
  commanders: [],
  origins: [],
  player: "",
  playerName: "",
  teamSide: "",
};

const usePlayerCard = (props) => {
  const [playerSetup, setPlayerSetup] = useState(playerSetupInitialState);
  const { commanders, origins, teamSide } = useRerollPlayers();

  return { playerSetup };
};

export default usePlayerCard;
