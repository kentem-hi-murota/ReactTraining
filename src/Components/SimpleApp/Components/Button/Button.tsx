interface Props {
  value: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  clickHandler: () => void;
}

const Button = (props: Props) => {
  return (
    <button type={props.type} onClick={props.clickHandler}>
      {props.value}
    </button>
  );
};

export default Button;
