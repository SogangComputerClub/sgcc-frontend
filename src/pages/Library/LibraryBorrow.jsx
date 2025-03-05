import React, { useState } from 'react';
import Book from '../../components/Library/Book';
import { useNavigate } from 'react-router-dom';
import books from '../../components/Library/BookList';

const LibraryBorrow = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("전체");

  // 책 클릭 시 상세 페이지로 이동
  const handleBookClick = (book) => {
    console.log('Navigating to LibraryDetail with book data');
    navigate('/libraryDetail', { state: { bookData: book } });
  };

  // 등록 버튼 클릭 시 이동
  const handleButtonClick = () => {
    navigate('/libraryRegister');
  };

  // 필터링된 책 목록 (대여 가능 필터 적용)
  const filteredBooks = activeTab === "대여 가능"
    ? books.filter(book => book.isAvailable)
    : books;

  return (
    <div className="relative w-full p-5">
      {/* 도서 목록 제목 */}
      <h1 className="text-2xl font-extrabold flex justify-center mb-4">도서 목록</h1>

      {/* 탭 버튼 (전체 / 대여 가능) */}
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          className={`text-sm w-auto px-3 py-1 rounded-md font-semibold ${activeTab === "전체" ? "text-black" : "text-gray-400"
            }`}
          onClick={() => setActiveTab("전체")}
        >
          전체
        </button>
        <p className='text-gray-400 hidden sm:block'>|</p>
        <button
          className={`text-sm w-auto px-3 py-1 rounded-md font-semibold ${activeTab === "대여 가능" ? "text-black" : "text-gray-400"
            }`}
          onClick={() => setActiveTab("대여 가능")}
        >
          대여 가능
        </button>
      </div>

      {/* 등록 버튼 (우측 하단 고정) */}
      <button
        className="fixed top-28 right-6 md:right-10 px-4 py-2 bg-gray-500 text-white rounded-md shadow-lg hover:bg-gray-700 transition"
        onClick={handleButtonClick}
      >
        등록
      </button>

      {/* 도서 목록 (반응형 적용) */}
      <div className="w-full flex justify-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <Book
              key={index}
              onClick={() => handleBookClick(book)}
              viewMode="list"
              {...book}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryBorrow;
