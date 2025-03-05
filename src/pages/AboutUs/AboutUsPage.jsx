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
          className="bg-gray-700 text-white p-6 rounded-2xl text-left text-2xl font-bold hover:bg-gray-600"
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
        <h1 className="text-center text-lg mb-6">무언가의 인사말이 적히는 공간이고<br/>이걸 밑으로 스크롤 하면 캘린더가 보이게 되는 그런</h1>
        
        <div className="flex justify-center items-center gap-4 mb-4">
          <button onClick={() => setYear(year - 1)} className="px-3 py-1 bg-gray-300 rounded">&lt;</button>
          <span className="text-xl font-bold">{year}</span>
          <button onClick={() => setYear(year + 1)} className="px-3 py-1 bg-gray-300 rounded">&gt;</button>
        </div>

        <Calendar onSelectMonth={setSelectedMonth} />
        <EventList selectedMonth={selectedMonth} />
      </main>
    </div>
  );
}
