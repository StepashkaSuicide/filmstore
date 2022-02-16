import React from 'react';
import s from './Chat.module.css'
import {NavLink} from "react-router-dom";

const DialogContainer = (props) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialogContainer}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}
const dialogs = [
    {id: 1, name: 'Jeka'},
    {id: 2, name: 'Lexa'},
    {id: 3, name: 'Vlad'},
    {id: 4, name: 'Sania'},
    {id: 5, name: 'Max'},
    {id: 6, name: 'Oleg'},
]
const messages = [
    {id: 1, message: 'Hello braza'},
    {id: 2, message: 'how are you'},
    {id: 3, message: 'Ychy angliiskii'},
    {id: 4, message: 'HOROSH'},
    {id: 5, message: 'go'},
    {id: 6, message: 'stoi'},
]
let dialogElement = dialogs.map(d =>  <DialogContainer key={d.id} name={d.name} id={d.id}/>)
let messageElement = messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

const Chat = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogContainer}>
                {dialogElement}
            </div>
            <div>
                {messageElement }
            </div>
        </div>
    );
};
export default Chat


