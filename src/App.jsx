import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import MainPage from './pages/Main/Main';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import './App.css';

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
            <Route path="/BoardDetail">
              <Route path=":notionPageId" element={<BoardDetail />} />
              <Route index element={<BoardDetail />} />
            </Route>
            <Route path='/LibraryBorrow' element={<LibraryBorrow />} />
            <Route path="/LibraryDetail" element={<LibraryDetail />} />
            <Route path='/LibraryRegister' element={<LibraryRegister />} />
            <Route path='/AboutUsPage' element={<AboutUsPage />} />
            <Route path='/' element={<MainPage />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
