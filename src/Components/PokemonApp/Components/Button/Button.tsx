interface Props {
  buttonText: string;
  clickHandler: () => void;
}

const Button = ({ buttonText, clickHandler }: Props) => {
  return <button onClick={clickHandler}>{buttonText}</button>;
};

export default Button;
