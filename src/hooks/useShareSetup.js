import { useState } from "react";

const useShareSetup = () => {
  const [playersSetup, setPlayerSetup] = useState();
  const [idToShare, setIdToShare] = useState("");

  return { playersSetup, idToShare };
};

export default useShareSetup;
