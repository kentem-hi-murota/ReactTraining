const MemoPad = () => {
  return (
    <>
      <h1>メモ帳</h1>
      <main>
        <textarea></textarea>
        <div>
          <p>保存しました</p>
          <button>削除</button>
          <button>保存</button>
          <button>復元</button>
        </div>
      </main>
    </>
  );
};

export default MemoPad;
