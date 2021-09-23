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
      if (
        props.sharedSetup &&
        Object.keys(props.sharedSetup).length === 0 &&
        props.sharedSetup.constructor === Object
      ) {
        props.saveSetup(
          props.player,
          props.playerName,
          commanders,
          origins,
          teamSide
        );
        saveCardSetup(
          props.player,
          props.playerName,
          commanders,
          origins,
          teamSide
        );
      } else {
        const { player, playerName, commanders, origins, teamSide } =
          props.sharedSetup;
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
