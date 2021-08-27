import { useState } from "react";

const useSetInfo = () => {
  const [champions, setChampions] = useState([]);

  return {
    champions,
  };
};

export default useSetInfo;
