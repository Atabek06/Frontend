import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import UsersPage from "./pages/usersPage/UsersPage";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index  element={<MainPage/>}/>
                <Route path="/usersPage" element={<UsersPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App;
