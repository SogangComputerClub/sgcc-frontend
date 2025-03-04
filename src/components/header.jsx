import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi'; // 햄버거 메뉴 아이콘 추가

const Header = () => {
    const { isLoggedIn, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false); // 메뉴 토글 상태

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

                {/* ✅ 데스크탑 메뉴 (md 이상에서 보임) */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link to="/AboutUsPage" className="hover:font-bold">About Us</Link></li>
                    <li><Link to="/BoardDetail" className="hover:font-bold">Board</Link></li>
                    <li><Link to="/BoardDetail" className="hover:font-bold">Study</Link></li>
                    <li><Link to="/LibraryBorrow" className="hover:font-bold">Library</Link></li>
                </ul>

                {/* ✅ 로그인 상태에 따른 버튼 (데스크탑) */}
                <div className="hidden md:flex space-x-5">
                    {isLoggedIn ? (
                        <>
                            <Link to="/mypage">마이페이지</Link>
                            <button onClick={logout} className="bg-red-600 px-4 py-2 rounded">로그아웃</button>
                        </>
                    ) : (
                        <Link to="/login" className="bg-gray-800 text-white px-4 py-2 rounded">Log in</Link>
                    )}
                </div>

                {/* ✅ 모바일 메뉴 버튼 */}
                <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />} {/* 햄버거 아이콘 / 닫기 아이콘 */}
                </button>
            </nav>

            {/* ✅ 모바일 메뉴 (토글) */}
            {menuOpen && (
                <div className="md:hidden bg-black absolute top-16 left-0 w-full shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 py-6">
                        <li><Link to="/AboutUsPage" className="text-white hover:font-bold" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/BoardDetail" className="text-white hover:font-bold" onClick={() => setMenuOpen(false)}>Board</Link></li>
                        <li><Link to="/BoardDetail" className="text-white hover:font-bold" onClick={() => setMenuOpen(false)}>Study</Link></li>
                        <li><Link to="/LibraryBorrow" className="text-white hover:font-bold" onClick={() => setMenuOpen(false)}>Library</Link></li>

                        {isLoggedIn ? (
                            <>
                                <li><Link to="/mypage" onClick={() => setMenuOpen(false)}>마이페이지</Link></li>
                                <li>
                                    <button onClick={logout} className="bg-red-600 px-4 py-2 rounded">로그아웃</button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/login" className="bg-gray-800 text-white px-4 py-2 rounded" onClick={() => setMenuOpen(false)}>Log in</Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
