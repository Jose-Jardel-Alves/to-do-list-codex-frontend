import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;