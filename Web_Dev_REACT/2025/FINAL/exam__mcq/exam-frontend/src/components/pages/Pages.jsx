import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Sidebar from "../common/sidebar/Sidebar";  // Import Sidebar
import Login from "../auth/Login";
import Register from "../auth/Register";
import RegisterAdmin from "../auth/RegisterAdmin";

const Pages = () => {
    return (
        <>
            <Header />
            <div className="d-flex">
                <Sidebar />  {/* Sidebar on the left */}
                <main className="container mt-4" style={{ marginLeft: "250px", width: "100%" }}>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/register-admin" element={<RegisterAdmin />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Pages;
