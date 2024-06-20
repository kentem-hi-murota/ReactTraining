import { SerializedStyles } from '@emotion/react';
interface Props {
  style?: SerializedStyles | SerializedStyles[];
  value: number | string;
  className?: string;
  colSpan?: number;
  isHeader?: boolean;
  clickHandler?: () => void;
}

const TableCell = ({ style, value, className, colSpan, isHeader = false, clickHandler }: Props) => {
  return (
    <>
      {isHeader ? (
        <th css={style} colSpan={colSpan} className={className} onClick={clickHandler}>
          {value}
        </th>
      ) : (
        <td css={style} colSpan={colSpan} className={className}>
          {value}
        </td>
      )}
    </>
  );
};

export default TableCell;
