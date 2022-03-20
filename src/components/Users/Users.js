import React from 'react';
import s from "./users.module.css";
import userPhoto from "../assets/user.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }
    return (
        <div className={s.container}>
            <div className={s.cursor}>
                {pages.map(p => {
                    return <span key={p}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/cabinet/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={'123'} className={s.userPhoto}/>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>Отписаться</button>
                            : <button disabled={props.followingInProgress.some(id=>id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>Подписаться</button>}
                            </div>
                            </span>

                    <span>

                            <div>{u.name}</div>
                            <div> {u.status}</div>
                            </span>
                    <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.sity'}</div>
                            </span>
                </div>)
            }
        </div>
    );
};

export default Users;