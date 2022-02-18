import React from 'react';
import s from './Cabinet.module.css'
import MyPosts from "../MyPosts/MyPosts";
import Profile from "../Profile/Profile";

const Cabinet = (props) => {

    return (
        <div className={s.mainContainer}>
            <Profile/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Cabinet;