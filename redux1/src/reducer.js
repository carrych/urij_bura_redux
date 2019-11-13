 const reducer = (state = 1, action) => {
    const { type, payload } = action;
    switch (type) {
      case "INC":
        return ++state;
      case "RAND":
        return (state += payload);
      case "DEC":
        return --state;
      default:
        return state;
    }
  };

  export default reducer;