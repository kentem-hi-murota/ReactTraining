import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

interface Props {
  isAuthHandler: (data: 'true' | 'false') => void;
}

const Logout = ({ isAuthHandler }: Props) => {
  const Logout = async () => {
    await signOut(auth);
    isAuthHandler('false');
    window.location.href = '/login';
  };

  return (
    <>
      <p>ログアウトする</p>
      <button onClick={Logout}>ログアウト</button>
    </>
  );
};

export default Logout;
