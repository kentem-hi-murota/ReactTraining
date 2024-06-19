import { useState } from 'react';

interface DateType {
  date: number;
  isToday: boolean;
  isDisabled: boolean;
}

function Calendar() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());

  const getCalendar = (): DateType[][] => {
    const today = new Date();
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

  // getCalendar().map((week) => console.log(week));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>&laquo;</th>
            <th>
              {currentYear}/{(currentMonth + 1).toString().padStart(2, '0')}
            </th>
            <th>&raquo;</th>
          </tr>
          <tr></tr>
          <tr>Sun</tr>
          <tr>Mon</tr>
          <tr>Tue</tr>
          <tr>Wed</tr>
          <tr>Thu</tr>
          <tr>Fri</tr>
          <tr>Sat</tr>
        </thead>
        <tbody>
          {getCalendar().map((week, i) => {
            return (
              <tr key={'week' + i}>
                {week.map((date, j) => (
                  <td key={'date' + j}>{date.date}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}>Today</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Calendar;
