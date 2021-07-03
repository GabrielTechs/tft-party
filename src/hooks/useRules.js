import { useState, useEffect } from "react";

import { projectFirestore } from "../firebase/config";

const useRules = () => {
  const [modes, setModes] = useState([]);

  useEffect(() => {
    const collectionModesRef = projectFirestore.collection("rules");

    const unsub = collectionModesRef.onSnapshot((snap) => {
      snap.forEach((doc) => {
        if (doc.data().name === "modes") {
          setModes(doc.data().modes);
        }
      });
    });
    return () => {
      unsub();
    };
  }, []);

  return {
    modes,
  };
};

export default useRules;
