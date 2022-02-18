import React from 'react';
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'
import Friend from "../Friends/Frend/Friend";



const NavBar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : "" }}} to='/main'> Основная страница</NavLink>
            </div>

            <div className={s.item}>
                <NavLink style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : "" }}} to='/films'> Фильмы</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/cabinet' style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : "" }}}
                        >
                    Личный кабинет</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/chat' style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : "" }}}
                        >
                    Чат</NavLink>
            </div>

                <div className={s.item}>
                    <NavLink to='/friends' style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "" }}}
                    >
                        Друзья</NavLink>
                    <div className={s.fr}>
                        <div><Friend/></div>
                        <div> <Friend /></div>
                        <div><Friend /></div>
                    </div>
            </div>

        </nav>
    );
};

export default NavBar;