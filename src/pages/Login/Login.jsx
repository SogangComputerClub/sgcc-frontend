import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", { id, password });
    navigate('/Main')
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* 아이디 입력 필드 */}
          <div>
            <label className="block text-sm font-medium text-gray-300">아이디</label>
            <input
              type="text"
              className="w-full p-3 mt-1 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring focus:ring-red-500"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>

          {/* 비밀번호 입력 필드 */}
          <div>
            <label className="block text-sm font-medium text-gray-300">비밀번호</label>
            <input
              type="password"
              className="w-full p-3 mt-1 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring focus:ring-red-500"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full mt-4 p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            로그인
          </button>
        </form>

        {/* 추가 링크 */}
        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <Link to="/PasswordRecovery" className="hover:underline">비밀번호 찾기</Link>
          <span className="text-gray-500">|</span>
          <Link to="/SignUp" className="hover:underline">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
