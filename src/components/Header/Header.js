import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {

    return (
        <div className={s.header}>
            <header  >
                <NavLink to='/main'>
                    <img  src={'https://1000logos.net/wp-content/uploads/2016/11/meta-logo.png'}/>
                </NavLink>

            </header>

        </div>
    );
};

export default Header;