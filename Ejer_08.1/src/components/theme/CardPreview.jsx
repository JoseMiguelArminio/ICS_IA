import { useContext, useMemo } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function CardPreview() {
  const { theme } = useContext(ThemeContext);

  const shadowColor = useMemo(() => {
    return theme.primaryColor + "99";
  }, [theme.primaryColor]);

  return (
    <div
      style={{
        background: theme.primaryColor,
        fontSize: theme.fontSize,
        textTransform: theme.textTransform,
        boxShadow: `0 4px 10px ${shadowColor}`,
        padding: "1rem"
      }}
    >
      Tarjeta de ejemplo
    </div>
  );
}
