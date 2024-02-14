import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error("useTheme deve ser usado com um ThemeContext");
  }

  return theme;
}
