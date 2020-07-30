import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
   FETCH_BOARDS_SUCCESS, FETCH_BOARDS_FAIL, FETCH_BOARDS_START
   } from "../actions";

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
      case FETCH_BOARDS_START: 
      return {
          ...state,
          isLoading: true
      }
      case FETCH_BOARDS_SUCCESS:
      return {
          ...state,
          isLoading: false,
          boards: action.payload
      }
      case FETCH_BOARDS_FAIL:
      return {
          ...state,
          error: action.payload
      }
    default:
        return state;
    }
  };