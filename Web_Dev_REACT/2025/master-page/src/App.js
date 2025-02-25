import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./components/pages/Pages";
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export default App;
