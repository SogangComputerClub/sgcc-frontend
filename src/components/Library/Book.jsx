import PropTypes from "prop-types";

const Book = ({ viewMode, onClick, title, author, publisher, year, copies, discription, isAvailable, image }) => {
//지금은 admin과 일반 사용자를 구분하는 코드가 없으므로 그냥 토글 버튼을 unable시킴 -> admin일 때는 이 코드 살리면 됨
  // const toggleAvailability = () => {
  //   // 예시: 외부에서 관리하는 상태 변경 함수(onToggle)를 호출하거나, 로컬에서 처리할 경우
  //   console.log("Toggle availability clicked");
  // };
  
  return (
    <div>
  {viewMode === "card" ? (
    <div
      className="p-6 border border-gray-300 rounded-lg shadow-lg w-80 flex flex-col"
      onClick={() => {
        console.log("Book clicked!");
        if (onClick) onClick();
      }}
    >
      {/* Availability Badge */}
      <div className="flex justify-between items-center mb-4">
        <span
          className={`text-sm font-bold px-3 py-1 rounded-full ${
            isAvailable ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {isAvailable ? "대여 가능" : "대여 불가"}
        </span>
      </div>

      {/* Book Information */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">{author} | {publisher} | {year}년 | {copies}권</p>
      <p className="text-sm text-gray-500 mb-4">
        {discription.length > 60 ? discription.substring(0, 60) + "..." : discription}
      </p>

      {/* Book Image */}
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      ) : (
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
      )}

      {/* Action Button */}
      <button
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => {
          console.log("Borrow clicked!");
          if (onClick) onClick();
        }}
      >
        {isAvailable ? "대여하기" : "대여 불가"}
      </button>
    </div>
  ) : (
        <div
          className="p-5 border cursor-pointer border-gray-300 rounded-lg shadow-lg w-64"
          onClick={() => {
            console.log("Book clicked!");
            if (onClick) onClick();
          }}
        >
          <span
            className={`text-sm font-bold px-3 py-1 rounded-full ${
              isAvailable ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-500"
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
  discription: PropTypes.string,

  isAvailable: PropTypes.bool.isRequired,
  image: PropTypes.string,
};

export default Book;
