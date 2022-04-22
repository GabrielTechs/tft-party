import { useMemo } from "react";
import useInput from "../hooks/useInput";

const usePlayers = () => {
  const [firstPlayer, firstPlayerName, bindFirstPlayer] = useInput("Player 1");
  const [secondPlayer, secondPlayerName, bindSecondPlayer] =
    useInput("Player 2");
  const [thirdPlayer, thirdPlayerName, bindThirdPlayer] = useInput("Player 3");
  const [fourthPlayer, fourthPlayerName, bindFourthPlayer] =
    useInput("Player 4");
  const [fifthPlayer, fifthPlayerName, bindFifthPlayer] = useInput("Player 5");
  const [sixthPlayer, sixthPlayerName, bindSixthPlayer] = useInput("Player 6");
  const [seventhPlayer, seventhPlayerName, bindSeventhPlayer] =
    useInput("Player 7");
  const [eighthPlayer, eighthPlayerName, bindEighthPlayer] =
    useInput("Player 8");

  const playersInputs = useMemo(
    () => [
      { player: firstPlayer, name: firstPlayerName, bind: bindFirstPlayer },
      { player: secondPlayer, name: secondPlayerName, bind: bindSecondPlayer },
      { player: thirdPlayer, name: thirdPlayerName, bind: bindThirdPlayer },
      { player: fourthPlayer, name: fourthPlayerName, bind: bindFourthPlayer },
      { player: fifthPlayer, name: fifthPlayerName, bind: bindFifthPlayer },
      { player: sixthPlayer, name: sixthPlayerName, bind: bindSixthPlayer },
      {
        player: seventhPlayer,
        name: seventhPlayerName,
        bind: bindSeventhPlayer,
      },
      { player: eighthPlayer, name: eighthPlayerName, bind: bindEighthPlayer },
    ],
    [
      bindEighthPlayer,
      bindFifthPlayer,
      bindFirstPlayer,
      bindFourthPlayer,
      bindSecondPlayer,
      bindSeventhPlayer,
      bindSixthPlayer,
      bindThirdPlayer,
      eighthPlayer,
      eighthPlayerName,
      fifthPlayer,
      fifthPlayerName,
      firstPlayer,
      firstPlayerName,
      fourthPlayer,
      fourthPlayerName,
      secondPlayer,
      secondPlayerName,
      seventhPlayer,
      seventhPlayerName,
      sixthPlayer,
      sixthPlayerName,
      thirdPlayer,
      thirdPlayerName,
    ]
  );

  return { playersInputs };
};

export default usePlayers;
