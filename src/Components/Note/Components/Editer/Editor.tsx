import { css } from '@emotion/react';

const Editor = () => {
  return (
    <div>
      <input type="text" placeholder="title" css={titleStyle}></input>
      <textarea placeholder="content" css={contentStyle}></textarea>
    </div>
  );
};

const titleStyle = css({
  fontSize: '36px',
  width: '100%',
  boxSizing: 'border-box',
});

const contentStyle = css({
  resize: 'none',
  marginTop: '16px',
  overflowY: 'scroll',
  lineHeight: '1.3',
  height: '40vh',
  width: '100%',
  boxSizing: 'border-box',
});

export default Editor;
