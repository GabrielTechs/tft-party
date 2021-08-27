import { useState } from "react";

const useSetInfo = () => {
  const [champions, setChampions] = useState([]);
  const [traits, setTraits] = useState([]);

  return {
    champions,
    traits,
  };
};

export default useSetInfo;
