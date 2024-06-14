import { css } from "@emotion/react";
import { useEffect } from "react";

const CreatePost = () => {
  useEffect(() => {}, []);
  return (
    <div css={createPostPageStyle}>
      <div css={createPostStyle}>
        <h2 css={cancelMargin}>記事を投稿する</h2>
        <label css={labelStyle}>
          タイトル
          <br />
          <input
            type="text"
            id="title"
            placeholder="タイトルを記入"
            css={inputStyle}
          />
        </label>
        <label css={labelStyle}>
          投稿
          <br />
          <textarea
            id="content"
            placeholder="投稿内容を記入"
            className="content"
            css={[inputStyle, textareaStyle]}
          />
        </label>
        <button css={buttonStyle}>投稿する</button>
      </div>
    </div>
  );
};

const createPostPageStyle = css({
  height: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const createPostStyle = css({
  borderRadius: "8px",
  background: "white",
  textAlign: "left",
  width: "540px",
  padding: "24px",
  boxSizing: "border-box",
  boxShadow: "0 0 16px #444",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "10px",
});

const cancelMargin = css({
  margin: 0,
});

const labelStyle = css({
  display: "block",
});

const inputStyle = css({
  outline: "none",
  boxSizing: "border-box",
  height: "2em",
  width: "100%",
});

const textareaStyle = css({
  height: "10em",
});

const buttonStyle = css({
  border: "none",
  borderRadius: "4px",
  background: "#333",
  color: "white",
  height: "40px",
  width: "100%",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.8,
  },

  "&:active": {
    transform: "translateY(2px)",
  },
});
export default CreatePost;
