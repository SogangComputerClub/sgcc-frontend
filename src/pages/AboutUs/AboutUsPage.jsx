import React, { useState, useEffect } from "react";

const months = [
  "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
];

const events = {
  "2025": {
    "2월": [{ date: "02.24 - 03.09", title: "신입부원 모집", details: "새학기 준비" }],
    "3월": [{ date: "02.24 - 03.09", title: "신입부원 모집", details: "새학기 준비" }
      , { date: "03.01 - 03.14", title: "회비 납부 기간", details: "새학기 준비" }
      , { date: "03.03 - 03.12", title: "개강총회 수요조사", details: "새학기 준비" }
      , { date: "03.04", title: "개강", details: "학교 공식 일정" }
      , { date: "03.06 - 03.07", title: "동아리 거리제", details: "학교 공식 일정" }
      , { date: "03.10", title: "신입부원 합격 발표", details: "새학기 준비" }
      , { date: "03.10 - 03.15", title: "세션 및 스터디 수요조사", details: "세션 및 스터디" }
      , { date: "03.14", title: "개강총회", details: "개강총회" }

      , { date: "03.17", title: "세션 및 스터디 시작", details: "세션 및 스터디" }
    ]
  },
  "2026": {
    "3월": [{ date: "03.10 - 03.12", title: "해커톤", details: "예정" }]
  }
};

function Sidebar({ isOpen, toggleSidebar }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleSidebar]);

  return (
    <>
      {/* 오버레이 (모바일에서만 보임) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={`
          fixed top-0 left-0 h-full
          bg-gray-800 text-white p-5
          transition-transform duration-300 z-40
          flex flex-col items-start
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:h-auto
          w-[70%] sm:w-[50%] md:w-48
        `}
      >
        <h2 className="text-lg font-semibold w-full text-center">Contents</h2>
        <nav className="mt-4 w-full flex flex-col items-center">
          <p className="py-2 cursor-pointer hover:text-gray-300">인사말</p>
          <p className="py-2 cursor-pointer hover:text-gray-300">캘린더</p>
        </nav>

        {/* 닫기 버튼 (모바일) */}
        <button
          className="md:hidden mt-4 text-gray-300 text-sm underline"
          onClick={toggleSidebar}
        >
          닫기
        </button>
      </aside>
    </>
  );
}

function YearSelector({ year, onChange }) {
  return (
    <div className="flex justify-center items-center my-6 ">
      <button onClick={() => onChange(-1)} className="text-2xl text-gray-500 font-bold">
        &lt;
      </button>
      <span className="text-3xl font-bold mx-4">{year}</span>
      <button onClick={() => onChange(1)} className="text-2xl text-gray-500 font-bold">
        &gt;
      </button>
    </div>
  );
}

function CalendarGrid({ onSelectMonth, selectedMonth }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
      {months.map((month, index) => (
        <button
          key={index}
          onClick={() => onSelectMonth(month)}
          className={`
            w-full py-6 bg-gray-700 text-white rounded-xl text-lg font-bold
            hover:bg-gray-600 transition-colors
            ${selectedMonth === month ? "bg-gray-900 ring-4 ring-blue-500" : ""}
          `}
        >
          {month}
        </button>
      ))}
    </div>
  );
}

function EventBox({ selectedMonth, year }) {
  const yearEvents = events[year] || {};
  const monthEvents = selectedMonth ? yearEvents[selectedMonth] : null;

  return (
    <div className="w-96 bg-gray-700 text-white p-4 rounded-xl mx-auto mt-6">
      <h2 className={`text-lg font-bold ${selectedMonth ? "" : "text-red-500"}`}>
        {selectedMonth ? `${year}년 ${selectedMonth}` : "월을 선택하세요"}
      </h2>
      {selectedMonth && monthEvents ? (
        monthEvents.map((event, idx) => (
          <div key={idx} className="mt-2 p-2 bg-gray-800 rounded">
            <p className="text-sm text-gray-400">{event.date}</p>
            <p className="font-semibold">{event.title}</p>
            <p className="text-xs text-gray-500">{event.details}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center py-2">등록된 일정이 없습니다.</p>
      )}
    </div>
  );
}

export default function AboutUsPage() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [year, setYear] = useState(2025);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-black flex flex-1 relative overflow-x-hidden">
      {/* 모바일: 사이드바가 닫혔을 때만 햄버거 버튼 보임 */}
      {!sidebarOpen && (
        <button
          className="md:hidden w-12 h-12 bg-gray-800 text-white fixed top-20 left-4 z-50 rounded-md flex items-center justify-center"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <main className="flex-1 flex flex-col text-white items-center justify-center p-4 md:p-10">
        <div className="text-center text-lg max-w-2xl text-white">
          <h1>
            SGCC는 1982년에 창립된 "컴퓨터"라는 공통 관심사를 가진 사람들이 모인
            서강대학교 유일의 중앙 컴퓨터 동아리입니다. SGCC는 컴퓨터에 관한 모든
            주제에 대해 환영하는 소통의 장으로서, 약 40년 간의 역사를 이어가고 있습니다.
          </h1>
          {/* 이미지 경로를 절대 경로로 수정하여 public 폴더의 images/9.png 파일을 참조 */}
          <img
            src="/images/9.png"
            className="mx-auto mt-4 w-auto h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[300px]"
            alt="SGCC 로고"
          />
          <h1 className="text-lg text-white sm:text-2xl font-bold mt-6">"초보자들을 위한 사다리"</h1>
          <h1 className="text-white mt-2">
            SGCC는 초심자 분들의 프로그래밍 진입 장벽을 낮추기 위해 노력합니다.
            원하는 컴퓨터 분야에 대해 높은 접근성을 제공합니다.
          </h1>
          <h1 className="text-lg text-white sm:text-2xl font-bold mt-6">"협업과 소통의 장"</h1>
          <h1 className="mt-2 text-white">
            SGCC는 다양한 주제의 프로젝트 개발 기회를 제공하며,
          </h1>
          <h1 className="mt-2 text-white">
            협업과 소통의 경험을 쌓을 수 있습니다.
          </h1>
        </div>

        <YearSelector
          year={year}
          onChange={(direction) => setYear(year + direction)}
        />

        <CalendarGrid
          onSelectMonth={setSelectedMonth}
          selectedMonth={selectedMonth}
        />

        <EventBox selectedMonth={selectedMonth} year={year} />
      </main>
    </div>
  );
}