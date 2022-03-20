import React from 'react';
import s from './Profile.module.css'
import Card from "@mui/material/Card";
import profilePhoto from './../assets/img/profile.png'
import Preloader from "../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div className={s.profileContainer}>
                <Card className={s.ava}>

                    <img src={props.profile.photos.large !=null ? props.profile.photos.large : profilePhoto} alt={'12'}/>
                </Card>
                <div className={s.description}>
                    Описание: <br/>
                    {props.profile.fullName}
                </div>
              </div>
            <div className={s.title}>
                title
                <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
        </div>
            <hr/>
        </div>
    );
};

export default Profile;