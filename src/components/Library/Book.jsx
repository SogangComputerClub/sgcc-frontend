import PropTypes from "prop-types";

const Book = ({ viewMode, onClick, title, author, publisher, year, copies, description, isAvailable, image }) => {
  return (
    <div>
      {viewMode === "card" ? (
        <div
          className="p-6 rounded-lg min-w-[900px] h-[500px] flex flex-col bg-white cursor-pointer"
          onClick={() => {
            console.log("Book clicked!");
            if (onClick) onClick();
          }}
        >
          {/* 대여 가능/불가 태그 스타일 변경 */}
          <div className="flex justify-between items-center mb-4">
            <span
              className={`text-sm font-bold px-3 py-1 rounded-full ${isAvailable ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
            >
              {isAvailable ? "대여 가능" : "대여 불가"}
            </span>
          </div>

          {/* 책 제목과 설명 스타일 변경 */}
          <h2 className="text-lg font-bold text-gray-800 truncate w-full">
            {title}
          </h2>          <p className="text-sm text-gray-600">{author}  |  {publisher}  |  {year}년  |  {copies}권</p>
          <p className="text-sm text-gray-500 mt-2">
            {description && description.length > 60 ? description.substring(0, 60) + "..." : description}
          </p>

          {/* 책 이미지 스타일 변경 */}
          {image ? (
            <img src={image} alt={title} className="w-60 h-100 object-cover rounded-md mt-3" />
          ) : (
            <div className="w-full h-40 bg-gray-300 rounded-md mt-3"></div>
          )}
        </div>
      ) : (
        <div
          className="p-5 border cursor-pointer border-gray-300 rounded-lg w-64"
          onClick={() => {
            console.log("Book clicked!");
            if (onClick) onClick();
          }}
        >
          <span
            className={`text-sm font-bold px-3 py-1 rounded-full ${isAvailable ? "bg-gray-800 text-white" : "bg-red-700 text-white"
              }`}
          >
            {isAvailable ? "대여 가능" : "대여 불가"}
          </span>

          <h2 className="text-lg font-bold mt-2">{title}</h2>
          <p className="text-sm text-gray-600">{author}</p>

          {/* 책 이미지 */}
          {image ? (
            <img src={image} alt={title} className="w-full h-40 object-cover mt-3" />
          ) : (
            <div className="w-full h-40 bg-gray-300 mt-3"></div>
          )}
        </div>
      )}
    </div>
  );
};

Book.propTypes = {
  viewMode: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  copies: PropTypes.number.isRequired,
  description: PropTypes.string,  // ✅ 수정됨 (오타 해결)
  isAvailable: PropTypes.bool.isRequired,
  image: PropTypes.string,
};

export default Book;
