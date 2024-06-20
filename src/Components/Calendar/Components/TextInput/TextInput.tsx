interface Props {
  label: string;
}

const TextInput = ({ label }: Props) => {
  return (
    <div>
      <label>
        {label}：
        <input type="text" />
      </label>
    </div>
  );
};

export default TextInput;
