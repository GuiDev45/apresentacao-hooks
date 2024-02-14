import { useTheme } from "./themeHooks";

export default function ThemeDisplay() {
  const theme = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <h1>Tema</h1>
      <p>
        Este é um exemplo de como useContext pode ser usado para gerenciar um
        tema em React.
      </p>
    </div>
  );
}
