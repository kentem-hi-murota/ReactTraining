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
  const [selectedId, setSelectedId] = useState<string>('');

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: '新しいノート',
      content: '',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const removeNote = (id: string): void => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes([...newNotes]);
  };

  const onSetSelectedId = (id: string): void => {
    setSelectedId(id);
  };

  return (
    <div css={noteStyle}>
      <NoteList
        addNote={addNote}
        removeNote={removeNote}
        selectedId={selectedId}
        onSetSelectedId={onSetSelectedId}
        notes={notes}
      />
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
  width: '100%',
  height: '100vh',
});

export default Note;
