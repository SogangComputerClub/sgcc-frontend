import { useState } from "react";


const months = [
  "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
];

const events = {
  "2월": [{ date: "02.02 - 02.05", title: "무슨무슨 스터디 진행", details: "보류" }],
  "3월": [{ date: "03.01 - 03.09", title: "신입부원 모집" },
    {date: "03.04", title: "개강"},
    {date: "03.06 - 03.07", title: "동아리 거리제"},
    {date: "03.10 - 03.16", title: "세션 및 스터디 수요조사"}
  ]
};

function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white p-5 rounded-2xl justify-items-center">
      <h2 className="text-lg font-semibold">Contents</h2>
      <nav className="mt-4">
        <p className="py-2 cursor-pointer">인사말</p>
        <p className="py-2 cursor-pointer">캘린더</p>
      </nav>
    </aside>
  );
}

function Calendar({ onSelectMonth }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {months.map((month, index) => (
        <button
          key={index}
          onClick={() => onSelectMonth(month)}
          className="bg-gray-700 text-white p-5 rounded-2xl text-left text-2xl font-bold hover:bg-gray-600"
        >
          {month}
        </button>
      ))}
    </div>
  );
}

function EventList({ selectedMonth }) {
  return (
    selectedMonth && (
      <div className="mt-6 p-4 bg-gray-200 rounded">
        <h2 className="text-lg font-bold">{selectedMonth} 일정</h2>
        {events[selectedMonth] ? (
          events[selectedMonth].map((event, idx) => (
            <div key={idx} className="mt-2 p-2 bg-white rounded">
              <p className="text-sm text-gray-600">{event.date}</p>
              <p className="font-semibold">{event.title}</p>
              <p className="text-xs text-gray-500">{event.details}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">등록된 일정이 없습니다.</p>
        )}
      </div>
    )
  );
}

export default function AboutUsPage() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [year, setYear] = useState(2025);

  return (
    <div className="flex h-auto bg-white">
        <div className='w-1/6 h-auto bg-gray-100 p-3'>
        <Sidebar />
        </div>
      
      <main className="flex-1 p-10">
        <div className="h-96 text-center text-lg mb-6">
          <h1>SGCC는 1982년에 창립된 "컴퓨터"라는 공통 관심사를 가진 사람들이 모인 서강대학교 유일의 중앙 컴퓨터 동아리입니다. SGCC는 컴퓨터에 관한 모든 주제에 대해 환영하는 소통의 장으로서, 약 40년 간의 역사를 이어가고 있습니다.<br/><br/><br/>SGCC는 컴퓨터에 대한 다양한 분야를 체험할 수 있으며, 초심자에게 매우 친화적인 플랫폼입니다. 부원들은 매 학기 SGCC에서 운영하는 기초 프로그래밍 스터디 및 심화 세미나를 통해 함께 학습하며 성장해 나갈 수 있습니다. 뿐만 아니라, 슬기로운 인디 생활 등 정기적으로 프로젝트를 진행하며 협업의 장으로서 활발하게 활동하고 있습니다.</h1>
          <img src="images/9.png" className="w-auto h-auto" alt="SGCC 로고" />
        </div>
        <div className="flex justify-center items-center gap-4 mb-4">
          <button className="text-2xl text-gray-500 font-extrabold bg-white">&lt;</button>
          <span className="text-3xl font-bold">{year}</span>
          <button className="text-2xl text-gray-500 font-extrabold bg-white">&gt;</button>
        </div>

        <Calendar onSelectMonth={setSelectedMonth} />
        <EventList selectedMonth={selectedMonth} />
      </main>
    </div>
  );
}
