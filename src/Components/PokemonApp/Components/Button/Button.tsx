import { css } from "@emotion/react";
interface Props {
  buttonText: string;
  clickHandler: () => void;
  disabled?: boolean;
}

const Button = ({ buttonText, clickHandler, disabled=false }: Props) => {
  return (
    <button onClick={clickHandler} css={buttonStyle} disabled={disabled}>
      {buttonText}
    </button>
  );
};

const buttonStyle = css({
  all: "unset",
  borderRadius: "4px",
  background: "white",
  border: "1px solid #BBB",
  margin: '0 8px',
  width: "6em",
  height: "3em",

  "&:hover": css({
    cursor: "pointer",
    opacity: 0.8,
  }),

  "&:disabled": css({
    cursor: "default",
    opacity: 0.5,
  }),
});

export default Button;
