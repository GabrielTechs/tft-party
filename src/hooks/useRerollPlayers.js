const useRerollPlayers = () => {
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

  return {};
};

export default useRerollPlayers;
