import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../components/Library/Book';
import books from '../../components/Library/BookList';

const LibraryRegister = () => {
    const [errors, setErrors] = useState({});
    const [selectedImages, setSelectedImages] = useState([]);

    // 입력할 책 정보 (초기값)
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        publisher: "",
        year: "",
        copies: "",
        description: "",
        isAvailable: true,
        image: "",
    });

    // 입력 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
            ...bookData,
            [name]: value,
        });
    };

    // 이미지 업로드 핸들러
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map((file) => URL.createObjectURL(file));
        setSelectedImages(imageUrls);
    };

    // 필수 입력 검증
    const validateForm = () => {
        const newErrors = {};
        if (!bookData.title) newErrors.title = "책 제목을 입력해주세요.";
        if (!bookData.author) newErrors.author = "저자를 입력해주세요.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white p-8">
            {/* 닫기 버튼 */}
            <Link to="/libraryBorrow" className="absolute top-4 right-6 text-black text-2xl font-bold">
                ✖
            </Link>

            <div className="flex flex-col space-y-4 w-auto max-w-lg h-[600px] overflow-y-auto p-4">
                {/* BookList에서 가져온 책 데이터 렌더링 */}
                {books.map((book, index) => (
                    <Book key={index} viewMode="list" {...book} />
                ))}
            </div>

            <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-6">도서 등록</h2>

                {/* 입력 폼 */}
                <div>
                    <div>
                        <label htmlFor="title" className="block font-semibold text-gray-700">
                            책 제목*
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={bookData.title}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            required
                            placeholder="책 제목을 입력하세요"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label htmlFor="author" className="block font-semibold text-gray-700">
                            저자*
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={bookData.author}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            required
                            placeholder="저자를 입력하세요"
                        />
                        {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
                    </div>

                    <div>
                        <label htmlFor="year" className="block font-semibold text-gray-700">
                            발행 연도 / 판 수
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="number"
                                id="year"
                                name="year"
                                value={bookData.year}
                                onChange={handleChange}
                                placeholder="발행 연도"
                                min="1900"
                                max="2100"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            />
                            <input
                                type="number"
                                id="copies"
                                name="copies"
                                value={bookData.copies}
                                onChange={handleChange}
                                placeholder="판 수"
                                min="0"
                                max="100"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block font-semibold text-gray-700">
                            설명
                        </label>
                        
                        <textarea
                            id="description"
                            name="description"
                            value={bookData.description}
                            onChange={handleChange}
                            placeholder="설명을 입력하세요"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 h-20"
                        />
                    </div>

                    {/* 이미지 업로드 */}
                    <label className="block font-semibold text-gray-700">이미지</label>
                    <div className="grid grid-cols-4 gap-2">
                        {selectedImages.length > 0 ? (
                            selectedImages.map((image, index) => (
                                <img key={index} src={image} alt="Uploaded Preview" className="w-20 h-20 object-cover rounded-lg border" />
                            ))
                        ) : (
                            <span className="text-gray-400 text-sm">이미지를 추가하세요</span>
                        )}
                    </div>

                    <div className="flex justify-start mt-2">
                        <input type="file" accept="image/*" multiple onChange={handleImageChange} className="hidden" id="fileUpload" />
                        <label htmlFor="fileUpload" className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow-md">
                            파일 선택
                        </label>
                    </div>

                    {/* 등록 버튼 */}
                    <div className="flex justify-center mt-6">
                        <Link to="/libraryBorrow">
                            <button
                                type="button"
                                className="bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-md shadow-md transition-all duration-300"
                                onClick={validateForm}
                            >
                                등록하기
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryRegister;
