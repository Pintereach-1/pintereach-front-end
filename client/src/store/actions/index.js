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
    
        dispatch({ type: FETCH_BOARDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}


export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const getUserInfo = () => dispatch => {
    dispatch({ type: GET_USER_INFO })
    axiosWithAuth()
    // .get(`/user/name/${username}`)
    .get(`https://reqres.in/api/users/1`)
    .then(res => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.data.data })
    })
    .catch(err => {
        dispatch({ type: GET_USER_FAIL })
        console.log(err)
    })
}


export const EDIT_USER_START = 'EDIT_USER_START'
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
export const EDIT_USER_FAIL = 'EDIT_USER_FAIL'

export const editUser = user => dispatch => {
    
    dispatch({ type: EDIT_USER_START })
    axiosWithAuth()
    .put(`https://reqres.in/api/users/1`, user)
    .then(res => {
        dispatch({ type: EDIT_USER_SUCCESS, payload: res.data })
            
    })
    .catch(err => {
        dispatch({ type: EDIT_USER_FAIL })
        console.log(err)
    })
}


// Posts a category from BoardForm
export const POST_BOARDS_START = 'POST_BOARDS_START'
export const POST_BOARDS_SUCCESS = 'POST_BOARDS_SUCCESS'
export const POST_BOARDS_FAIL = 'POST_BOARDS_FAIL'

export const postBoard = (board) => dispatch => {
    dispatch({ type: POST_BOARDS_START })

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
        
        dispatch({ type: DELETE_BOARD_SUCCESS, payload: id })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: DELETE_BOARD_FAIL })
    })
}



// Edit Boards Title
export const EDIT_ARTICLE_START = 'EDIT_ARTICLE_START'
export const EDIT_ARTICLE_SUCCESS = 'EDIT_ARTICLE_SUCCESS'
export const EDIT_ARTICLE_FAIL = 'EDIT_ARTICLE_FAIL'

export const editBoard = (id, board) => dispatch => {
    dispatch ({type: EDIT_ARTICLE_START})
    axiosWithAuth()
    .put(`/categories/category/${id}`, board)
    // .put(`https://reqres.in/api/users/${id}`, board)
    .then(res =>{
        dispatch({ type: EDIT_ARTICLE_SUCCESS, payload: res.data})
    })
    
    .catch(err => {console.log(err)
        dispatch({ type: EDIT_ARTICLE_FAIL, payload: err.data})
    })
}

// Fetch Boards By Id

export const FETCH_BOARD_START = 'FETCH_BOARD_START'
export const FETCH_BOARD_SUCCESS= 'FETCH_BOARD_SUCCESS'
export const FETCH_BOARD_FAIL= 'FETCH_BOARD_FAIL'

export const getBoard = (id) => dispatch => {
    
    dispatch({ type: FETCH_BOARD_START })
    axiosWithAuth()
    .get(`/categories/category/${id}`)
    // .get(`https://reqres.in/api/users/${id}`)
    
    
    .then(res => {
        dispatch({ type: FETCH_BOARD_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_BOARD_FAIL, payload: err.data})
    })
}


// Fetch Articles
export const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES_FAIL = 'FETCH_ARTICLES_FAIL'

export const getArticles =() => dispatch => {
    dispatch({ type: FETCH_ARTICLES_START })
    axiosWithAuth()
    .get(`/articles/articles/`)
    .then(res => {
        
        dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_ARTICLES_FAIL })
    })
}


