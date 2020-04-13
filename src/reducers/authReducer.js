import * as actions from "../actions/authActionsTypes";

const initialState = {
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_START:
      return { ...state, loading: true };
    case actions.AUTH_END:
      return { ...state, loading: false };
    case actions.AUTH_FAIL:
      return { ...state, loading: false, error: payload };
    case actions.AUTH_SUCCESS:
      return { ...state, loading: false, error: false };

    default:
      return state;
  }
};
