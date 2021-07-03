import { useState, useEffect } from "react";

import { projectFirestore } from "../firebase/config";

const useRules = () => {
  const [modes, setModes] = useState([]);
  const [specialRules, setSpecialRules] = useState([]);

  useEffect(() => {
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
    });
    return () => {
      unsub();
    };
  }, []);

  return {
    modes,
    specialRules,
  };
};

export default useRules;
