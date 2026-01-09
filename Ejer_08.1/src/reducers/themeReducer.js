export const themeReducer = (state, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return { ...state, primaryColor: action.payload };

    case "SET_FONT_SIZE":
      return { ...state, fontSize: action.payload };

    case "SET_TEXT_TRANSFORM":
      return { ...state, textTransform: action.payload };

    default:
      return state;
  }
};
