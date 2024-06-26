interface Props {
  value: string;
}

const Label = (props: Props) => {
  return <label>{props.value}</label>;
};

export default Label;
