import React, { useState, useEffect } from "react";
import notion from "../../contexts/NotionContext";
const SideBar = () => {

  useEffect(() => {
    const fetchNotionData = async () => {
      try {
        const recordMap = await notion.getPage("1a8b0a2d89d4808b975bdc2190ae31e2");
        console.log(recordMap);
      } catch (error) {
        console.error("Notion 데이터 가져오기 오류:", error);
      }
    };

    fetchNotionData();
  }, []);

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
      </div>
    </div>
  );
};

export default SideBar;