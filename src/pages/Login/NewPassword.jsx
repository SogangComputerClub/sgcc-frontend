import { useState } from 'react';

const NewPassword = () => {
    const [pw, setpw] = useState("");
    const [pwcheck, setpwcheck] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pw || !pwcheck) {
          setError("비밀번호와 비밀번호 확인을 모두 입력해주세요.");
          return;
        }
        if (pw !== pwcheck) {
          setError("비밀번호가 일치하지 않습니다.");
          return;
        }
        setError("");
    };
    
    return (
        <div className = "flex min-h-screen items-center justify-center bg-gray-100">
            <div className = "w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center">비밀번호 변경</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className = 'forms'>
                    <label className="block text-sm font-medium">새 비밀번호</label>
                    <input
                        type="password"
                        className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
                        value={pw}
                        onChange={(e) => setpw(e.target.value)}
                        required
                    />
                    <label className="block text-sm font-medium">비밀번호 확인</label>
                    <input
                        type="password"
                        className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
                        value={pwcheck}
                        onChange={(e) => setpwcheck(e.target.value)}
                        required
                    />
                </div>
                {error && (
                    <div className="text-red-500 text-sm mt-2">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    비밀번호 변경
                </button>
            </form>
            </div>
        </div>
    )
}

export default NewPassword;