import React from 'react';
import {sendMessageChatCreator} from "../../redux/chat-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        chatPage: state.chatPage,
        newPostText: state.chatPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageChat: (newMessageBody) => {
            dispatch(sendMessageChatCreator(newMessageBody))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Chat)


