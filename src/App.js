import './App.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Films from "./components/Films/Films";
import Main from "./components/Main/Main";
import ChatContainer from "./components/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import CabinetContainer from "./components/Cabinet/CabinetContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



const App = () => {

    return (
        <div className='app-wrapper-all'>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/chat' element={<ChatContainer    />}/>
                        <Route path='/films' element={<Films/>}/>
                        <Route path='/main' element={<Main/>}/>
                        <Route path='/cabinet/*' element={<CabinetContainer />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                        <Route path='/login' element={<Login />}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
