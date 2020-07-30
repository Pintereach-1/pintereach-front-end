import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
   FETCH_BOARDS_SUCCESS, FETCH_BOARDS_FAIL, FETCH_BOARDS_START, 
   POST_BOARDS_START, POST_BOARDS_SUCCESS, POST_BOARDS_FAIL, 
   DELETE_BOARD_START, DELETE_BOARD_SUCCESS, DELETE_BOARD_FAIL, 
   FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAIL
   } from "../actions";

const initialState = {
    articles: [],
    boards: [],
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
      case POST_BOARDS_START:
      return {
          ...state,
          isLoading: true,
      }
      case POST_BOARDS_SUCCESS:
      return {
          ...state,
          isLoading: false,
          boards: [...state.boards, {...action.payload}]
      }
      case POST_BOARDS_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case DELETE_BOARD_START:
      return {
          ...state,
          deletingBoard: true
      }
      case DELETE_BOARD_SUCCESS:
      return {
          ...state,
          deletingBoard: false,
          boards: [...state.boards.filter(f => f.id !== action.payload)]
      }
      case DELETE_BOARD_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case FETCH_ARTICLES_START:
        return {
            ...state,
            isLoading: true
        }
        case FETCH_ARTICLES_SUCCESS:
        return {
            ...state, 
            isLoading: false,
            articles: action.payload
        }
        case FETCH_ARTICLES_FAIL:
        return {
            ...state,
            error: action.payload
        }
    default:
        return state;
    }
  };
