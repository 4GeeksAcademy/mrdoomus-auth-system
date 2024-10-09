import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Layout;
