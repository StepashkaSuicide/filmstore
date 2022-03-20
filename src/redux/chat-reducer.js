const SEND_MESSAGE_CHAT = 'SEND-MESSAGE-CHAT'




let initialState = {
        messages: [
            {id: 1, message: 'Hello braza'},
            {id: 2, message: 'how are you'},
            {id: 3, message: 'Ychy angliiskii'},
            {id: 4, message: 'HOROSH'},
            {id: 5, message: 'go'},
            {id: 6, message: 'stoi'},
        ],
        dialogs: [
            {id: 1, name: 'Jeka'},
            {id: 2, name: 'Lexa'},
            {id: 3, name: 'Vlad'},
            {id: 4, name: 'Sania'},
            {id: 5, name: 'Max'},
            {id: 6, name: 'Oleg'},
        ],


}

const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE_CHAT:
            let newText = action.newChatText
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: newText} ]
            }
        default:
            return state
    }
}

export const sendMessageChatCreator = (newMessageBody) => ({type: SEND_MESSAGE_CHAT, newMessageBody})


export default chatReducer