import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotionRenderer } from 'react-notion-x';
import notion from '../../contexts/NotionContext';
import "prismjs/themes/prism-tomorrow.css";

const BoardDetail = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState({ name: '', content: '' });
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchNotionData = async () => {
            try {
                const NOTION_PAGE_ID = '1a8b0a2d89d4804b91bff7083ce3daff';
                const recordMap = await notion.getPage(NOTION_PAGE_ID);
                const data = recordMap;
                console.log(data);

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
                        <NotionRenderer recordMap={response} fullPage={true} />
                    ) : (
                        <div>게시글을 불러올 수 없습니다.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BoardDetail;