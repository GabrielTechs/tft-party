import { useState } from "react";

const useImagesByName = (imageName) => {
  const [image, setImage] = useState({});

  return { image };
};

export default useImagesByName;
