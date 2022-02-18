import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement = props.posts.map(p =>  <Post key={p.id} id={p.id} message={p.message} likes={p.likes} /> )
    let newPostElement = React.createRef()


    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value=''
    }



    return (
        <div className={s.container}>
            {postElement}
            <div className={s.textarea}>
                <textarea ref={newPostElement}/>
            </div>
            <div className={s.buttonContainer}>
                <button onClick={addPost} className={s.button}>
                    Добавить пост
                </button>
            </div>
        </div>

    );
};

export default MyPosts;