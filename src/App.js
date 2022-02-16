import './App.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Films from "./components/Films/Films";
import Main from "./components/Main/Main";
import Cabinet from "./components/PersonalCabinet/Cabinet";
import Chat from "./components/Chat/Chat";



const App = () => {

    return (
        <div className='app-wrapper-all'>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
            <Routes >
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/films' element={<Films/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/cabinet' element={<Cabinet/>}/>
            </Routes>
            </div>
        </div>
        </div>
    );
}

export default App;
