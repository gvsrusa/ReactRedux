export const reducer = (state = "GO", action) => {
  switch (action.type) {
    case "GO":
      return (state = "GO");
    case "STOP":
      return (state = "STOP");
    case "CAUTION":
      return (state = "CAUTION");
    default:
      return state;
  }
};
