import { css } from '@emotion/react';

const Editor = () => {
  return (
    <div css={editorStyle}>
      <input type="text" placeholder="title" css={titleStyle}></input>
      <textarea placeholder="content" css={contentStyle}></textarea>
    </div>
  );
};

const editorStyle = css({
  height: '50vh',
  padding: '16px',
});

const titleStyle = css({
  fontSize: '36px',
  width: '100%',
  padding: '5px',
});

const contentStyle = css({
  resize: 'none',
  marginTop: '16px',
  overflowY: 'scroll',
  lineHeight: '1.3',
  height: 'calc(40vh - 16px)',
  width: '100%',
  padding: '5px',
});

export default Editor;
