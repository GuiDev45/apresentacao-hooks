import { createContext } from "react";

type Theme = {
  backgroundColor: string;
  textColor: string;
};

export const ThemeContext = createContext<Theme | undefined>(undefined);
