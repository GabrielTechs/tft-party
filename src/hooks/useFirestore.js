import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot, query, where } from "@firebase/firestore";

const useFirestore = (collectionName, category, categoryName) => {
  const [docsCategory, setDocsCategory] = useState([]);

  useEffect(() => {
    const collectionRef = collection(projectFirestore, collectionName);

    // Listening to the collection filtered by category.
    if (category !== "all") {
      const queryCategoryName = query(
        collectionRef,
        where(category, "==", categoryName)
      );
      const unsub = onSnapshot(queryCategoryName, (snap) => {
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
      const unsub = onSnapshot(collectionRef, (snap) => {
        let categoryDocuments = [];
        snap.forEach((doc) => {
          categoryDocuments.push({ ...doc.data(), id: doc.id });
        });
        setDocsCategory(categoryDocuments);
      });
      return () => unsub();
    }
  }, [collectionName, category, categoryName]);

  return { docsCategory };
};

export default useFirestore;
