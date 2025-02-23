import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotionRenderer } from 'react-notion-x';
import "prismjs/themes/prism-tomorrow.css";

const BoardDetail = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState({ name: '', content: '' });
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchNotionData = async () => {
            try {
                const NOTION_PAGE_ID = '1a1bfb388fbc80eb901ed673815b9764';
                const res = await fetch(`http://localhost:5000/notion/${NOTION_PAGE_ID}`);
                if (!res.ok) throw new Error("Notion 데이터 로드 실패");
                const data = await res.json();

                console.log("Notion 데이터:", data);
                setResponse(data);
                setLoading(false);
            } catch (error) {
                console.error("Notion 데이터 가져오기 오류:", error);
                setLoading(false);
            }
        };

        fetchNotionData();
    }, []);

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setNewComment((prev) => ({ ...prev, [name]: value }));
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newComment),
            });

            if (!res.ok) throw new Error("댓글 등록 실패");

            const data = await res.json();
            setComments((prev) => [...prev, data]);
            setNewComment({ name: '', content: '' });
        } catch (error) {
            console.error("댓글 등록 오류:", error);
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch("http://localhost:5000/comments");
                if (!res.ok) throw new Error("댓글 불러오기 실패");

                const data = await res.json();
                setComments(data);
            } catch (error) {
                console.error("댓글 불러오기 오류:", error);
            }
        };

        fetchComments();
    }, []);

    return (
        <div className="h-auto bg-gray-100 flex justify-center py-3">
            <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6 flex space-x-6">
                <div className="w-1/4 bg-gray-50 p-4 rounded-lg border">
                    <h2 className="text-lg font-semibold mb-4">목록</h2>
                    <ul className="space-y-2">
                        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">
                            <Link to="/BoardDetail/ID1">게시글 제목 1</Link>
                        </li>
                        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">
                            <Link to="/BoardDetail/ID2">게시글 제목 2</Link>
                        </li>
                        <li className="text-gray-800 hover:text-blue-500 cursor-pointer">
                            <Link to="/BoardDetail/ID3">게시글 제목 3</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-1/2">
                    {loading ? (
                        <div>Loading post...</div>
                    ) : response ? (
                        <NotionRenderer blockMap={response} fullPage={true} />
                    ) : (
                        <div>게시글을 불러올 수 없습니다.</div>
                    )}
                </div>

                <div className="w-1/4 bg-gray-50 p-4 rounded-lg border">
                    <h2 className="text-lg font-semibold mb-4">댓글 입력</h2>
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">이름</label>
                            <input
                                type="text"
                                name="name"
                                value={newComment.name}
                                onChange={handleCommentChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">내용</label>
                            <textarea
                                name="content"
                                value={newComment.content}
                                onChange={handleCommentChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700">
                                등록
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-4">댓글 목록</h2>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} className="mb-2 p-2 border rounded bg-white shadow-sm">
                                    <p className="text-sm font-bold">{comment.name}</p>
                                    <p className="text-sm">{comment.content}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">댓글이 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardDetail;