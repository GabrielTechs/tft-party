import { useState, useEffect, useCallback } from "react";

import { useActiveRules } from "../contexts/ActiveRulesContext";
import {
  setFiveChampionsId,
  setFiveOriginsId,
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

  const getCommander = useCallback((numCommanders) => {
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
  }, []);

  const getOrigin = useCallback((numOrigins) => {
    let randomOriginsPositions = getRandomPositions(
      setFiveOriginsId.length,
      numOrigins
    );
    randomOriginsPositions.map((randomOrigin) => {
      let originToPush = setFiveOriginsId[randomOrigin];
      return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
    });
  }, []);

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
