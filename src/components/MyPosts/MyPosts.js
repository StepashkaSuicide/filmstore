import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.container}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <div className={s.textarea}>
                <textarea/>
            </div>
            <div className={s.buttonContainer}>
                <button className={s.button}>
                    Добавить пост
                </button>
            </div>
        </div>
    );
};

export default MyPosts;