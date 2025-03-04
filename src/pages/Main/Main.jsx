import React, { useState, useEffect } from "react";

const images = [
    "/images/one.jpg",
    "/images/two.jpg",
    "/images/three.jpg",
    "/images/four.jpg",
];

const Main = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // 2초마다 변경

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {/* 이미지 슬라이드 */}
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Slide ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* 텍스트 오버레이 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-4xl font-bold drop-shadow-lg">
                    Sogang Computer Club
                </h1>
                <p className="text-lg mt-2 drop-shadow-lg">
                    서강대 중앙 컴퓨터 동아리 SGCC
                </p>
            </div>
        </div>
    );
};

export default Main;
