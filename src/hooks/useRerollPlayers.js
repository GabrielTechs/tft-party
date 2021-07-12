import { useState, useEffect, useCallback } from "react";

import { useActiveRules } from "../contexts/ActiveRulesContext";
import {
  setFiveChampionsId,
  setFiveShadowChampionsId,
  setFiveLightChampionsId,
  setFiveOriginsId,
  setFiveShadowOriginsId,
  setFiveLightOriginsId,
} from "../setFiveInfo/setFiveIds";

const useRerollPlayers = () => {
  const { modeActive } = useActiveRules();
  const [commanders, setCommanders] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [teamSide, setTeamSide] = useState("none");

  const getRandomPositions = (arrayLength, numOfPositions) => {
    let positions = [];
    let positionsAdded = 0;
    while (positionsAdded < numOfPositions) {
      let randomPosition = Math.floor(Math.random() * arrayLength);
      if (positions.includes(randomPosition) === false) {
        positions.push(randomPosition);
        positionsAdded++;
      }
    }
    return positions;
  };

  const getCommander = useCallback(
    (numCommanders) => {
      if (teamSide === "light") {
        let randomCommanderPositions = getRandomPositions(
          setFiveLightChampionsId.length,
          numCommanders
        );

        randomCommanderPositions.map((randomCommander) => {
          let commanderToPush = setFiveLightChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
      } else if (teamSide === "shadow") {
        let randomCommanderPositions = getRandomPositions(
          setFiveShadowChampionsId.length,
          numCommanders
        );

        randomCommanderPositions.map((randomCommander) => {
          let commanderToPush = setFiveShadowChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
      } else {
        let randomCommanderPositions = getRandomPositions(
          setFiveChampionsId.length,
          numCommanders
        );

        randomCommanderPositions.map((randomCommander) => {
          let commanderToPush = setFiveChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
      }
    },
    [teamSide]
  );

  const getOrigin = useCallback(
    (numOrigins) => {
      if (teamSide === "light") {
        let randomOriginsPositions = getRandomPositions(
          setFiveLightOriginsId.length,
          numOrigins
        );

        randomOriginsPositions.map((randomOrigin) => {
          let originToPush = setFiveLightOriginsId[randomOrigin];
          return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
        });
      } else if (teamSide === "shadow") {
        let randomOriginsPositions = getRandomPositions(
          setFiveShadowOriginsId.length,
          numOrigins
        );

        randomOriginsPositions.map((randomOrigin) => {
          let originToPush = setFiveShadowOriginsId[randomOrigin];
          return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
        });
      } else {
        let randomOriginsPositions = getRandomPositions(
          setFiveOriginsId.length,
          numOrigins
        );

        randomOriginsPositions.map((randomOrigin) => {
          let originToPush = setFiveOriginsId[randomOrigin];
          return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
        });
      }
    },
    [teamSide]
  );

  const getModeSetup = useCallback(
    (modeActive) => {
      setCommanders([]);
      setOrigins([]);

      if (modeActive.needSide) {
        let tempTeamSide = Math.floor(Math.random() * 100);
        if (tempTeamSide < 45) {
          setTeamSide("light");
        } else {
          setTeamSide("shadow");
        }
      } else {
        setTeamSide("none");
      }

      getCommander(modeActive.commanders);

      getOrigin(modeActive.origins);
    },
    [getCommander, getOrigin]
  );

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getModeSetup(modeActive);
    }
    return () => {
      isMounted = false;
    };
  }, [getModeSetup, modeActive]);

  return {
    commanders,
    origins,
    teamSide,
    getModeSetup,
  };
};

export default useRerollPlayers;
