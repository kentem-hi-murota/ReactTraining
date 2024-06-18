import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const MemoPad = () => {
  const [isAppear, setIsAppear] = useState(false);

  useEffect(() => {
    const timerId: NodeJS.Timeout = setTimeout(() => {
      setIsAppear(false);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [isAppear]);

  const saveMemo = () => {
    setIsAppear(true);
  };

  return (
    <>
      <h1 css={h1Style}>メモ帳</h1>
      <main css={mainStyle}>
        <textarea rows={12} css={textAreaStyle}></textarea>
        <div css={controlStyle}>
          <p css={[pStyle, isAppear && setAppear]}>保存しました</p>
          <button>削除</button>
          <button onClick={saveMemo}>保存</button>
          <button>復元</button>
        </div>
      </main>
    </>
  );
};

const h1Style = css({
  margin: '8px 0',
  fontSize: '24px',
});

const mainStyle = css({
  width: '360px',
  margin: '0 auto',
});

const textAreaStyle = css({
  width: '100%',
});

const controlStyle = css({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  width: '360px',
  marginTop: '8px',

  '&>button': css({
    padding: '4px 8px',
  }),
});

const pStyle = css({
  margin: '0 auto 0 0 ',
  opacity: 0,
  transition: `opacity 0.5s`,
});

const setAppear = css({
  opacity: 1,
});

export default MemoPad;
