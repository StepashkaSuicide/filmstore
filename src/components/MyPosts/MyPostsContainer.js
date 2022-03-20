import React from 'react';
import {
    addPostActionCreator,
    updateOnPostChangeActionCreator
} from "../../redux/post-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




let mapStateToProps = (state) => {

    return {
        postsPage: state.postsPage,
        newPostText: state.postsPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
           dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            let action = updateOnPostChangeActionCreator(text)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;