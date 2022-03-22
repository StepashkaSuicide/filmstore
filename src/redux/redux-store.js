import {applyMiddleware, combineReducers, createStore} from "redux";
import chatReducer from "./chat-reducer";
import postReducer from "./post-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'



const reducers = combineReducers({
    chatPage: chatReducer,
    postsPage: postReducer,
    navBarPage: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    }

)
let store = createStore(reducers, applyMiddleware(thunk))
window.store=store
export default store