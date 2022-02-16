import React from 'react';
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'

const NavBar = () => {
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
        </nav>
    );
};

export default NavBar;