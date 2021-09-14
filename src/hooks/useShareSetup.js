import { useState } from "react";

import { useActiveRules } from "../contexts/ActiveRulesContext";

const playersSetupInitialState = [
  { player: "Player 1" },
  { player: "Player 2" },
  { player: "Player 3" },
  { player: "Player 4" },
  { player: "Player 5" },
  { player: "Player 6" },
  { player: "Player 7" },
  { player: "Player 8" },
];

const useShareSetup = () => {
  const { modeActive, specialRulesActive } = useActiveRules();
  const [playersSetup, setPlayerSetup] = useState(playersSetupInitialState);
  const [idToShare, setIdToShare] = useState("");

  const saveSetup = (player, playerName, commanders, origins, teamSide) => {
    setPlayerSetup((playersSetup) =>
      playersSetup.map((playerSetted) =>
        playerSetted.player === player
          ? {
              ...playerSetted,
              playerName,
              commanders,
              origins,
              teamSide,
            }
          : playerSetted
      )
    );
  };

  return { playersSetup, saveSetup, idToShare };
};

export default useShareSetup;
