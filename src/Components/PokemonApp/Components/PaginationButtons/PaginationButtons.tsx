import { Button } from "../index";
import type { PaginationUrl } from "../../types";

interface Props {
  paginationUrl: PaginationUrl;
  setCurrentUrl: React.Dispatch<React.SetStateAction<string>>;
}

const PaginationButtons = ({ paginationUrl, setCurrentUrl }: Props) => {
  const MoveToPreviousPage = () => {
    setCurrentUrl(paginationUrl.previous);
  };
  const MoveToNextPage = () => {
    setCurrentUrl(paginationUrl.next);
  };

  return (
    <div>
      <Button buttonText="< まえ" clickHandler={MoveToPreviousPage} />
      <Button buttonText="つぎ >" clickHandler={MoveToNextPage} />
    </div>
  );
};

export default PaginationButtons;
