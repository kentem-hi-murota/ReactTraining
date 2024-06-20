import { SerializedStyles } from '@emotion/react';
import { TableCell } from '../TableCell';

interface Props {
  style: SerializedStyles | SerializedStyles[];
  colSpan?: number;
  clickHandler?: () => void;
}

const CalendarTail = ({ style, colSpan, clickHandler }: Props) => {
  return (
    <tfoot>
      <tr>
        <TableCell colSpan={colSpan} clickHandler={clickHandler} style={style} value={'Today'} />
      </tr>
    </tfoot>
  );
};

export default CalendarTail;
