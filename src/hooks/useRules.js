import { useState, useEffect } from "react";

import { projectFirestore } from "../firebase/config";

const useRules = () => {
  const [modes, setModes] = useState([]);
  const [specialRules, setSpecialRules] = useState([]);
  const [loadingRules, setLoadingRules] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const collectionModesRef = projectFirestore.collection("rules");

    const unsub = collectionModesRef.onSnapshot((snap) => {
      snap.forEach((doc) => {
        if (doc.data().name === "modes") {
          setModes(doc.data().modes);
        }
        if (doc.data().name === "specialRules") {
          setSpecialRules(doc.data().specialRules);
        }
      });
      if (isMounted) {
        setLoadingRules(false);
      }
    });
    return () => {
      isMounted = false;
      unsub();
    };
  }, []);

  return {
    modes,
    specialRules,
    loadingRules,
  };
};

export default useRules;
