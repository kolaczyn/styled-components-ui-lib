import { css } from "@emotion/react";

export const Button = () => {
  return (
    <div>
      <div
        css={css({
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "black",
          color: "white",
        })}
      >
        Hello world
      </div>
    </div>
  );
};
