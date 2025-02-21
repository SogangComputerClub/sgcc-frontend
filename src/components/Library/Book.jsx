import React, { useState } from 'react';
import PropTypes from "prop-types"; // ✅ prop-types 가져오기
const Book = ({ viewMode }) => {
    const [book, setBook] = useState({
        title: "책 제목이 얼마나 길진 모르겠지만 아무튼 제목",
        author: "저자",
        publisher: "출판사",
        year: 2025,
        copies: 1,
        image: "https://via.placeholder.com/100",
        isAvailable: true, // 대여 가능 여부
    });

    // 📌 대여 가능 여부 토글
    const toggleAvailability = () => {
        setBook({ ...book, isAvailable: !book.isAvailable });
    };

    return (
        <div>
            {/* 리스트형 레이아웃 */}
            {viewMode === "card" ? (
                <div className="p-5 border border-gray-300 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${book.isAvailable ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-500"}`}>
                            {book.isAvailable ? "대여 가능" : "대여 불가"}
                        </span>

                        <div className="flex items-center gap-3">
                            <h3
                                className={`text-sm ${
                                book.isAvailable ? 'text-gray-800' : 'text-orange-500'
                                }`}
                            >
                            {book.isAvailable ? "대여 가능" : "대여 불가"}
                            </h3>
                        
                            <button
                                onClick={toggleAvailability}
                                className={`w-14 h-8 flex items-center rounded-full p-1 transition duration-300 ${
                                    book.isAvailable ? "bg-orange-500" : "bg-gray-300"
                                }`}
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ${
                                        book.isAvailable ? "translate-x-6" : "translate-x-0"
                                    }`}
                                ></div>
                            </button>
                        </div>
                    </div>

                    {/* 책 정보 */}
                    <h2 className="text-xl font-bold mt-2">{book.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        {book.author} | {book.publisher} | {book.year}년 | {book.copies}권
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        무언가 책에 대한 설명이 필요하다면 여기에...
                    </p>
                    
                    {/* 이미지 목록 */}
                    <div className="flex gap-2 mt-3">
                        <div className="w-24 h-32 bg-gray-300"></div>
                        <div className="w-24 h-32 bg-gray-300"></div>
                        <div className="w-24 h-32 bg-gray-300"></div>
                    </div>
                </div>
            ) : (
                /* 카드형 레이아웃 */
                <div className="p-4 border border-gray-300 rounded-lg shadow-lg w-64">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${book.isAvailable ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-500"}`}>
                        {book.isAvailable ? "대여 가능" : "대여 불가"}
                    </span>

                    <h2 className="text-lg font-bold mt-2">{book.title}</h2>
                    <p className="text-sm text-gray-600">{book.author}</p>

                    {/* 책 이미지 */}
                    <div className="w-full h-40 bg-gray-300 mt-3"></div>
                </div>
            )}
        </div>
    );
};
// ✅ prop-types 설정 추가 (오류 해결)
Book.propTypes = {
    viewMode: PropTypes.string.isRequired, // `viewMode`는 반드시 문자열이어야 함
};
export default Book;
