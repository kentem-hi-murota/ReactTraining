import { css } from '@emotion/react';

const NoteList = () => {
  const NoteExample = [
    {
      title: 'test1',
      content: 'contenttest',
      editedTime: '2022',
    },
    {
      title: 'test2',
      content: 'contenttest',
      editedTime: '202',
    },
    {
      title: 'test3',
      content: 'contenttest',
      editedTime: '2023',
    },
  ];

  return (
    <div css={tmpStyle}>
      <h1>ノート</h1>
      <button>追加</button>
      {NoteExample.map((note) => {
        return (
          <div key={note.title} css={tmpStyle}>
            <div>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <small>{note.editedTime}</small>
            </div>
            <button>削除</button>
          </div>
        );
      })}
    </div>
  );
};

const tmpStyle = css({
  border: '2px solid black',
});

export default NoteList;
