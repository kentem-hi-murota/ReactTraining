import { css } from '@emotion/react';
import { NoteList, Editor, Preview } from './Components/index';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

export interface Note {
  id: string;
  title: string;
  content: string;
  modDate: number;
}

const Note = () => {
  const [notes, setNotes] = useState<Note[]>(JSON.parse(localStorage.getItem('notes') as string));
  const [selectedNote, setSelectedNote] = useState<Note>({ id: '', title: '', content: '', modDate: -1 });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notes.length) setSelectedNote(notes[0]);
  }, []);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: '新しいノート',
      content: '',
      modDate: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const removeNote = (e: React.MouseEvent<HTMLButtonElement>, id: string): void => {
    e.stopPropagation();
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes([...newNotes]);
    setSelectedNote({ id: '', title: '', content: '', modDate: -1 });
  };

  const selectedNoteHandler = (note: Note): void => {
    setSelectedNote(note);
  };

  const editTitleHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const title = e.target.value;
    const targetNote: Note = notes.filter((note) => note.id === selectedNote.id)[0];
    const newNote: Note = { ...targetNote, title: title, modDate: Date.now() };
    setNotes([newNote, ...notes.filter((note) => note.id !== selectedNote.id)]);
    setSelectedNote(newNote);
  };

  const editContenteHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const content = e.target.value;
    const targetNote: Note = notes.filter((note) => note.id === selectedNote.id)[0];
    const newNote: Note = { ...targetNote, content: content };
    setNotes([newNote, ...notes.filter((note) => note.id !== selectedNote.id)]);
    setSelectedNote(newNote);
  };

  return (
    <div css={noteStyle}>
      <NoteList
        addNote={addNote}
        removeNote={removeNote}
        selectedId={selectedNote.id}
        selectedNoteHandler={selectedNoteHandler}
        notes={notes}
      />
      <main css={mainStyle}>
        {selectedNote.id ? (
          <>
            <Editor
              editTitle={selectedNote.title}
              editContent={selectedNote.content}
              editTitleHandler={editTitleHandler}
              editContentHandler={editContenteHandler}
            />
            <Preview title={selectedNote.title} content={selectedNote.content} />
          </>
        ) : (
          <p css={noSelectNoteStyle}>ノートが選択されていません。</p>
        )}
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

const noSelectNoteStyle = css({
  lineHeight: '50vh',
  fontSize: '32px',
  color: '#444',
});

export default Note;
