const initialState = {
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "AUTH_START":
      return { ...state, loading: true };
    case "AUTH_END":
      return { ...state, loading: false };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: payload };
    // case "AUTH_START":
    //   return { ...state, loading: true };

    default:
      return state;
  }
};
