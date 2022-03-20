import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let state = props.postsPage
    let postElement = state.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likes={p.likes}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
    props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }


    return (
        <div className={s.container}>
            {postElement}
            <div className={s.textarea}>
                <textarea placeholder='Введите текст' onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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