import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;

          font-family: "Inter", sans-serif;
        }
        ::-ms-reveal {
          display: none;
        }
      `}
    />
  );
};

export { GlobalStyles };
