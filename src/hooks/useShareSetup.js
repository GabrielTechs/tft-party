import { useState, useCallback } from "react";

import { useActiveRules } from "../contexts/ActiveRulesContext";
import { projectFirestore } from "../firebase/config";
import { collection, addDoc } from "@firebase/firestore";

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
    const timestamp = new Date();
    //adding a new setup to the db in the "sharedSetups" collection
    //then setting the doc id to the state idToShare
    addDoc(collection(projectFirestore, "sharedSetups"), {
      modeActive,
      specialRulesActive,
      playersSetup,
      date: timestamp,
    }).then((docRef) => {
      setIdToShare(docRef.id);
    });
  };

  return { playersSetup, saveSetup, shareSetup, idToShare };
};

export default useShareSetup;
