import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav css={navVarStyle}>
      <Link to="/" css={linkStyle}>
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/createpost" css={linkStyle}>
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      <Link to="/login" css={linkStyle}>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        ログイン
      </Link>
    </nav>
  );
};

const navVarStyle = css({
  display: "flex",
  justifyContent: "center",
  gap: "32px",
  background: "#EEE",
  width: "100%",
  padding: "16px 0",
});

const linkStyle = css({
  all: "unset",
  borderRadius: "4px",
  background: "#444",
  color: "white",
  padding: "4px 16px",

  "&:hover": css({
    cursor: "pointer",
    background: "#888",
  }),

  svg: css({
    marginRight: "5px",
  }),
});

export default Navbar;
