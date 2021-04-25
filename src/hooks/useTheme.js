import { useState, useEffect } from "react";
import storage from "local-storage-fallback";

const useTheme = () => {
  //get last theme used from storage
  const defaultTheme = "light";
  const getInitialTheme = () => {
    const savedTheme = storage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  };
  //get last theme used and set default icon accordingly
  let defaultIcon = ["fa", "sun"];
  const getInitialIcon = () => {
    const savedTheme = storage.getItem("theme");
    if (JSON.parse(savedTheme) === "dark") {
      return defaultIcon;
    } else {
      return (defaultIcon = ["fa", "moon"]);
    }
  };

  //initializing theme and toggler btn icon
  const [theme, setTheme] = useState(getInitialTheme);
  const [icon, setIcon] = useState(getInitialIcon);

  //toggler btn handler to change the theme and icon
  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
      setIcon(["fa", "sun"]);
    } else {
      setTheme("light");
      setIcon(["fa", "moon"]);
    }
  };

  //listening the theme state to set the local storage on change
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return { theme, themeToggler, icon };
};

export default useTheme;
