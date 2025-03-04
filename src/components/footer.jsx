import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm mt-2">© 2025 SGCC website. All Rights Reserved.</p>
                <a
                    href="https://www.instagram.com/sgcc_sogang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    인스타그램 바로가기
                </a>
            </div>
        </footer>
    );
};

export default Footer;
