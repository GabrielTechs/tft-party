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
    (numCommanders, bothCommanders) => {
      if (bothCommanders) {
        //getting a commander from the light side
        let randomLightCommanderPositions = getRandomPositions(
          setFiveLightChampionsId.length,
          numCommanders
        );
        //setting light commanders to commander state
        randomLightCommanderPositions.map((randomCommander) => {
          let commanderToPush = setFiveLightChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
        //getting a commander from the shadow side
        let randomShadowCommanderPositions = getRandomPositions(
          setFiveShadowChampionsId.length,
          numCommanders
        );
        //setting shadow commanders to commander state
        randomShadowCommanderPositions.map((randomCommander) => {
          let commanderToPush = setFiveShadowChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
        return;
      }
      if (teamSide === "light") {
        //getting a commander from the light side
        let randomCommanderPositions = getRandomPositions(
          setFiveLightChampionsId.length,
          numCommanders
        );
        //setting light commanders to commander state
        randomCommanderPositions.map((randomCommander) => {
          let commanderToPush = setFiveLightChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
      } else if (teamSide === "shadow") {
        //getting a commander from the shadow side
        let randomCommanderPositions = getRandomPositions(
          setFiveShadowChampionsId.length,
          numCommanders
        );
        //setting shadow commanders to commander state
        randomCommanderPositions.map((randomCommander) => {
          let commanderToPush = setFiveShadowChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
      } else {
        //getting a commander from any side
        let randomCommanderPositions = getRandomPositions(
          setFiveChampionsId.length,
          numCommanders
        );
        //setting commanders to commander state
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
        //getting random origins from the light side
        let randomOriginsPositions = getRandomPositions(
          setFiveLightOriginsId.length,
          numOrigins
        );
        //setting light origins to origins state
        randomOriginsPositions.map((randomOrigin) => {
          let originToPush = setFiveLightOriginsId[randomOrigin];
          return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
        });
      } else if (teamSide === "shadow") {
        //getting random origins from the shadow side
        let randomOriginsPositions = getRandomPositions(
          setFiveShadowOriginsId.length,
          numOrigins
        );
        //setting shadow origins to origins state
        randomOriginsPositions.map((randomOrigin) => {
          let originToPush = setFiveShadowOriginsId[randomOrigin];
          return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
        });
      } else {
        //getting random origins from the any side
        let randomOriginsPositions = getRandomPositions(
          setFiveOriginsId.length,
          numOrigins
        );
        //setting the origins to origins state
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
      //cleaning commanders and origins
      setCommanders([]);
      setOrigins([]);
      //conditioning if the mode need an especific side
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
      //checking that mode exist to prevent bugs
      if (modeActive) {
        //getting the ammount of commanders needed
        getCommander(modeActive.commanders, modeActive.bothCommanders);
        //getting the ammount of oringis needed
        getOrigin(modeActive.origins);
      }
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
