import { useState, useEffect, useCallback } from "react";

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

  const saveCardSetup = useCallback(
    (player, playerName, commanders, origins, teamSide) => {
      //this function will be called on each player card
      //to set each player setup conditioned by player id (Ex: Player 1...)
      setPlayerSetup({
        player,
        playerName,
        commanders,
        origins,
        teamSide,
      });
    },
    []
  );

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      // verifying if the "sharedSetup" prop is empty
      if (
        props.sharedSetup &&
        Object.keys(props.sharedSetup).length === 0 &&
        props.sharedSetup.constructor === Object
      ) {
        // saving every card setup in PlayersCards component
        props.saveSetup(
          props.player,
          props.playerName,
          commanders,
          origins,
          teamSide
        );
        // saving the card setup to display it in PlayerCard component
        saveCardSetup(
          props.player,
          props.playerName,
          commanders,
          origins,
          teamSide
        );
      } else {
        // destructuring "sharedSetup" prop
        const { player, playerName, commanders, origins, teamSide } =
          props.sharedSetup;
        // saving the card setup to display it in SharedSetup component
        saveCardSetup(player, playerName, commanders, origins, teamSide);
      }
    }
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    commanders,
    origins,
    teamSide,
    saveCardSetup,
    props.playerName,
    props.saveSetup,
  ]);

  return { playerSetup };
};

export default usePlayerCard;
