import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeControls() {
  const { theme, dispatch } = useContext(ThemeContext);

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3>Controles del Tema</h3>

      {/* Color primario */}
      <div>
        <label>Color primario: </label>
        <input
          type="color"
          value={theme.primaryColor}
          onChange={e =>
            dispatch({ type: "SET_COLOR", payload: e.target.value })
          }
        />
      </div>

      {/* Tamaño de fuente */}
      <div>
        <label>Tamaño de fuente: {theme.fontSize}px</label>
        <input
          type="range"
          min="12"
          max="32"
          value={theme.fontSize}
          onChange={e =>
            dispatch({
              type: "SET_FONT_SIZE",
              payload: Number(e.target.value)
            })
          }
        />
      </div>

      {/* Transformación de texto */}
      <div>
        <button onClick={() =>
          dispatch({ type: "SET_TEXT_TRANSFORM", payload: "none" })
        }>
          Normal
        </button>

        <button onClick={() =>
          dispatch({ type: "SET_TEXT_TRANSFORM", payload: "uppercase" })
        }>
          MAYÚSCULAS
        </button>

        <button onClick={() =>
          dispatch({ type: "SET_TEXT_TRANSFORM", payload: "lowercase" })
        }>
          minúsculas
        </button>

        <button onClick={() =>
          dispatch({ type: "SET_TEXT_TRANSFORM", payload: "capitalize" })
        }>
          Capitalizar
        </button>
      </div>
    </div>
  );
}
