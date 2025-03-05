import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NotionRenderer } from 'react-notion-x';
import notion from '../../contexts/NotionContext';
import "prismjs/themes/prism-tomorrow.css";

const Study = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const { notionPageId = '1a8b0a2d89d48004bc18f3c6f1273748' } = useParams();

    useEffect(() => {
        const fetchNotionData = async () => {
            try {
                const recordMap = await notion.getPage(notionPageId);
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
    }, [notionPageId]);

    // This function handles mapping Notion page IDs to our app's URL routes
    const mapPageUrl = (pageId) => {
        // Remove any hyphens and query parameters from the pageId if present
        const cleanPageId = pageId.split('?')[0].replace(/-/g, '');
        return `/Study/${cleanPageId}`;
    };

    return (
        <div className="h-auto bg-gray-100 flex justify-center py-3">
            <div className="w-192 max-w-7xl bg-white rounded-lg shadow-md p-6 flex space-x-6 justify-items-center">

                {loading ? (
                    <div>Loading post...</div>
                ) : response ? (
                    <NotionRenderer
                        recordMap={response}
                        fullPage={true}
                        mapPageUrl={mapPageUrl}
                    />
                ) : (
                    <div>게시글을 불러올 수 없습니다.</div>
                )}
            </div>
        </div>
    );
};

export default Study;