import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { collection, getDocs, DocumentData, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase';

const Home = () => {
  const [postList, setPostList] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await getDocs(collection(db, 'posts'));
        const articles = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setPostList(articles);
      } catch (error) {
        console.log(error);
      }
    };
    getArticles();
  }, []);

  const HandleDelete = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.href = '/';
  };

  return (
    <div css={homePageStyle}>
      {sessionStorage.getItem('isAuth') &&
        postList.map((post) => {
          return (
            <article css={articleStyle} key={post.id}>
              <section>
                <h2>{post.title}</h2>
                <p css={paragrahStyle}>{post.postsText}</p>
              </section>
              <section css={authStyle}>
                <h3>{post.author.username}</h3>
                {auth.currentUser?.uid === post.author.id && (
                  <button css={buttonStyle} onClick={() => HandleDelete(post.id)}>
                    削除
                  </button>
                )}
              </section>
            </article>
          );
        })}
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
