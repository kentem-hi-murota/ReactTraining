import { css } from '@emotion/react';
import { NoteList, Editor, Preview } from './Components/index';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export interface Note {
  id: string;
  title: string;
  content: string;
  modDate: number;
}

const Note = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: '新しいノート',
      content: '',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div css={noteStyle}>
      <NoteList addNote={addNote} notes={notes} />
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
