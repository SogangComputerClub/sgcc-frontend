import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/Login/Login';
import PasswordRecovery from './pages/Login/PasswordRecovery';
import NewPassword from './pages/Login/NewPassword';
import SignUp from './pages/SignUp/SignUp';
import MyPage from './pages/MyPage/MyPage';
import AuthProvider from './contexts/AuthProvider';
import Write from './pages/Board/Write';
import BoardDetail from './pages/Board/BoardDetail';
import LibraryBorrow from './pages/Library/LibraryBorrow';
import LibraryDetail from './pages/Library/LibraryDetail';
import LibraryRegister from './pages/Library/LibraryRegister';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/passwordRecovery" element={<PasswordRecovery />} />
            <Route path="/NewPassword" element={<NewPassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/Write" element={<Write />} />
            <Route path="/BoardDetail" element={<BoardDetail />} />
            <Route path='/LibraryBorrow' element={<LibraryBorrow />} />
            <Route path="/LibraryDetail" element={<LibraryDetail />} />
            <Route path='/LibraryRegister' element={<LibraryRegister />} />

          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
