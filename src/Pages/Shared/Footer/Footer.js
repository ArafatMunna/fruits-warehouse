import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center mt-5 bg-dark text-white p-4">
            <p>
                <small>Copyright &copy; {new Date().getFullYear()} || All rights reserved</small>
            </p>
        </footer>
    );
};

export default Footer;
