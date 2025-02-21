import { useState } from 'react';
import { Link } from "react-router-dom";
import Book from '../../components/Library/Book';
// 📌 더미 데이터 (백엔드 연결 전, 12개 책 정보)
const bookData = Array(12).fill({
    title: "이것은 책의 제목입니다",
    author: "저자",
    publisher: "출판사",
    year: 2025,
    copies: 1,
    isAvailable: true,
});
//라이브러리 화면 처음 들어갔을 때 보이는 화면
//list형의 책 정보들이 4개씩 보이게 해야함 - 벡이랑 연결하기 전에는 12개만 만들어 놓자
const LibraryBorrow = () => {
    const [activeTab, setActiveTab] = useState("전체");

    return (
        <div className="relative w-full p-5">
            <h1 className="text-2xl font-extrabold flex justify-center mb-4 ">도서 목록</h1>

            <div className="flex justify-center gap-3">
                <button
                    className={`text-sm w-auto px-3 py-1 rounded-md font-semibold ${activeTab === "전체" ? "text-black" : "text-gray-400"
                        }`}
                    onClick={() => setActiveTab("전체")}
                >
                    전체
                </button>
                <p className='text-gray-400'>|</p>
                <button
                    className={`text-sm w-auto px-3 py-1 rounded-md font-semibold ${activeTab === "대여 가능" ? "text-black" : "text-gray-400"
                        }`}
                    onClick={() => setActiveTab("대여 가능")}
                >
                    대여 가능
                </button>
            </div>

            <Link to="/LibraryRegister" className="w-full max-w-7xl flex justify-end mt-2">
                <button className="min-w-[64px] py-2 px-4 bg-gray-700 text-white text-sm rounded-md hover:bg-gray-400 hover:text-gray-300">
                    등록
                </button>
            </Link>

            <div className="w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5">
                <div className="grid grid-cols-4 gap-4">
                    {bookData.map((book, index) => (
                        <Book key={index} viewMode="card" {...book} />
                    ))}
                </div>
            </div></div>
    );
};

export default LibraryBorrow;
