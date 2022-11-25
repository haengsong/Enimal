import React, { useReducer } from "react";
import calendarReducer from "./reducer/CalendarReducer";
import MakeCalendar from "./MakeCalendar";

import "./DayCheck.scss";
import "react-calendar/dist/Calendar.css"; // css import

const today = new Date();
// 초기 상태
const initialState = {
  year: today.getFullYear(),
  month: today.getMonth()
};

function DayCheck() {

  const [state, dispatch] = useReducer(calendarReducer, initialState);
  // 날짜 관련
  const { year, month } = state;
  const yearMonth = `${year}.${month + 1}`;
  const lastDate = parseInt(new Date(year, month + 1, 0).getDate(), 10);
  const firstDay = parseInt(new Date(year, month, 1).getDay(), 10);

  // Month 감소
  const onDecreases = () => {
    dispatch({ type: "DECREMENT" });
  };

  // Month 증가
  const onIncreases = () => {
    dispatch({ type: "INCREMENT" });
  };
  return (
    <div className="Calendar">
      <div className="header">
        <button type="button" className="move fs-40 notoBold" onClick={onDecreases}>
          &lt;
        </button>
        <h1 className="fs-40 notoBold mx-4">{yearMonth}</h1>
        <button type="button" className="move fs-40 notoBold" onClick={onIncreases}>
          &gt;
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <td className="text-center fs-20 roBold">Sun</td>
            <td className="text-center fs-20 roBold">Mon</td>
            <td className="text-center fs-20 roBold">Tue</td>
            <td className="text-center fs-20 roBold">Wed</td>
            <td className="text-center fs-20 roBold">Thu</td>
            <td className="text-center fs-20 roBold">Fri</td>
            <td className="text-center fs-20 roBold">Sat</td>
          </tr>
        </thead>
        <tbody>{MakeCalendar({ year, month, firstDay, lastDate })}</tbody>
      </table>
    </div>
  );
}

export default React.memo(DayCheck);
