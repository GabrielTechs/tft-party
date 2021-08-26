import { useState } from "react";

const useImagesByName = (imageName) => {
  const [image, setImage] = useState({});
  const [gettingImage, setGettingImage] = useState(true);

  return { image, gettingImage };
};

export default useImagesByName;
