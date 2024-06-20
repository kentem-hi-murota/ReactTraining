import { SerializedStyles } from '@emotion/react';

interface Props {
  style: SerializedStyles | SerializedStyles[];
  colSpan?: number;
  clickHandler?: () => void;
}

const CalendarTail = ({ style, colSpan, clickHandler }: Props) => {
  return (
    <tfoot>
      <tr>
        <td colSpan={colSpan} onClick={clickHandler} css={style}>
          Today
        </td>
      </tr>
    </tfoot>
  );
};

export default CalendarTail;
