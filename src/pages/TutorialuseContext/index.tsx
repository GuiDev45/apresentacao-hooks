import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";

type Theme = {
  backgroundColor: string;
  textColor: string;
};

export default function TutorialuseContext() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme: Theme = {
    backgroundColor: isDarkMode ? "#333333" : "#ffffff",
    textColor: isDarkMode ? "#ffffff" : "#333333",
  };

  return (
    <div>
      <button onClick={toggleTheme}>Trocar o Tema</button>
      <hr />
      <ThemeContext.Provider value={theme}>
        <ThemeDisplay />
      </ThemeContext.Provider>
    </div>
  );
}
