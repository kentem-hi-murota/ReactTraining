import { css } from '@emotion/react';

const Preview = () => {
  return (
    <div css={previewStyle}>
      <h2>タイトル</h2>
      <p>ノート内容</p>
    </div>
  );
};

const previewStyle = css({
  textAlign: 'left',
  height: 'calc(50vh - 16px)',
  margin: '16px 16px',
  overflowY: 'scroll',
  background: 'rgba(0,0,0,0.1)',

  'h2,p': {
    margin: 0,
    padding: '12px',
  },
});

export default Preview;
