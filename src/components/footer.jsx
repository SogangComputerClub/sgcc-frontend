import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <h1 className="text-lg font-bold">This is Footer</h1>
                <p className="text-sm mt-2">© 2025 My Website. All Rights Reserved.</p>
                <a
                    href="https://www.instagram.com/your_instagram_page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    인스타그램 바로가기
                </a>
            </div>
        </footer>
    );
};

export default Footer;
