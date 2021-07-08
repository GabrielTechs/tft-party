import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState("");

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [initialValue, value, bind, reset];
};

export default useInput;
