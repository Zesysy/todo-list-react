import * as actions from "../actions/authActionsTypes";

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false,
  },
  recoverPassword: {
    error: null,
    loading: false,
  },
  profileEdit: {
    error: null,
    loading: false,
  },
  deleteUser: {
    error: null,
    loading: false,
  },
};

// Auth reducers
const authStart = (state) => {
  return { ...state, loading: true };
};
const authEnd = (state) => {
  return { ...state, loading: false };
};
const authFail = (state, payload) => {
  return { ...state, loading: false, error: payload };
};
const authSuccess = (state) => {
  return { ...state, loading: false, error: false };
};

// Verify refucers
const verifyStart = (state) => {
  return { ...state, verifyEmail: { ...state.verifyEmail, loading: true } };
};
const verifySuccess = (state) => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: false },
  };
};
const verifyFail = (state, payload) => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: payload },
  };
};

// Recovery reducers
const recoveryStart = (state) => {
  return {
    ...state,
    recoverPassword: { ...state.recoverPassword, loading: true },
  };
};
const recoverySuccess = (state) => {
  return {
    ...state,
    recoverPassword: {
      ...state.recoverPassword,
      loading: false,
      error: false,
    },
  };
};
const recoveryFail = (state, payload) => {
  return {
    ...state,
    recoverPassword: {
      ...state.recoverPassword,
      loading: false,
      error: payload,
    },
  };
};

// Edit profile reducers
const ProfileEditStart = (state) => {
  return {
    ...state,
    profileEdit: { ...state.profileEdit, loading: true },
  };
};
const ProfileEditSuccess = (state) => {
  return {
    ...state,
    profileEdit: {
      ...state.profileEdit,
      loading: false,
      error: false,
    },
  };
};
const ProfileEditFail = (state, payload) => {
  return {
    ...state,
    profileEdit: {
      ...state.profileEdit,
      loading: false,
      error: payload,
    },
  };
};

// Delete reducers
const deleteStart = (state) => {
  return {
    ...state,
    deleteUser: { ...state.deleteUser, loading: true },
  };
};
const deleteFail = (state, payload) => {
  return {
    ...state,
    deleteUser: {
      ...state.deleteUser,
      loading: false,
      error: payload,
    },
  };
};

// Clean up reducer
const cleanUp = (state) => {
  return {
    ...state,
    error: null,
    loading: false,
    verifyEmail: { ...state.verifyEmail, loading: false, error: null },
    recoverPassword: {
      ...state.recoverPassword,
      loading: false,
      error: null,
    },
    profileEdit: {
      ...state.profileEdit,
      loading: false,
      error: null,
    },
    deleteUser: {
      ...state.deleteUser,
      loading: false,
      error: null,
    },
  };
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.CLEAN_UP:
      return cleanUp(state);

    case actions.AUTH_START:
      return authStart(state);
    case actions.AUTH_END:
      return authEnd(state);
    case actions.AUTH_SUCCESS:
      return authSuccess(state);
    case actions.AUTH_FAIL:
      return authFail(state, payload);

    case actions.VERIFY_START:
      return verifyStart(state);
    case actions.VERIFY_SUCCESS:
      return verifySuccess(state);
    case actions.VERIFY_FAIL:
      return verifyFail(state, payload);

    case actions.RECOVERY_START:
      return recoveryStart(state);
    case actions.RECOVERY_SUCCESS:
      return recoverySuccess(state);
    case actions.RECOVERY_FAIL:
      return recoveryFail(state, payload);

    case actions.PROFILE_EDIT_START:
      return ProfileEditStart(state);
    case actions.PROFILE_EDIT_SUCCESS:
      return ProfileEditSuccess(state);
    case actions.PROFILE_EDIT_FAIL:
      return ProfileEditFail(state, payload);

    case actions.DELETE_START:
      return deleteStart(state);

    case actions.DELETE_FAIL:
      return deleteFail(state, payload);

    default:
      return state;
  }
};
