import React from 'react';
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-6">
                <p className="font-semibold">Made by SGCC</p>

                <hr className="border-t border-white mb-4" />

                <div className="flex flex-col md:grid md:grid-cols-2 gap-6">

                    <div className="text-center md:text-left space-y-2">
                        <p>서울특별시 신수동 서강대학교 엠마오관 B 128호</p>
                        <p>sgccofficial2024@gmail.com</p>
                        <p className="mt-2">회장 강현우</p>
                        <p>010-5572-0278</p>
                        <p>부회장 김무영</p>
                        <p>010-8609-3075</p>
                    </div>

                    <div className="text-center md:text-right space-y-2">
                        <p className="font-semibold">2025 ver. Created By</p>
                        <p>김명섭 김무영 이다은 김대원 안가람</p>

                        {/* SNS 아이콘 */}
                        <div className="flex justify-center md:justify-end gap-4 mt-4">
                            <a href="https://www.instagram.com/sgcc_sogang/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl hover:text-gray-300 transition" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCa4ws7-hKJCj5BEw0Okv5ag" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-2xl hover:text-gray-300 transition" />
                            </a>
                            <a href="https://github.com/Sogang-Computer-Club" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl hover:text-gray-300 transition" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
