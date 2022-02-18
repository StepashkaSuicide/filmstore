import './App.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Films from "./components/Films/Films";
import Main from "./components/Main/Main";
import Cabinet from "./components/PersonalCabinet/Cabinet";
import Chat from "./components/Chat/Chat";
import Friends from "./components/Friends/Friends";




const App = (props) => {

    return (
        <div className='app-wrapper-all'>
        <div className='app-wrapper'>
            <Header/>
            <NavBar state={props.state.navBarPage}/>
            <div className='app-wrapper-content'>
            <Routes >
                <Route path='/chat' element={<Chat state={props.state.chatPage} addMessageChat={props.addMessageChat}/>}/>
                <Route path='/films' element={<Films/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/friends' element={<Friends state={props.state.navBarPage}/>}/>
                <Route path='/cabinet' element={<Cabinet state={props.state.postsPage} addPost={props.addPost}/>}/>
            </Routes>
            </div>
        </div>
        </div>
    );
}

export default App;
