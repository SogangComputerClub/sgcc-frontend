import { useState } from 'react';

const PasswordRecovery = () => {
    const [id, setId] = useState("");
    const [name, setname] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("비밀번호 변경 시도 : ", { id, name });
    };
    return (
    <div className = "flex min-h-screen items-center justify-center bg-gray-100">
        <div className = "w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">비밀번호 찾기</h2>
            <div className = 'forms'>
                <label className="block text-sm font-medium">아이디</label>
                <input
                    type="id"
                    className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
                <label className="block text-sm font-medium">이름</label>
                <input
                    type="name"
                    className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                />
            </div>
            <div>
            <button
                onSubmit={handleSubmit}
                type="submit"
                className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                제출
            </button>
            </div>
        </div>
    </div>
    );
};

export default PasswordRecovery; 