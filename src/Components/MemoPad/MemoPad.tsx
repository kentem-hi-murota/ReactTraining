import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const MemoPad = () => {
  const [isAppear, setIsAppear] = useState(false);
  const [memoText, setMemoText] = useState<string>('');

  useEffect(() => {
    const timerId: NodeJS.Timeout = setTimeout(() => {
      setIsAppear(false);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [isAppear]);

  const removeMemo = (): void => {
    if (confirm('削除しますか?')) {
      sessionStorage.removeItem('memo');
      setMemoText('');
    }
  };

  const saveMemo = (): void => {
    sessionStorage.setItem('memo', memoText);
    setIsAppear(true);
  };

  const restoreMemo = (): void => {
    const storedMemo: string = sessionStorage.getItem('memo') ?? '';
    setMemoText(storedMemo);
  };

  return (
    <>
      <h1 css={h1Style}>メモ帳</h1>
      <main css={mainStyle}>
        <textarea
          rows={12}
          css={textAreaStyle}
          onChange={(e) => {
            setMemoText(e.target.value);
          }}
          value={memoText}
        ></textarea>
        <div css={controlStyle}>
          <p css={[pStyle, isAppear && setAppear]}>保存しました</p>
          <button onClick={removeMemo} disabled={Boolean(!sessionStorage.getItem('memo'))}>
            削除
          </button>
          <button onClick={saveMemo} disabled={Boolean(!memoText)}>
            保存
          </button>
          <button onClick={restoreMemo} disabled={Boolean(!sessionStorage.getItem('memo'))}>
            復元
          </button>
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
