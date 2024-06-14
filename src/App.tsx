import { css, Global } from "@emotion/react";
import { Pokemon, Blog } from "./Components";

function App() {
  return (
    <>
      <Global styles={bodyGrobalStyle} />
      {/* <Pokemon /> */}
      <Blog />
    </>
  );
}

const bodyGrobalStyle = css({
  body: {
    background: "#FDD000",
    textAlign: "center",
    width: "100%",
    height: "100vh",
    margin: "0",
  },
});

export default App;

