import React, { useState } from 'react';

const Write = () => {
  const [Title, setTitle] = useState("");
  const [Contents, setContents] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("글쓰기 : ", { Title, Contents });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6 flex space-x-6">
        <div className="w-1/5 bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">목록</h2>
          <ul className="space-y-2">
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">게시글 제목 1</li>
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">게시글 제목 2</li>
            <li className="text-gray-800 hover:text-blue-500 cursor-pointer">게시글 제목 3</li>
          </ul>
        </div>
        <div className="w-3/5">
          <h2 className="text-2xl font-bold mb-4">글쓰기</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">제목</label>
              <input
                type="text"
                placeholder="제목"
                className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">내용</label>
              <textarea
                placeholder="내용"
                className="w-full h-64 p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
                value={Contents}
                onChange={(e) => setContents(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-40 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                저장
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/4 bg-white p-4">
          
        </div>
      </div>
    </div>
  );
};

export default Write;