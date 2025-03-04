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
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="w-full">
            {/* 슬라이드 배너 */}
            <div className="relative w-full h-[500px] overflow-hidden">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                {/* 이미지 위 텍스트 오버레이 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-4xl font-bold drop-shadow-lg">
                        Sogang Computer Club
                    </h1>
                    <p className="text-lg mt-2 drop-shadow-lg">
                        서강대 중앙 컴퓨터 동아리 SGCC
                    </p>
                </div>

                {/* 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-red-500" : "bg-gray-500"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* About SGCC 섹션 */}
            <div className="bg-black text-white py-16 px-8 text-center">
                <h2 className="text-3xl font-bold mb-4">About SGCC</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                    SGCC는 1982년에 창립된 서강대학교 중앙 컴퓨터 동아리입니다. Python, C 언어 등 기초 프로그래밍
                    언어뿐만 아니라 유니티, 언리얼엔진, 웹, 알고리즘 등 여러 분야에서의 스터디를 진행하며 부원들의 기술적
                    역량을 향상시키는 것을 목표로 노력하고 있습니다.
                </p>
                <h2 className="text-3xl font-bold mb-4">Recruting</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                    <button
                        className="w-full sm:w-auto bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-md shadow-md transition-all duration-300"
                    >
                        지원하기
                    </button>
                </p>
            </div>
        </div >
    );
};

export default Main;
