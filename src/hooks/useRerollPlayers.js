import { useState, useEffect, useCallback } from "react";

import { useActiveRules } from "../contexts/ActiveRulesContext";
import {
  championsId,
  shadowChampionsId,
  lightChampionsId,
  originsId,
  shadowOriginsId,
  lightOriginsId,
} from "../setInfo/setActiveIds";

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
          lightChampionsId.length,
          numCommanders
        );
        //setting light commanders to commander state
        randomLightCommanderPositions.map((randomCommander) => {
          let commanderToPush = lightChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
        //getting a commander from the shadow side
        let randomShadowCommanderPositions = getRandomPositions(
          shadowChampionsId.length,
          numCommanders
        );
        //setting shadow commanders to commander state
        randomShadowCommanderPositions.map((randomCommander) => {
          let commanderToPush = shadowChampionsId[randomCommander];
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
          lightChampionsId.length,
          numCommanders
        );
        //setting light commanders to commander state
        randomCommanderPositions.map((randomCommander) => {
          let commanderToPush = lightChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
      } else if (teamSide === "shadow") {
        //getting a commander from the shadow side
        let randomCommanderPositions = getRandomPositions(
          shadowChampionsId.length,
          numCommanders
        );
        //setting shadow commanders to commander state
        randomCommanderPositions.map((randomCommander) => {
          let commanderToPush = shadowChampionsId[randomCommander];
          return setCommanders((prevCommanders) => [
            ...prevCommanders,
            commanderToPush,
          ]);
        });
      } else {
        //getting a commander from any side
        let randomCommanderPositions = getRandomPositions(
          championsId.length,
          numCommanders
        );
        //setting commanders to commander state
        randomCommanderPositions.map((randomCommander) => {
          let commanderToPush = championsId[randomCommander];
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
    (numOrigins, bothOrigins) => {
      if (bothOrigins) {
        //getting random origins from the light side
        let randomLightOriginsPositions = getRandomPositions(
          lightOriginsId.length,
          numOrigins
        );
        //setting light origins to origins state
        randomLightOriginsPositions.map((randomOrigin) => {
          let originToPush = lightOriginsId[randomOrigin];
          return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
        });
        //getting random origins from the shadow side
        let randomShadowOriginsPositions = getRandomPositions(
          shadowOriginsId.length,
          numOrigins
        );
        //setting shadow origins to origins state
        randomShadowOriginsPositions.map((randomOrigin) => {
          let originToPush = shadowOriginsId[randomOrigin];
          return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
        });
        return;
      }
      if (teamSide === "light") {
        //getting random origins from the light side
        let randomOriginsPositions = getRandomPositions(
          lightOriginsId.length,
          numOrigins
        );
        //setting light origins to origins state
        randomOriginsPositions.map((randomOrigin) => {
          let originToPush = lightOriginsId[randomOrigin];
          return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
        });
      } else if (teamSide === "shadow") {
        //getting random origins from the shadow side
        let randomOriginsPositions = getRandomPositions(
          shadowOriginsId.length,
          numOrigins
        );
        //setting shadow origins to origins state
        randomOriginsPositions.map((randomOrigin) => {
          let originToPush = shadowOriginsId[randomOrigin];
          return setOrigins((prevOrigins) => [...prevOrigins, originToPush]);
        });
      } else {
        //getting random origins from the any side
        let randomOriginsPositions = getRandomPositions(
          originsId.length,
          numOrigins
        );
        //setting the origins to origins state
        randomOriginsPositions.map((randomOrigin) => {
          let originToPush = originsId[randomOrigin];
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
        if (tempTeamSide < 55) {
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
        getOrigin(modeActive.origins, modeActive.bothOrigins);
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
