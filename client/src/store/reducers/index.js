import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
   FETCH_BOARDS_SUCCESS, FETCH_BOARDS_FAIL, FETCH_BOARDS_START, 
   POST_BOARDS_START, POST_BOARDS_SUCCESS, POST_BOARDS_FAIL, 
   DELETE_BOARD_START, DELETE_BOARD_SUCCESS, DELETE_BOARD_FAIL, 
   FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAIL, 
   EDIT_ARTICLE_START, EDIT_ARTICLE_SUCCESS, EDIT_ARTICLE_FAIL, 
   FETCH_BOARD_SUCCESS, FETCH_BOARD_FAIL, FETCH_BOARD_START, 
   GET_USER_INFO, GET_USER_SUCCESS, GET_USER_FAIL,
    EDIT_USER_START, EDIT_USER_SUCCESS, EDIT_USER_FAIL
   } from "../actions";

const initialState = {
    articles: [],
    boards: [],
    error: '',
    username:{
      avatar: '',
      first_name: '',
      email: ''
    },
    isLoading: false,
    isLoggingIn: false,
    isEditing: false
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

      case GET_USER_INFO:
        return {
          ...state,
          isLoading: true
        }
      case GET_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          username: action.payload
        }
      case GET_USER_FAIL:
        return {
          ...state
        }
      case EDIT_USER_START:
        return {
          ...state,
          isEditing: true
        }

      case EDIT_USER_SUCCESS:
        return {
          ...state,
          username: action.payload
        }
      case EDIT_USER_FAIL:
        return {
          ...state,
          error: action.payload
        }

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
        case EDIT_ARTICLE_START:
          return {
             ...state,
             isEditing: true,
          }
          case EDIT_ARTICLE_SUCCESS:
            return {
                ...state,
                isEditing: false,
                deletingBoard: false,
                boards: [...state.boards.filter(f => f.id !== action.payload)]
            }
            case EDIT_ARTICLE_FAIL:
              return {
                ...state,
                error: action.payload
              }
              case FETCH_BOARD_START: 
      return {
          ...state,
          isLoading: true
      }
      case FETCH_BOARD_SUCCESS:
      return {
          ...state,
          isLoading: false,
          boards: action.payload
      }
      case FETCH_BOARD_FAIL:
      return {
          ...state,
          error: action.payload
      }
    default:
        return state;
    }
  };
