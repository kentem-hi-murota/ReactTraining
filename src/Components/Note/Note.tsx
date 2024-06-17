import { css } from '@emotion/react';
import { NoteList, Editor, Preview } from './Components/index';

const Note = () => {
  return (
    <div css={noteStyle}>
      <NoteList />
      <main css={mainStyle}>
        <Editor />
        <Preview />
      </main>
    </div>
  );
};

const noteStyle = css({
  display: 'flex',
});

const mainStyle = css({
  padding: '24px',
  width: '100%',
  boxSizing: 'border-box',
});

export default Note;
