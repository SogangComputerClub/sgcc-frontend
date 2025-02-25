import React,{useState} from 'react';
import Book from '../../components/Library/Book';
import { Link } from 'react-router-dom';


const LibraryRegister = () => {
    const [errors, setErrors] = useState({});

    const [bookData,setBookData] = useState({
        title: "",
        author: "",
        publisher: "",
        year: 0,
        copies: 0,
        description:'',
        isAvailable: true,
        image: "https://example.com/js-book.jpg",
      });
      const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {//e:이벤트 헨들러로 변화하는 값을 담는 역할할
        const { name, value } = e.target; //e.target.name과 e.target.value를 개별 변수로 쉽게 가져오게 하려는 코드
        setBookData({
            ...bookData,//기존의 data를 모두 복사하는 문법-변경되는 특정 값을 업데이트할 수 있음 shallow copy는 아니다
            [name]: value,//name속성에 해당하는 값을 value로 변경
        });
    }
    const newErrors = {}; //useState에서는 직접 Errors를 수정할 수 없기에 newErrors를 통해 Error가 있는지를 받는다
    if (!bookData.title) newErrors.title = "책제목을 입력해주세요.";
    if (!bookData.author) newErrors.author = "지은이를 입력해주세요.";


  // When the Book component in card format is clicked,
  // this function navigates to the LibraryDetail page and passes bookData.

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

        <div className="w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5">
                <label htmlFor="title">책제목</label>
                <input type="text" id="title" name="title" value={bookData.title} onChange={handleChange} required />
                {errors.title && <p className="error">{errors.title}</p>}
        </div>
        <div className="w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5">
            <label htmlFor="author">저자</label>
            <input type="author" id="author" name="author" value={bookData.author} onChange={handleChange} required />
            {errors.author && <p className="error">{errors.author}</p>}
        </div>
        <div className="w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5">
            <label htmlFor="title">출판사</label>
            <input type="text" id="publisher" name="publisher" value={bookData.publisher} onChange={handleChange} />
            {errors.publisher && <p className="error">{errors.publisher}</p>}
        </div>          
        <div className="w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5">
            <label htmlFor="title">발행 연도</label>
            <input type="number" id="year" name="year" value={bookData.year} onChange={handleChange} min="1900" max="2100" />
            {errors.year && <p className="error">{errors.year}</p>}
        </div>   
        <div className="w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5">
            <label htmlFor="copies">판 수</label>
            <input type="number" id="copies" name="copies" value={bookData.copies} onChange={handleChange} />
            {errors.copies && <p className="error">{errors.copies}</p>}
        </div>
        <div className="w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5">
            <label htmlFor="tidescriptiontle">설명</label>
            <input type="text" id="description" name="description" value={bookData.description} onChange={handleChange} />
            {errors.description && <p className="error">{errors.description}</p>}
        </div>          

        <Link to="/libraryBorrow">
            <button type="button">등록하기</button>
        </Link>
    </div>

  );
};

export default LibraryRegister;
