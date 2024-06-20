import { css, Global } from '@emotion/react';
import { Pokemon, Blog, Note, MemoPad, Bingo, Schedule } from './Components';
import { useState } from 'react';

function App() {
  const [currentApp, setCurrentApp] = useState<React.ReactNode>(<Blog />);

  const apps: { name: string; app: React.ReactNode }[] = [
    { name: 'blog', app: <Blog /> },
    { name: 'pokemon', app: <Pokemon /> },
    { name: 'note', app: <Note /> },
    { name: 'memo', app: <MemoPad /> },
    { name: 'Bingo', app: <Bingo /> },
    { name: 'Schedule', app: <Schedule /> },
  ];

  const setApp = (Children: React.ReactNode): void => {
    setCurrentApp(Children);
  };

  const clearSessionStorage = (): void => {
    if (confirm('session storageをリセットしますか？')) {
      sessionStorage.clear();
      window.location.href = '/';
    }
  };

  return (
    <>
      <Global styles={bodyGrobalStyle} />
      <header css={headerStyle}>
        <span>Apps:</span>
        {apps.map((app) => (
          <button key={app.name} css={buttonStyle} onClick={() => setApp(app.app)}>
            {app.name}
          </button>
        ))}
        <button css={buttonStyle} className="reset" onClick={clearSessionStorage}>
          Clear SessionStorage
        </button>
      </header>
      {currentApp}
    </>
  );
}

const bodyGrobalStyle = css({
  body: {
    background: '#FDD000',
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    margin: '0',
  },

  '*': {
    boxSizing: 'border-box',
  },
});

const headerStyle = css({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  borderBottom: '1px solid #aaa',
});

const buttonStyle = css({
  borderRadius: '4px',
  background: 'none',
  margin: '4px 0',
  width: '72px',
  height: '28px',
  padding: '2px 0',

  '&:hover': css({
    cursor: 'pointer',
    background: '#fae278',
  }),

  '&.reset': css({
    width: '144px',
    margin: '4px 4px 4px auto',
    background: 'tomato',
    border: '2px solid salmon',
  }),
});

export default App;

