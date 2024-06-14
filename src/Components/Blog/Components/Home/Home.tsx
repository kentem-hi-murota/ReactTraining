import { css } from '@emotion/react';

const Home = () => {
  return (
    <div css={homePageStyle}>
      <article css={articleStyle}>
        <section>
          <h2>タイトル</h2>
          <p css={paragrahStyle}>
            ooおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお
          </p>
        </section>
        <section css={authStyle}>
          <h3>onamae</h3>
          <button css={buttonStyle}>削除</button>
        </section>
      </article>
    </div>
  );
};

const homePageStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
});

const articleStyle = css({
  borderRadius: '8px',
  background: 'white',
  width: '540px',
  padding: '24px',
  margin: '20px auto',
  boxSizing: 'border-box',
  boxShadow: '0 0 8px #444',

  'h2,h3': {
    margin: 0,
  },
});

const paragrahStyle = css({
  textAlign: 'left',
  wordWrap: 'break-word',
});

const authStyle = css({
  borderTop: '1px solid #DDD',
  paddingTop: '16px',
  display: 'flex',
  justifyContent: 'space-between',
});

const buttonStyle = css({
  all: 'unset',
  borderRadius: '4px',
  background: 'tomato',
  padding: '4px 16px',

  '&:hover': {
    cursor: 'pointer',
    opacity: '0.8',
  },

  '&:active': {
    opacity: '1',
    transform: 'translateY(2px)',
  },
});

export default Home;
