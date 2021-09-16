import { useState, useCallback } from "react";

import { useActiveRules } from "../contexts/ActiveRulesContext";
import { projectFirestore } from "../firebase/config";

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
  const [playersSetup, setPlayersSetup] = useState(playersSetupInitialState);
  const [idToShare, setIdToShare] = useState("");

  const saveSetup = useCallback(
    (player, playerName, commanders, origins, teamSide) => {
      //this function will be called on each player card
      //to set each player setup conditioned by player id (Ex: Player 1...)
      setPlayersSetup((playersSetup) =>
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
    },
    []
  );

  const shareSetup = () => {
    projectFirestore.collection("sharedSetups").add({
      modeActive,
      specialRulesActive,
      playersSetup,
    });
  };

  return { playersSetup, saveSetup, shareSetup, idToShare };
};

export default useShareSetup;
