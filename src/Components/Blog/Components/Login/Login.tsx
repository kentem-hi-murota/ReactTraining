import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
interface Props {
  isAuthHandler: (data: boolean) => void;
}

const Login = ({ isAuthHandler }: Props) => {
  const navigate = useNavigate();
  const LoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      isAuthHandler(true);
      navigate("/");
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
