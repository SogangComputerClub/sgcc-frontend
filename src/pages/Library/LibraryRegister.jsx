import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../components/Library/Book';


const LibraryRegister = () => {
    const [errors, setErrors] = useState({});
    const [selectedImages, setSelectedImages] = useState([]);
    const BookData = { //나중에 벡에서 데이터를 불러올 수 있으면 이부분을 libraryBorrow의 맨 위 두개의 데이터로 변경해야함
        title: "생활코딩! React 리액트 프로그래밍",
        author: "이고잉",
        publisher: "위키북스",
        year: 2023,
        copies: 0,
        description: "생활코딩은 일반인에게 프로그래밍을 알려주는 것을 목적으로 하는 비영리 교육 활동이다. 이 책은 생활코딩에서 제공하는 수업 가운데 리액트와 관련된 수업을 정리한 책이다. 이 수업은 프로그래밍을 처음 시작하는 분들의 눈높이에 맞게 만들어진 강의로서 동영상이나 텍스트만으로도 학습할 수 있게 만들어져 있다.\n이번 개정판에서는 함수형 방식으로 리액트 애플리케이션을 개발하는 방법을 비롯하여 리액트 라우터 돔, 리액트 리덕스, Next.js 등 리액트를 개발하는 데 도움되는 다양한 주제를 다룬다. 이 책을 모두 읽고 나면 리액트를 기반으로 현대적인 웹 애플리케이션 UI를 개발하는 능력을 갖출 수 있을 것이다.",
        isAvailable: true,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRf8v25pgAWnUt_p04D2iJiRWa0Y8Ov5SFjUTf8T2-2kpQF6cdvDDiqL-3kMNSDmKKmG_W9q38PbWWOpLUlhjwql4t9GTfET1dRMVXVTtW6SvWVIjHKaBzUUg&usqp=CAE",
    };

    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        publisher: "",
        year: "",
        copies: "",
        description: '',
        isAvailable: true,
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
            ...bookData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImages(URL.createObjectURL(file));
        }
    };

    const newErrors = {};
    if (!bookData.title) newErrors.title = "책 제목을 입력해주세요.";
    if (!bookData.author) newErrors.author = "저자를 입력해주세요.";

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white p-8">
            {/* 닫기 버튼 */}
            <Link to="/libraryBorrow" className="absolute top-4 right-6 text-black text-2xl font-bold">
                ✖
            </Link>
            <div className="flex flex-col space-y-4 w-auto max-w-lg h-auto">
                <Book viewMode="list"  {...BookData} />
                <Book viewMode="list"  {...BookData} />
            </div>

            <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-6">도서 등록</h2>

                <div className="grid grid-cols-2 gap-10">
                    {/* 📋 입력 폼 (왼쪽) */}
                    <div className="space-y-4">
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
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 h-20"
                            />
                        </div>
                    </div>

                    {/* 📷 이미지 업로드 및 등록 버튼 (오른쪽) */}
                    <div className="space-y-4">
                        <label className="block font-semibold text-gray-700">이미지</label>
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="w-20 h-20 border border-gray-300 rounded-lg flex items-center justify-center">
                                    {selectedImages[index] ? (
                                        <img src={selectedImages[index]} alt={`Uploaded Preview ${index}`} className="w-full h-full object-cover rounded-lg" />
                                    ) : (
                                        <span className="text-gray-400 text-sm">+</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* 파일 선택 버튼 */}
                        <div className="flex justify-start mt-2">
                            <input type="file" accept="image/*" multiple onChange={handleImageChange} className="hidden" id="fileUpload" />
                            <label htmlFor="fileUpload" className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow-md">
                                파일 선택
                            </label>
                        </div>

                        {/* 오른쪽 정렬된 등록 버튼 */}
                        <div className="flex justify-end mt-6">
                            <Link to="/libraryBorrow">
                                <button
                                    type="button"
                                    className="bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-md shadow-md transition-all duration-300"
                                >
                                    등록하기
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryRegister;
