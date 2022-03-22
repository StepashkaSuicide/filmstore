import React from 'react';
import s from './Chat.module.css'
import Dialog from "./DialogsChat/Dialogs";
import Message from "./MessagesChat/Messages";
import {Field, reduxForm} from 'redux-form'


const Chat = (props) => {
    let state = props.chatPage
    let dialogElement = state.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    let messageElement = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)



    let addNewMessage = (values) => {
        props.sendMessageChat(values.newMessageBody)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogContainer}>
                    {dialogElement}
                </div>
                <div>
                    {messageElement}
                </div>
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
                <div
                    className={s.buttonContainer}>
                </div>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.buttonContainer}>
                <Field component='textarea' name='newMessageBody'/>
                <div>
                    <button className={s.button}> отправить </button>
                </div>
            </div>
        </form>
    );
}


const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Chat


