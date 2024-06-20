import { TextInput } from '../index';

interface Props {
  labels: string[];
}

const TextInputForm = ({ labels }: Props) => {
  return (
    <div>
      {labels.map((label) => (
        <TextInput key={label} label={label} />
      ))}
      <input type="submit" value="ボタン" />
    </div>
  );
};

export default TextInputForm;
