import { css } from "@emotion/react";
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
    <div css={paginationButtonsStyle}>
      <Button
        buttonText="< まえ"
        clickHandler={MoveToPreviousPage}
        disabled={paginationUrl.previous.length === 0}
      />
      <Button
        buttonText="つぎ >"
        clickHandler={MoveToNextPage}
        disabled={paginationUrl.next.length === 0}
      />
    </div>
  );
};

const paginationButtonsStyle = css({
  margin:'32px 0',
});

export default PaginationButtons;
