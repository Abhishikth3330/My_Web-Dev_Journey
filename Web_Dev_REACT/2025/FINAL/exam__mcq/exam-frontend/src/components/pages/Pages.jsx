import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Home from "../home/Home";
//import Exams from "../public/Exams";
//import Results from "../public/Results";
import Login from "../auth/Login";
import Register from "../auth/Register";
import RegisterAdmin from "../auth/RegisterAdmin";
//import NotFound from "../public/NotFound";

const Pages = () => {
    return (
        <>
            <Header />  {/* Common Header for all public pages */}
            <main style={{ minHeight: "80vh" }}>
                <Routes>
                    {/* Public Pages (Cluster 1) */}
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/exams" element={<Exams />} />*/}
                    {/*<Route path="/results" element={<Results />} />*/}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/register-admin" element={<RegisterAdmin />} />

                    {/* Catch-all for 404 */}
                    {/*<Route path="*" element={<NotFound />} />*/}
                </Routes>
            </main>
            <Footer />  {/* Common Footer for all public pages */}
        </>
    );
};

export default Pages;
