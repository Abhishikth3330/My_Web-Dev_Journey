import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./components/pages/Pages";

const App = () => {
    return (
        <Router>
            <Pages />
        </Router>
    );
};

export default App;
