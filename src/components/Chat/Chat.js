import React from 'react';
import s from './Chat.module.css'
import Dialog from "./DialogsChat/Dialogs";
import Message from "./MessagesChat/Messages";


const Chat = (props) => {

    let dialogElement = props.state.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)


    let newMessageChat = React.createRef()

    let addPostChat = () => {
        let textChat = newMessageChat.current.value
        props.addMessageChat(textChat)
        newMessageChat.current.value= ''
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
            <div >
                <div className={s.textarea}>
                    <textarea ref={newMessageChat} />
                </div>

                <div className={s.buttonContainer}>
                    <button onClick={addPostChat} className={s.button}>Отправить</button>
                </div>
            </div>
        </div>
    );
};
export default Chat


