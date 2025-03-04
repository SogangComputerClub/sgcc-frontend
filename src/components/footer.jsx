import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">

                {/* flex를 이용해 아이콘과 텍스트를 나란히 배치 */}
                <a
                    href="https://www.instagram.com/sgcc_sogang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-12 pb-4 flex items-center justify-center gap-2 text-white hover:text-gray-400"
                >

                    <FaInstagram className="text-xl relative top-[1px]" />
                    @sgcc_sogang
                </a>
            </div>
        </footer>
    );
};

export default Footer;
