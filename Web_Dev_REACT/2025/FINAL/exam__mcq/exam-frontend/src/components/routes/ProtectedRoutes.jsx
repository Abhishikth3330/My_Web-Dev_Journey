import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../common/sidebar/Sidebar";
//import Dashboard from "../components/pages/Dashboard";
//import Candidates from "../components/pages/Candidates";
//import Exams from "../components/pages/Exams";
//import Questions from "../components/pages/Questions";
//import Payments from "../components/pages/Payments";
//import SurveyInfo from "../components/pages/SurveyInfo";

const isAuthenticated = true; // Replace this with actual authentication logic

const ProtectedRoutes = () => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="content p-3" style={{ flex: 1 }}>
                <Routes>
                    {/*<Route path="/dashboard" element={<Dashboard />} />*/}
                    {/*<Route path="/candidates" element={<Candidates />} />*/}
                    {/*<Route path="/exams" element={<Exams />} />*/}
                    {/*<Route path="/questions" element={<Questions />} />*/}
                    {/*<Route path="/payments" element={<Payments />} />*/}
                    {/*<Route path="/survey-info" element={<SurveyInfo />} />*/}
                </Routes>
            </div>
        </div>
    );
};

export default ProtectedRoutes;
