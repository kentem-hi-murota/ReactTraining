import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isAuth = localStorage.getItem('isAuth');
  const navigate = useNavigate();

  const Post = async () => {
    try {
      await addDoc(collection(db, 'posts'), {
        title: title,
        postsText: content,
        author: {
          username: auth.currentUser?.displayName,
          id: auth.currentUser?.uid,
        },
      });
      navigate('/');
    } catch (error) {
      alert('投稿できませんでした。');
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuth === 'false') navigate('/');
  }, []);

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
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button css={buttonStyle} onClick={Post}>
          投稿する
        </button>
      </div>
    </div>
  );
};

const createPostPageStyle = css({
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const createPostStyle = css({
  borderRadius: '8px',
  background: 'white',
  textAlign: 'left',
  width: '540px',
  padding: '24px',
  boxSizing: 'border-box',
  boxShadow: '0 0 16px #444',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
});

const cancelMargin = css({
  margin: 0,
});

const labelStyle = css({
  display: 'block',
});

const inputStyle = css({
  outline: 'none',
  boxSizing: 'border-box',
  height: '2em',
  width: '100%',
});

const textareaStyle = css({
  height: '10em',
});

const buttonStyle = css({
  border: 'none',
  borderRadius: '4px',
  background: '#333',
  color: 'white',
  height: '40px',
  width: '100%',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.8,
  },

  '&:active': {
    transform: 'translateY(2px)',
  },
});
export default CreatePost;
