import { css } from '@emotion/react';

import { TextInputForm, UList } from '../index';

const ScheduleList = () => {
  return (
    <div css={css({ width: '360px', border: '1px solid black' })}>
      <TextInputForm labels={['日付', '予定']} />
      <UList />
    </div>
  );
};

export default ScheduleList;
