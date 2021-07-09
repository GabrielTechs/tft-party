import { useState, useCallback } from "react";

import { setFiveChampionsId } from "../setFiveInfo/setFiveIds";

const useRerollPlayers = () => {
  const [commanders, setCommanders] = useState([]);

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

  return {
    commanders,
  };
};

export default useRerollPlayers;
