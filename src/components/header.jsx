import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
    const { isLoggedIn, logout } = useAuth();
    useEffect(() => {
        console.log(`로그인 상태: ${isLoggedIn ? '로그인됨' : '로그아웃됨'}`);
    }, [isLoggedIn]);
    return (
        <header className="bg-black text-white py-4">
            <nav className="container mx-auto flex items-center justify-between px-5">
                {/* ✅ 로고 (왼쪽 정렬) */}
                <Link to="/">
                    <img src="/images/sgcc.png" className="w-16 h-auto" alt="SGCC 로고" />
                </Link>

                {/* ✅ 네비게이션 메뉴 */}
                <ul className="flex space-x-6">
                    <li><Link to="/BoardDetail" className="hover:font-bold">Board</Link></li>
                    <li><Link to="/BoardDetail" className="hover:font-bold">Study</Link></li>
                    <li><Link to="/LibraryBorrow" className="hover:font-bold">Library</Link></li>
                </ul>

                {/* ✅ 로그인 상태에 따른 버튼 */}
                {isLoggedIn ? (
                    <div className="flex space-x-5">
                        <Link to="/mypage">마이페이지</Link>
                        <button onClick={logout} className="bg-red-600 px-4 py-2 rounded">로그아웃</button>
                    </div>
                ) : (
                    <div className="flex space-x-5">
                        <Link to="/signup" className="text-gray-400">회원가입</Link>
                        <Link to="/login" className="text-white">로그인하기</Link>
                    </div>
                )}
            </nav>
        </header>)
}
export default Header;