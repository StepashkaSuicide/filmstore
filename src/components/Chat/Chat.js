import React from 'react';
import s from './Chat.module.css'
import Dialog from "./DialogsChat/Dialogs";
import Message from "./MessagesChat/Messages";
import ChatForm from "./ChatForm";

const Chat = (props) => {
    let state = props.chatPage
    let dialogElement = state.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    let messageElement = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)


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
                <ChatForm />
                <div
                    className={s.buttonContainer}>
                </div>
            </div>
        </div>
    );
};
export default Chat


