import { css } from '@emotion/react';

const ScheduleList = () => {
  return (
    <div css={css({ width: '360px', border: '1px solid black' })}>
      <input type="text" />
      <button>ボタン</button>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </div>
  );
};

export default ScheduleList;
