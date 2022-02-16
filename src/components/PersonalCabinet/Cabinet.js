import React from 'react';
import s from './Cabinet.module.css'
import MyPosts from "../MyPosts/MyPosts";
import Profile from "../Profile/Profile";

const Cabinet = () => {
    return (
        <div className={s.mainContainer}>
            <Profile/>
            <MyPosts/>
        </div>
    );
};

export default Cabinet;