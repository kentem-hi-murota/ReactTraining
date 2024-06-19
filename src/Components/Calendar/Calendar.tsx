import { useState } from 'react';

interface DateType {
  date: number;
  isToday: boolean;
  isDisabled: boolean;
}

function Calendar() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());

  const getCalendar = (): DateType[] => {
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
      return { date: i + 1, isToday: false, isDisabled: false };
    });
    return [...head, ...body, ...tail];
  };
  console.log(getCalendar());

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
          <tr>
            <td></td>
          </tr>
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
