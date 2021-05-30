import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState("");

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [initialValue, value, bind];
};

export default useInput;
