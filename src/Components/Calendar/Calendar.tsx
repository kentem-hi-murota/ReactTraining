import { css } from '@emotion/react';
import { useState } from 'react';

interface DateType {
  date: number;
  isToday: boolean;
  isDisabled: boolean;
}

function Calendar() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());

  const today = new Date();
  const getCalendar = (): DateType[][] => {
    const d = new Date(currentYear, currentMonth, 0).getDate();
    const n = new Date(currentYear, currentMonth, 1).getDay();
    const head: DateType[] = [...Array(n)]
      .map((_, i) => {
        return { date: d - i, isToday: false, isDisabled: true };
      })
      .reverse();

    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const body: DateType[] = [...Array(lastDate)].map((_, i) => {
      return { date: i + 1, isToday: false, isDisabled: false };
    });
    body[today.getDate() - 1].isToday = currentMonth === today.getMonth() && currentYear === today.getFullYear();

    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDay();
    const tail: DateType[] = [...Array(7 - lastDay - 1)].map((_, i) => {
      return { date: i + 1, isToday: false, isDisabled: true };
    });

    const dates = [...head, ...body, ...tail];
    const weekLength = Math.floor(dates.length / 7);
    const weeks: DateType[][] = [...Array(weekLength)].map(() => [...Array(7)]);
    for (let i = 0; i < weekLength; i++) {
      weeks[i] = dates.slice(i * 7, (i + 1) * 7);
    }
    return weeks;
  };

  const movePrev = () => {
    if (currentMonth === 0) {
      setCurrentYear((prev) => --prev);
      setCurrentMonth(11);
    } else {
      setCurrentMonth((prev) => --prev);
    }
  };

  const moveNext = () => {
    if (currentMonth === 11) {
      setCurrentYear((prev) => ++prev);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((prev) => ++prev);
    }
  };

  const moveToday = () => {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
  };

  return (
    <div>
      <table css={calendarStyle}>
        <thead css={calendarHeaderStyle}>
          <tr>
            <th colSpan={2} onClick={movePrev} css={buttonStyle}>
              &laquo;
            </th>
            <th colSpan={3}>
              {currentYear}/{(currentMonth + 1).toString().padStart(2, '0')}
            </th>
            <th colSpan={2} onClick={moveNext} css={buttonStyle}>
              &raquo;
            </th>
          </tr>
          <tr>
            <td css={calendarDayStyle}>Sun</td>
            <td css={calendarDayStyle}>Mon</td>
            <td css={calendarDayStyle}>Tue</td>
            <td css={calendarDayStyle}>Wed</td>
            <td css={calendarDayStyle}>Thu</td>
            <td css={calendarDayStyle}>Fri</td>
            <td css={calendarDayStyle}>Sat</td>
          </tr>
        </thead>
        <tbody>
          {getCalendar().map((week, i) => {
            return (
              <tr key={'week' + i}>
                {week.map((date, j) => (
                  <td
                    key={'date' + j}
                    css={calendarDateStyle}
                    className={(date.isToday ? 'today' : '') + (date.isDisabled ? 'disabled' : '')}
                  >
                    {date.date}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7} onClick={moveToday} css={buttonStyle}>
              Today
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

const calendarStyle = css({
  background: '#EEE',
});

const calendarHeaderStyle = css({
  '& th': css({ padding: '8px 0' }),
});

const buttonStyle = css({
  cursor: 'pointer',
  userSelect: 'none',
});

const calendarDayStyle = css({
  fontSize: '14px',
  fontWeight: 'bold',
  padding: '4px 0',
});

const calendarDateStyle = css({
  background: 'white',
  textAlign: 'left',
  padding: '4px 8px 4px 2px',
  fontSize: '12px',
  width: '36px',
  height: '24px',

  '&.disabled': css({
    opacity: '0.5',
  }),

  '&.today': css({
    fontWeight: 'bold',
  }),

  '&:nth-child(1)': css({
    color: 'red',
  }),
  '&:nth-child(7)': css({
    color: 'blue',
  }),
});

export default Calendar;
