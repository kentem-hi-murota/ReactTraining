import { css } from '@emotion/react';
import { TableCell } from '../TableCell';

interface Props {
  currentYear: number;
  currentMonth: number;
  movePrev: () => void;
  moveNext: () => void;
}

const TableHead = ({ currentMonth, currentYear, movePrev, moveNext }: Props) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <thead css={tHeadStyle}>
      <tr>
        <TableCell
          style={[buttonStyle, calendarThStyle]}
          value={'≪'}
          colSpan={2}
          clickHandler={movePrev}
          isHeader={true}
        />
        <TableCell
          style={[calendarThStyle]}
          value={currentYear + '/' + (currentMonth + 1).toString().padStart(2, '0')}
          colSpan={3}
          clickHandler={movePrev}
          isHeader={true}
        />
        <TableCell
          style={[buttonStyle, calendarThStyle]}
          value={'≫'}
          colSpan={2}
          clickHandler={moveNext}
          isHeader={true}
        />
      </tr>
      <tr>
        {days.map((day) => (
          <TableCell style={calendarDayStyle} key={day} value={day} isHeader={true}></TableCell>
        ))}
      </tr>
    </thead>
  );
};

const tHeadStyle = css({
  alignContent: 'center',
});

const calendarThStyle = css({
  padding: '8px 0',
});

const buttonStyle = css({
  cursor: 'pointer',
  userSelect: 'none',
});

const calendarDayStyle = css({
  fontSize: '14px',
  padding: '4px 0',
});

export default TableHead;
