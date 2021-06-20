import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docsCategory, setDocsCategory] = useState([]);

  useEffect(() => {
    const collectionRef = projectFirestore.collection(collection);
    const unsub = collectionRef.onSnapshot((snap) => {
      let categoryDocuments = [];
      snap.forEach((doc) => {
        categoryDocuments.push({ ...doc.data(), id: doc.id });
      });
      setDocsCategory(categoryDocuments);
    });
    return () => unsub();
  }, [collection]);

  return { docsCategory };
};

export default useFirestore;
