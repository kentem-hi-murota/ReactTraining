import { css } from '@emotion/react';
import type { Note } from '../../Note';

interface Props {
  addNote: () => void;
  removeNote: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
  selectedId: string;
  selectedNoteHandler: (note: Note) => void;
  notes: Note[];
}

const NoteList = ({ addNote, removeNote, selectedId, selectedNoteHandler, notes }: Props) => {
  const selectedNoteStyle = css({
    background: '#b79600',
  });

  return (
    <div css={sideBarStyle}>
      <section css={sideBarHeadStyle}>
        <h1>ノート</h1>
        <button css={buttonStyle} onClick={addNote}>
          追加
        </button>
      </section>
      <ul css={listStyle}>
        {notes.map((note) => {
          return (
            <li
              key={note.id}
              css={note.id === selectedId && selectedNoteStyle}
              onClick={() => selectedNoteHandler(note)}
            >
              <div>
                <h3 css={h3Style}>{note.title}</h3>
                <p css={paragraphStyle}>{note.content}</p>
                <small css={smallStyle}>{new Date(note.modDate).toLocaleString('ja-JP')}</small>
              </div>
              <button css={buttonStyle} onClick={(e) => removeNote(e, note.id)}>
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const sideBarStyle = css({
  width: '30%',
  height: '100vh',
});

const sideBarHeadStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px',

  h1: css({
    margin: '0',
  }),
});

const buttonStyle = css({
  all: 'unset',
  borderRadius: '16px',
  background: 'black',
  textAlign: 'center',
  color: '#EEE',
  height: '32px',
  width: '48px',

  '&:hover': {
    opacity: '0.8',
    cursor: 'pointer',
  },
});

const listStyle = css({
  margin: 0,
  padding: 0,
  overflowY: 'scroll',
  height: 'calc(100vh - 68px)',

  '&>li': css({
    justifyContent: 'space-between',
    display: 'flex',
    textAlign: 'left',
    padding: '16px',

    '&:hover': css({
      background: '#b79600',
      cursor: 'pointer',
    }),
  }),
});

const h3Style = css({
  margin: 0,
});

const paragraphStyle = css({
  margin: 0,
  marginTop: '8px',
});

const smallStyle = css({
  display: 'block',
  color: '#777',
  marginTop: '8px',
});

export default NoteList;
