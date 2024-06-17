import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
interface Props {
  isAuthHandler: (data: 'true' | 'false') => void;
}

const Login = ({ isAuthHandler }: Props) => {
  const LoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      isAuthHandler('true');
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p>ログインして始める</p>
      <button onClick={LoginWithGoogle}>Googleでログイン</button>
    </>
  );
};

export default Login;
