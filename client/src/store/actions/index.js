import { axiosWithAuth } from "../../utils/axiosWithAuth"

// Login Actions
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

//Get a list of Boards from the user
export const FETCH_BOARDS_START = 'FETCH_BOARDS_START'
export const FETCH_BOARDS_SUCCESS= 'FETCH_BOARDS_SUCCESS'
export const FETCH_BOARDS_FAIL= 'FETCH_BOARDS_FAIL'

export const getBoards = () => dispatch => {
    
    dispatch({ type: FETCH_BOARDS_START })
    axiosWithAuth()
    .get('/categories/categories')
    // .get('/articles/articles')
    // .get('/article/{articleid}')
    // .get(`/article/${id}`)
    
    .then(res => {
        // debugger;
        console.log(res)
        dispatch({ type: FETCH_BOARDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}


// Posts a category from BoardForm
export const POST_BOARDS_START = 'POST_BOARDS_START'
export const POST_BOARDS_SUCCESS = 'POST_BOARDS_SUCCESS'
export const POST_BOARDS_FAIL = 'POST_BOARDS_FAIL'

export const postBoard = (board) => dispatch => {
    dispatch({ type: POST_BOARDS_START })
    
    console.log("postBoard after submit", board)
    axiosWithAuth()
    .post(`/categories/category`, board) 
    // .post(`/category/${11}`, board) 
    // .post(`https://reqres.in/api/users`, board)
    .then (res => {
        
        dispatch({ type: POST_BOARDS_SUCCESS, payload: res.data})
    
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: POST_BOARDS_FAIL })
    })
}



// Delete Boards
export const DELETE_BOARD_START = 'DELETE_BOARD_START'
export const DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS'
export const DELETE_BOARD_FAIL = 'DELETE_BOARD_FAIL'

export const deleteBoard = id => dispatch => {
    dispatch({ type: DELETE_BOARD_START })
    axiosWithAuth()
    .delete(`/categories/category/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: DELETE_BOARD_SUCCESS, payload: id })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: DELETE_BOARD_FAIL })
    })
}



// Edit Boards Title



// Fetch Articles
export const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES_FAIL = 'FETCH_ARTICLES_FAIL'

export const getArticles =() => dispatch => {
    dispatch({ type: FETCH_ARTICLES_START })
    axiosWithAuth()
    .get(`/articles/articles`)
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_ARTICLES_FAIL })
    })
}