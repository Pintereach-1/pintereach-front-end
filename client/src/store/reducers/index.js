import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initialState = {
    articles: [],
    boards: [],
    user_info: {},
    error: '',
    isLoading: false,
    isLoggingIn: false,
}


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false
      };
    default:
        return state;
    }
  };