interface Props {
  value: string;
}

const Label = (props: Props) => {
  return <label aria-label="label">{props.value}</label>;
};

export default Label;
