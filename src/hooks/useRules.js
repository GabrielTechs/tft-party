import { useState, useEffect } from "react";

import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot } from "@firebase/firestore";

const useRules = () => {
  const [modes, setModes] = useState([]);
  const [specialRules, setSpecialRules] = useState([]);
  const [loadingRules, setLoadingRules] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const collectionModesRef = collection(projectFirestore, "rules");

    const unsub = onSnapshot(collectionModesRef, (snap) => {
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
