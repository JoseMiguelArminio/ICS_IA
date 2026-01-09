import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ButtonPreview() {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme.primaryColor,
        fontSize: theme.fontSize,
        textTransform: theme.textTransform,
        color: "white",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "4px"
      }}
    >
      Haz clic
    </button>
  );
}
