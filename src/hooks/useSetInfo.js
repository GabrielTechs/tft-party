import { useState, useEffect } from "react";

import { projectFirestore } from "../firebase/config";

const useSetInfo = () => {
  const [champions, setChampions] = useState([]);
  const [traits, setTraits] = useState([]);
  const [loadingSetInfo, setLoadingSetInfo] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const collectionSetInfoRef = projectFirestore.collection("tftMidSet5Info");

    const unsub = collectionSetInfoRef.onSnapshot((snap) => {
      snap.forEach((doc) => {
        if (doc.data().name === "champions") {
          setChampions(doc.data().champions);
        }
        if (doc.data().name === "traits") {
          setTraits(doc.data().traits);
        }
      });
      if (isMounted) {
        setLoadingSetInfo(false);
      }
    });
    return () => {
      isMounted = false;
      unsub();
    };
  }, []);

  return {
    champions,
    traits,
    loadingSetInfo,
  };
};

export default useSetInfo;
