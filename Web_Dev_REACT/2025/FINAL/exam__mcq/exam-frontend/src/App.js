import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./components/pages/Pages"; // Ensure correct path

const App = () => {
    return (
        <BrowserRouter>
            <Pages />
        </BrowserRouter>
    );
};

export default App;
