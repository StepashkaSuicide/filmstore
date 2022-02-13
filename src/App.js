import './App.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router";
import Films from "./components/Films/Films";
import Main from "./components/Main/Main";
import Cabinet from "./components/PersonalCabinet/Cabinet";


const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Routes className='app-wrapper-content'>
                <Route path='/films' element={<Films/>}></Route>
                <Route path='/main' element={<Main/>}></Route>
                <Route path='/cabinet' element={<Cabinet/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
