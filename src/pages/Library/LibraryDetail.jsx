import React from 'react';
import { useLocation } from 'react-router-dom';
//useLocation: returns the current location object
import Book from '../../components/Library/Book';
import { Link } from 'react-router-dom';


const LibraryDetail = () => {
  // Retrieve the state passed via navigation
  const location = useLocation();
  const { bookData } = location.state || {};
  const BookData = { //나중에 벡에서 데이터를 불러올 수 있으면 이부분을 libraryBorrow의 맨 위 두개의 데이터로 변경해야함
    title: "생활코딩! React 리액트 프로그래밍",
    author: "이고잉",
    publisher: "위키북스",
    year: 2023,
    copies: 0,
    description: "생활코딩은 일반인에게 프로그래밍을 알려주는 것을 목적으로 하는 비영리 교육 활동이다. 이 책은 생활코딩에서 제공하는 수업 가운데 리액트와 관련된 수업을 정리한 책이다. 이 수업은 프로그래밍을 처음 시작하는 분들의 눈높이에 맞게 만들어진 강의로서 동영상이나 텍스트만으로도 학습할 수 있게 만들어져 있다.\n이번 개정판에서는 함수형 방식으로 리액트 애플리케이션을 개발하는 방법을 비롯하여 리액트 라우터 돔, 리액트 리덕스, Next.js 등 리액트를 개발하는 데 도움되는 다양한 주제를 다룬다. 이 책을 모두 읽고 나면 리액트를 기반으로 현대적인 웹 애플리케이션 UI를 개발하는 능력을 갖출 수 있을 것이다.",
    isAvailable: true,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRf8v25pgAWnUt_p04D2iJiRWa0Y8Ov5SFjUTf8T2-2kpQF6cdvDDiqL-3kMNSDmKKmG_W9q38PbWWOpLUlhjwql4t9GTfET1dRMVXVTtW6SvWVIjHKaBzUUg&usqp=CAE",
  };
  const handleBorrow = () => {
    console.log(`${BookData.title} 책을 대여하려고 합니다.`);
    // 여기에 대여 요청 로직 추가 가능 (ex: API 호출)
  };


  return (
    <div className="p-3 lg:p-5">
      <Link to="/libraryBorrow" className="absolute top-4 right-6 text-black text-2xl font-bold">
        ✖
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <div className="flex flex-col space-y-4 w-auto max-w-lg h-auto">
          <Book viewMode="list"  {...BookData} />
          <Book viewMode="list"  {...BookData} />
        </div>
        <div className="flex flex-col justify-center items-start">
          {bookData.title ? (
            <Book viewMode="card" {...bookData} />
          ) : (
            <p>No book information available.</p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
          onClick={handleBorrow}
        >
          {BookData.isAvailable ? "대여하기" : "대여 불가"}
        </button>
      </div>
      <div>
      </div>
    </div>

  );
};

export default LibraryDetail;