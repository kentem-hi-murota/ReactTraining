import { css } from '@emotion/react';

interface Props {
  editTitle: string;
  editContent: string;
  editTitleHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editContentHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Editor = ({ editTitle, editContent, editTitleHandler, editContentHandler }: Props) => {
  return (
    <div css={editorStyle}>
      <input type="text" placeholder="title" css={titleStyle} onChange={editTitleHandler} value={editTitle}></input>
      <textarea placeholder="content" css={contentStyle} onChange={editContentHandler} value={editContent}></textarea>
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
