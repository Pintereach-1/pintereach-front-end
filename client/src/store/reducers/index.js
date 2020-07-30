import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions";

const initialState = {
  articles: [],
  boards: [],
  user_info: {},
  error: "",
  isLoading: false,
  isLoggingIn: false,
  isRegistering: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false,
      };

    case REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        error: "",
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        error: "",
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isRegistering: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
