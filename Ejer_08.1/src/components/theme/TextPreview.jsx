import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function TextPreview() {
  const { theme } = useContext(ThemeContext);

  return (
    <p
      style={{
        fontSize: theme.fontSize,
        textTransform: theme.textTransform,
        color: theme.primaryColor
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  );
}
