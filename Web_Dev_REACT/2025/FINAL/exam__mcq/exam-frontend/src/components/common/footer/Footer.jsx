﻿import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-4">
            <div className="container">
                <p className="mb-0">&copy; {new Date().getFullYear()} Exam Portal. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
