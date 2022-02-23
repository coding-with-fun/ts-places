import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./containers/Details";
import Home from "./containers/Home";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
