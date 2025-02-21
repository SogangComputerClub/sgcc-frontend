import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BoardDetail = () => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ name: '', content: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postResponse = await axios.get('/api/post/1');
                const commentResponse = await axios.get('/api/post/1/comments');
                setPost(postResponse.data);
                setComments(commentResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setNewComment((prev) => ({ ...prev, [name]: value }));
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/post/1/comments', newComment);
            setComments((prev) => [...prev, response.data]);
            setNewComment({ name: '', content: '' });
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    return (
        <div className="h-auto bg-gray-100 flex justify-center py-3">
          <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6 flex space-x-6">
            <div className="w-2/9 bg-gray-50 p-4 rounded-lg border">
              <h2 className="text-lg font-semibold mb-4">목록</h2>
              <ul className="space-y-2">
                <li className="text-gray-800 hover:text-blue-500 cursor-pointer"><Link to="/BoardDetail">게시글 제목 1</Link></li>
                <li className="text-gray-800 hover:text-blue-500 cursor-pointer"><Link to="/BoardDetail">게시글 제목 2</Link></li>
                <li className="text-gray-800 hover:text-blue-500 cursor-pointer"><Link to="/BoardDetail">게시글 제목 3</Link></li>
              </ul>
            </div>
            
            <div className="w-7/18">
              {post ? (
                <>
                  <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                  <div className="text-sm text-gray-600 mb-4">
                    {post.author} | {new Date(post.date).toLocaleString()} | 조회수 {post.views}
                  </div>
                  <div className="mb-4">
                    <p className="whitespace-pre-wrap">{post.content}</p>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-200 h-24"></div>
                    <div className="bg-gray-200 h-24"></div>
                    <div className="bg-gray-200 h-24"></div>
                    <div className="bg-gray-200 h-24"></div>
                  </div>
                </>
              ) : (
                <div>Loading post...</div>
              )}
            </div>
            <div className="w-7/18 bg-gray-50 p-4 rounded-lg border">
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
                  <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-black">
                    등록
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default BoardDetail;