import { auth, provider } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface Props {
  isAuthHandler: (data: boolean) => void;
}

const Logout = ({ isAuthHandler }: Props) => {
  const navigate = useNavigate();
  const Logout = async () => {
    const result = await signOut(auth);
    isAuthHandler(false);
    navigate("/login");
  };

  return (
    <>
      <p>ログアウトする</p>
      <button onClick={Logout}>ログアウト</button>
    </>
  );
};

export default Logout;
