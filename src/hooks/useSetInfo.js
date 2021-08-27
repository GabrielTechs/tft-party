import { useState } from "react";

const useSetInfo = () => {
  const [champions, setChampions] = useState([]);
  const [traits, setTraits] = useState([]);
  const [loadingSetInfo, setLoadingSetInfo] = useState(true);

  return {
    champions,
    traits,
    loadingSetInfo,
  };
};

export default useSetInfo;
