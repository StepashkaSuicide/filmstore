import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.postContainer}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg' />
                    <div className={s.textPost}>
                        POST
                    </div>

        </div>
    );
};

export default Post;