import React from 'react';
import s from './Friend.module.css'
const Friend = (props) => {
    return (
        <div className={s.friends}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' />
            <div> {props.name}</div>


        </div>
    );
};

export default Friend;