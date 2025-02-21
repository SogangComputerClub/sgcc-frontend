import React, { useState, useRef } from 'react';
import { NotionAPI } from 'notion-client';
const notion = new NotionAPI();
const recordMap = await notion.getPage("노션 공개용ID");

const Write = () => {
  const [Title, setTitle] = useState("");
  const [Contents, setContents] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("글쓰기 : ", { Title, Contents });
  };
  
  

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center py-2">
      <div className="w-full max-w-7xl bg-gray-200 px-5 flex space-x-3">
        <div className="w-2/9 bg-gray-50 p-4">
          <h2 className="text-lg font-bold mb-4">최신 글</h2>
          <ul className="space-y-2">
            {/*차후에 글 불러오는 방식으로 바꿔야함*/}
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">게시글 제목 1</li>
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">게시글 제목 2</li>
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">게시글 제목 3</li>
          </ul>
        </div>
        <div className="w-5/9 bg-gray-50 p-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-base font-bold text-black">제목</label>
              <input
                type="text"
                placeholder="제목을 입력하세요"
                className="w-full bg-gray-200 p-2 mt-1 border focus:ring focus:ring-blue-200"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-base font-bold text-black">내용</label>
              <textarea
                placeholder="내용을 입력하세요"
                className="w-full h-80 bg-gray-200 p-2 mt-1 border focus:ring focus:ring-blue-200"
                value={Contents}
                onChange={(e) => setContents(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-20 p-2 bg-black text-white rounded-md hover:bg-gray-400 hover:text-gray-800"
              >
                저장
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Write;