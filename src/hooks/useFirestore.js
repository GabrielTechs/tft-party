import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection, category, categoryName) => {
  const [docsCategory, setDocsCategory] = useState([]);

  useEffect(() => {
    const collectionRef = projectFirestore.collection(collection);

    // Listening to the collection filtered by category.
    if (category !== "all") {
      const unsub = collectionRef
        .where(category, "==", categoryName)
        .onSnapshot((snap) => {
          let categoryDocuments = [];
          snap.forEach((doc) => {
            categoryDocuments.push({ ...doc.data(), id: doc.id });
          });
          setDocsCategory(categoryDocuments);
        });
      return () => unsub();
    }
    // Listening to the entire collection.
    else {
      const unsub = collectionRef.onSnapshot((snap) => {
        let categoryDocuments = [];
        snap.forEach((doc) => {
          categoryDocuments.push({ ...doc.data(), id: doc.id });
        });
        setDocsCategory(categoryDocuments);
      });
      return () => unsub();
    }
  }, [collection, category, categoryName]);

  return { docsCategory };
};

export default useFirestore;
