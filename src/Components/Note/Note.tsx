import { css } from '@emotion/react';
import { NoteList, Editor, Preview } from './Components/index';

const Note = () => {
  return (
    <div css={noteStyle}>
      <NoteList />
      <div>
        <Editor />
        <Preview />
      </div>
    </div>
  );
};

const noteStyle = css({
  display: 'flex',
});

export default Note;
