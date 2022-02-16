import React from 'react';
import s from './Profile.module.css'
import Card from "@mui/material/Card";

const Profile = () => {
    return (
        <div>
            <div className={s.profileContainer}>
                <Card className={s.ava}>
                    <img src={'https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png'}/>
                </Card>
                <div className={s.description}>
                    Описание: <br/>
                    Jeka 29 LET
                </div>
            </div>
            <div className={s.title}>
                title
                <div>
                    <input/>
                </div>

        </div>
            <hr/>
        </div>
    );
};

export default Profile;