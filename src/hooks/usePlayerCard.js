import { useState } from "react";

const usePlayerCard = (props) => {
  const [playerSetup, setPlayerSetup] = useState(playerSetupInitialState);

  return { playerSetup };
};

export default usePlayerCard;
