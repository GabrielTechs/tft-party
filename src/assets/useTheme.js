import { useState, useEffect } from "react";
import storage from "local-storage-fallback";

const useTheme = () => {
  //get last theme used from storage
  const defaultTheme = "light";
  const getInitialTheme = () => {
    const savedTheme = storage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return { theme, themeToggler };
};

export default useTheme;
