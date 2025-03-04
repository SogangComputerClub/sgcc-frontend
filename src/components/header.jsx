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
            <nav>
                {isLoggedIn ? (
                    <ul className="flex justify-end space-x-5 px-5">
                        <li>
                            <Link to="/">SGCC</Link>
                        </li>
                        <li>
                            <Link to="/mypage">마이페이지</Link>
                        </li>
                        <li>
                            <button onClick={logout}>로그아웃</button>
                        </li>
                    </ul>
                ) : (
                    <ul className="flex justify-end space-x-5 px-5">
                        <li>
                            <Link to="/">홈으로 돌아가기</Link>
                        </li>
                        <li>
                            <Link to="/signup">회원가입</Link>
                        </li>
                        <li>
                            <Link to="/login">로그인하기</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}
export default Header;