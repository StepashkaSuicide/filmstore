import React from 'react';
import s from './Cabinet.module.css'
import Profile from "../Profile/Profile";
import MyPostsContainer from "../MyPosts/MyPostsContainer";



const Cabinet = (props) => {

    return (
        <div className={s.mainContainer}>
            <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Cabinet;