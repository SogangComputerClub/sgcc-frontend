import React, { useState, useEffect } from "react";
import { NotionAPI } from "notion-client";

const Write = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchNotionData = async () => {
      try {
        const notion = new NotionAPI();
        const recordMap = await notion.getPage("1a1bfb388fbc80eb901ed673815b9764?pvs=4");

        // 예제: 최근 게시글 제목 리스트 추출 (데이터 구조에 따라 다름)
        const blockIds = Object.keys(recordMap.block);
        const posts = blockIds
          .map((id) => recordMap.block[id]?.value?.properties?.title?.[0]?.[0])
          .filter(Boolean)
          .slice(0, 5); // 최신 5개만 가져오기

        setLatestPosts(posts);
      } catch (error) {
        console.error("Notion 데이터 가져오기 오류:", error);
      }
    };

    fetchNotionData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("글쓰기:", { title, contents });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center py-2">
      <div className="w-full max-w-7xl bg-gray-200 px-5 flex space-x-3">
        {/* 최신 글 목록 */}
        <div className="w-2/9 bg-gray-50 p-4">
          <h2 className="text-lg font-bold mb-4">최신 글</h2>
          <ul className="space-y-2">
            {latestPosts.length > 0 ? (
              latestPosts.map((post, index) => (
                <li key={index} className="text-gray-800 hover:text-blue-500 cursor-pointer">
                  {post}
                </li>
              ))
            ) : (
              <li className="text-gray-500">불러오는 중...</li>
            )}
          </ul>
        </div>

        {/* 글쓰기 폼 */}
        <div className="w-5/9 bg-gray-50 p-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-base font-bold text-black">제목</label>
              <input
                type="text"
                placeholder="제목을 입력하세요"
                className="w-full bg-gray-200 p-2 mt-1 border focus:ring focus:ring-blue-200"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-base font-bold text-black">내용</label>
              <textarea
                placeholder="내용을 입력하세요"
                className="w-full h-80 bg-gray-200 p-2 mt-1 border focus:ring focus:ring-blue-200"
                value={contents}
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