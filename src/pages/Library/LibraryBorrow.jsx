import React, { useState } from 'react';
import Book from '../../components/Library/Book';
import { useNavigate } from 'react-router-dom';

// 📌 더미 데이터 (백엔드 연결 전, 12개 책 정보)
const bookData = [
    {
        title: "자바스크립트 입문",
        author: "홍길동",
        publisher: "출판사 A",
        year: 2021,
        copies: 3,
        discription:"aa",
        isAvailable: true,
      },
      {
        title: "리액트 정복",
        author: "이순신",
        publisher: "출판사 B",
        year: 2022,
        copies: 2,
        discription:"aa",
        isAvailable: true,
      },
      {
        title: "타입스크립트 시작하기",
        author: "김철수",
        publisher: "출판사 C",
        year: 2023,
        copies: 1,discription:"aa",
        isAvailable: true,
      },
      {
        title: "웹 개발의 모든 것",
        author: "박영희",
        publisher: "출판사 D",
        year: 2020,
        copies: 4,discription:"aa",
        isAvailable: true,
      },
      {
        title: "자바스크립트 입문",
        author: "홍길동",
        publisher: "출판사 A",
        year: 2021,
        copies: 3,discription:"aa",
        isAvailable: false,
      },
      {
        title: "리액트 정복",
        author: "이순신",
        publisher: "출판사 B",
        year: 2022,
        copies: 2,discription:"aa",
        isAvailable: false,
      },
      {
        title: "타입스크립트 시작하기",
        author: "김철수",
        publisher: "출판사 C",
        year: 2023,
        copies: 1,discription:"aa",
        isAvailable: false,
      },
      {
        title: "웹 개발의 모든 것",
        author: "박영희",
        publisher: "출판사 D",
        year: 2020,
        copies: 4,discription:"aa",
        isAvailable: false,
      },
      {
        title: "자바스크립트 입문",
        author: "홍길동",
        publisher: "출판사 A",
        year: 2021,
        copies: 3,discription:"aa",
        isAvailable: false,
      },
      {
        title: "리액트 정복",
        author: "이순신",
        publisher: "출판사 B",
        year: 2022,
        copies: 2,discription:"aa",
        isAvailable: false,
      },
      {
        title: "타입스크립트 시작하기",
        author: "김철수",
        publisher: "출판사 C",
        year: 2023,
        copies: 1,discription:"aa",
        isAvailable: false,
      },
      {
        title: "웹 개발의 모든 것",
        author: "박영희",
        publisher: "출판사 D",
        year: 2020,
        copies: 4,discription:"aa",
        isAvailable: false,
      },


];

//라이브러리 화면 처음 들어갔을 때 보이는 화면
//list형의 책 정보들이 4개씩 보이게 해야함 - 벡이랑 연결하기 전에는 12개만 만들어 놓자
const LibraryBorrow = () => {
    const navigate = useNavigate();
    const handleBookClick = (book) => {
        console.log('Navigating to LibraryDetail with book data');
        navigate('/libraryDetail', { state:  { bookData:book }});
      };
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


            <div className="w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5">
                <div className="grid grid-cols-4 gap-4">
                    {bookData.map((book, index) => (
                        // Book 컴포넌트를 반복문을 사용하여 렌더링합니다.
                        // viewMode는 "list"로 설정하여 리스트 형태로 보여주며,
                        // ...book을 사용해 book 객체에 담긴 title, author, publisher, year, copies, isAvailable 등 필요한 props를 전달합니다.
                    
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
