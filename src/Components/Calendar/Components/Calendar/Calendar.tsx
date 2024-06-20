import { useState } from 'react';
import { css } from '@emotion/react';
import { CalendarHead, CalendarBody, CalendarTail } from '../index';

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());

  const today = new Date();

  const movePrev = (): void => {
    if (currentMonth === 0) {
      setCurrentYear((prev) => --prev);
      setCurrentMonth(11);
    } else {
      setCurrentMonth((prev) => --prev);
    }
  };

  const moveNext = (): void => {
    if (currentMonth === 11) {
      setCurrentYear((prev) => ++prev);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((prev) => ++prev);
    }
  };

  const moveToday = (): void => {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
  };

  return (
    <div>
      <table css={calendarStyle}>
        <CalendarHead currentMonth={currentMonth} currentYear={currentYear} movePrev={movePrev} moveNext={moveNext} />
        <CalendarBody currentMonth={currentMonth} currentYear={currentYear} />
        <CalendarTail style={calendarButtonStyle} colSpan={7} clickHandler={moveToday}></CalendarTail>
      </table>
    </div>
  );
};

const calendarStyle = css({
  background: '#EEE',
});

const calendarButtonStyle = css({
  cursor: 'pointer',
  userSelect: 'none',
});

export default Calendar;
