import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Book from '../../components/Library/Book';
import books from '../../components/Library/BookList';

const LibraryDetail = () => {
  const [userData, setUserData] = useState({ name: "", studentId: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const location = useLocation();
  const bookData = location.state?.bookData || {};
  const selectedBook = books.find((book) => book.title === bookData?.title) || {};

  return (
    <div className="flex h-screen w-full">
      {/* 📌 좌측 - 책 목록 */}
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto border-r border-gray-300">
        {books.map((book, index) => (
          <Book key={index} viewMode="list" {...book} />
        ))}
      </div>

      {/* 📌 중앙 - 책 상세 정보 */}
      <div className="w-2/4 p-6 flex flex-col justify-start space-y-4">
        {/* 대여 상태 표시 */}
        <div className="flex justify-between items-center">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="hidden" disabled />
          </label>
        </div>

        {/* 책 제목 및 설명 */}
        <h1 className="text-2xl font-bold">{selectedBook?.title || "책 정보 없음"}</h1>
        <p className="text-sm text-gray-500">{selectedBook?.author} | {selectedBook?.publisher} | {selectedBook?.year}</p>
        <p className="text-gray-600">{selectedBook?.description || "책 설명이 없습니다."}</p>

        {/* 책 이미지 */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {selectedBook?.image ? (
            <img src={selectedBook.image} alt="책 이미지" className="w-[300px] h-[300px] rounded-lg shadow-md" />
          ) : (
            <p className="text-gray-500">책 이미지가 없습니다.</p>
          )}
        </div>
      </div>

      {/* 📌 우측 - 사용자 정보 입력 및 대여 버튼 (위치 수정됨) */}
      <div className="w-1/4 p-6 border-l border-gray-300 flex flex-col justify-start space-y-6">
        {/* 닫기 버튼 */}
        <Link to="/libraryBorrow" className="absolute top-17 right-6 text-gray-600 text-2xl font-bold">
          ✖
        </Link>

        {/* 사용자 정보 입력란 */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700">
              이름<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
              placeholder="이름을 입력하세요"
            />
          </div>
          <div>
            <label htmlFor="studentId" className="block font-semibold text-gray-700">
              학번<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={userData.studentId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
              placeholder="학번을 입력하세요"
            />
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/libraryBorrow">
              <button
                type="button"
                className="bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-md shadow-md transition-all duration-300"

              >
                대여하기
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LibraryDetail;
