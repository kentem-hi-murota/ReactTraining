import { css, Global } from '@emotion/react';
import { Pokemon, Blog, Note } from './Components';
import { useEffect, useState } from 'react';

function App() {
  const [currentApp, setCurrentApp] = useState<React.ReactNode>(<Blog />);

  const apps: { name: string; app: React.ReactNode }[] = [
    { name: 'blog', app: <Blog /> },
    { name: 'pokemon', app: <Pokemon /> },
    { name: 'note', app: <Note /> },
  ];

  const setApp = (Children: React.ReactNode): void => {
    setCurrentApp(Children);
  };

  useEffect(() => {
    localStorage.clear();
  }, [currentApp]);
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
});

export default App;

