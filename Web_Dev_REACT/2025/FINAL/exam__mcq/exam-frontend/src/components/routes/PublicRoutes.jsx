import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
//import Home from "../home/";
//import Exams from "../";
//import Results from "../components/pages/Results";
import Login from "../auth/Login";
import Register from "../auth/Register";
import RegisterAdmin from "../auth/RegisterAdmin"

const PublicRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                {/*<Route path="/" element={<Home />} />*/}
                {/*<Route path="/exams" element={<Exams />} />*/}
                {/*<Route path="/results" element={<Results />} />*/}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register" element={<RegisterAdmin />} />
            </Routes>
            <Footer />
        </>
    );
};

export default PublicRoutes;
