

import { axiosWithAuth } from "../../utils/axiosWithAuth"


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
    .get('https://karminer60-pintereach.herokuapp.com/categories/categories')
    .then(res => {
        // debugger;
        console.log(res)
        dispatch({ type: FETCH_BOARDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

