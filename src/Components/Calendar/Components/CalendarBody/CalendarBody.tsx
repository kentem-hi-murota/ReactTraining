import { css } from '@emotion/react';
import { TableCell } from '../TableCell';
export interface DateType {
  date: number;
  isToday: boolean;
  isDisabled: boolean;
}
interface Props {
  currentYear: number;
  currentMonth: number;
}

const CalendarBody = ({ currentYear, currentMonth }: Props) => {
  const today = new Date();

  const getHeadDate = (): DateType[] => {
    const d = new Date(currentYear, currentMonth, 0).getDate();
    const n = new Date(currentYear, currentMonth, 1).getDay();
    const head: DateType[] = [...Array(n)].map((_, i) => ({ date: d - i, isToday: false, isDisabled: true }));
    return head.reverse();
  };

  const getBodyDate = (): DateType[] => {
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const body: DateType[] = [...Array(lastDate)].map((_, i) => {
      return { date: i + 1, isToday: false, isDisabled: false };
    });
    body[today.getDate() - 1].isToday = currentMonth === today.getMonth() && currentYear === today.getFullYear();
    return body;
  };

  const getTailDate = (): DateType[] => {
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDay();
    const tail: DateType[] = [...Array(7 - lastDay - 1)].map((_, i) => {
      return { date: i + 1, isToday: false, isDisabled: true };
    });
    return tail;
  };

  const divideToWeeks = (dates: DateType[]): DateType[][] => {
    const weekLength = Math.floor(dates.length / 7);
    const weeks: DateType[][] = [...Array(weekLength)].map(() => [...Array(7)]);
    for (let i = 0; i < weekLength; i++) {
      weeks[i] = dates.slice(i * 7, (i + 1) * 7);
    }
    return weeks;
  };

  const getCalendar = (): DateType[][] => {
    const head = getHeadDate();
    const body = getBodyDate();
    const tail = getTailDate();
    const weeks = divideToWeeks([...head, ...body, ...tail]);
    return weeks;
  };

  const renderRows = (week: DateType[]): React.ReactNode => {
    return week.map((date, dateIndex) => (
      <TableCell
        key={'date' + dateIndex}
        style={calendarDateStyle}
        className={(date.isToday ? 'today' : '') + (date.isDisabled ? 'disabled' : '')}
        value={date.date}
      />
    ));
  };

  return (
    <tbody>
      {getCalendar().map((week, weekIndex) => (
        <tr key={'week' + weekIndex}>{renderRows(week)}</tr>
      ))}
    </tbody>
  );
};

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

  '&:nth-of-type(1)': css({
    color: 'red',
  }),
  '&:nth-of-type(7)': css({
    color: 'blue',
  }),
});

export default CalendarBody;
