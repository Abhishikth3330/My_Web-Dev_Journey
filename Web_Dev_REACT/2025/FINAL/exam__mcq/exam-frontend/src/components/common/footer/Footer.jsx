import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-3 mt-4">
            <p className="mb-0">&copy; {new Date().getFullYear()} Exam Portal. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
