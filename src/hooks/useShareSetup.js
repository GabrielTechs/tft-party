import { useState } from "react";

const useShareSetup = () => {
  const [playersSetup, setPlayerSetup] = useState();

  return { playersSetup };
};

export default useShareSetup;
