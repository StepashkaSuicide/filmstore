import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
        posts: [
            {id: 1, message: 'HI BRATAN', likes: 3},
            {id: 2, message: 'HI b', likes: 5},
            {id: 3, message: 'HI r', likes: 7},
            {id: 4, message: 'HI a', likes: 12},
            {id: 5, message: 'HI t', likes: 44},
        ],
        newPostText: '',
        profile: null,
        status: '',

}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likes: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
    }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
            newPostText: action.newText
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
        }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
        }
        default:
            return state

    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) =>(dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userId) =>(dispatch) =>{
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) =>(dispatch) =>{
    profileAPI.updateStatus(status)
        .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
export const updateOnPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default postReducer