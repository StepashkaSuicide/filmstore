import chatReducer from "./chat-reducer";
import postReducer from "./post-reducer";
import navReducer from "./nav-reducer";

let store = {
    _state: {
        chatPage: {
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
            newChatText: '',
        },
        postsPage: {
            posts: [
                {id: 1, message: 'HI BRATAN', likes: 3},
                {id: 2, message: 'HI b', likes: 5},
                {id: 3, message: 'HI r', likes: 7},
                {id: 4, message: 'HI a', likes: 12},
                {id: 5, message: 'HI t', likes: 44},
            ],
            newPostText: ''
        },
        navBarPage: {
            friends: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Nastya'},
                {id: 5, name: 'Lena'},
            ]
        },
    },


    _callSubscriber() {
        console.log('LOX')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
this._state.chatPage = chatReducer(this._state.chatPage, action)
this._state.postsPage = postReducer(this._state.postsPage, action)
this._state.navBarPage = navReducer(this._state.navBarPage, action)
        this._callSubscriber(this._state)
    },
}


export default store



