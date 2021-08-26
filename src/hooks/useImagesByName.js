import { useState, useCallback } from "react";
import useFirestore from "./useFirestore";

const useImagesByName = (imageName) => {
  const [image, setImage] = useState({});
  const [gettingImage, setGettingImage] = useState(true);

  const images = useFirestore("images", "name", "images");

  const getImage = useCallback(
    (imageName) => {
      setGettingImage(true);
      setImage({});
      images.docsCategory.map((imagesDoc) => {
        return imagesDoc.images.map((image) => {
          if (image.name === imageName) {
            setGettingImage(false);
            return setImage(image);
          } else {
            return false;
          }
        });
      });
    },
    [images.docsCategory]
  );

  return { images, image, gettingImage };
};

export default useImagesByName;
