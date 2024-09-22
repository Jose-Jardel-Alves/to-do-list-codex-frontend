import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp"
import EditProfile from "../pages/EditProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<Login/>}/>
                <Route path="/home/:userId" element={<Home/>} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/edit-profile/:userId" element={<EditProfile />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;